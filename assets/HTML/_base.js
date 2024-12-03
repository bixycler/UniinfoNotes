


//////// jQuery Extensions \\\\\\\\\\

function BubblingEvent(e){return new Event(e, {bubbles:true, cancelable:false})}

jQuery.setInput = function(el, val) {
    if(el.value == val){ return }
    el.value = val;
    el.dispatchEvent(new BubblingEvent('change'));
}

jQuery.getHTML = function(el) {
    return el.innerHTML;
}

jQuery.setHTML = function(el, val) {
    if(el.value == val){ return }
    el.innerHTML = val;
    el.dispatchEvent(new BubblingEvent('change'));
}

jQuery.extend({valHooks: {
    text: {set: jQuery.setInput},
    number: {set: jQuery.setInput},
    password: {set: jQuery.setInput},
    email: {set: jQuery.setInput},
    date: {set: jQuery.setInput},
    'datetime-local': {set: jQuery.setInput},
    month: {set: jQuery.setInput},
    color: {set: jQuery.setInput},
    hidden: {set: jQuery.setInput},
    p: {get: jQuery.getHTML, set: jQuery.setHTML},
    span: {get: jQuery.getHTML, set: jQuery.setHTML},
    div: {get: jQuery.getHTML, set: jQuery.setHTML},
    a: {get: function(el){return el.href},
        set: function (el, val) {
            if(el.value == val){ return }
            el.href = val;
            el.dispatchEvent(new BubblingEvent('change'));
        }
    },
}});


//////// Underscore.js & Backbone.js Extensions \\\\\\\\\\

_.mixin({
    log: function(...data){ console.log(...data) },

    fget_id: function(key, value){ return value; },
    fset_id: function(key, value, data){ data[key] = value; },
    fget_log: function(key, value){
        console.log(this,"get",key,":",value);
        return value;
    },
    fset_log: function(key, value, data){
        var oldValue = data[key];
        data[key] = value;
        console.log(this,"set",key,"to",value,'from',oldValue);
    },
    fset_event: function(key, value, data){
        var events = 'change change:'+key;
        var oldValue = data[key];
        if(oldValue==value){ return }
        data[key] = value;
        this.trigger(events, key, value,oldValue)
    },
    /**
     * Wrap a data object with accessors (get/setters)
     * @param obj : Object -- the object to be wrapped
     * @param fset : function -- setter: null = unwritable, undefined = direct write
     * @param fget : function -- getter: null = unreadable, undefined = direct read
     * @param configurable -- whether the obj can be rewrapped and unwrapped
     */
    wrap: function(obj, fset=this.fset_id, fget=undefined, configurable=false){
        var data = {}; // for obj
        var config = {fget:fget, fset:fset, configurable:configurable};

        // wrapper := Object's Property{get,set}
        // wrap this in a function(key) so that get/setter will capture only the **value of `key`**, not the external variable `key`.
        function propertyDescriptor(key){return {
            get: function() {
                if(config.fget===null){ throw new TypeError(`Get the unreadable: obj[${key}]`) }
                return (config.fget===undefined)? data[key] :
                    _.bind(config.fget,this)(key,data[key]);
            },
            set: function(value) {
                if(config.fset===undefined){ data[key] = value; return }
                if(config.fset===null){ throw new TypeError(`Set the unwritable: obj[${key}] = ${value}`) }
                return _.bind(config.fset,this)(key, value,data);
            },
            enumerable: true,
            configurable: config.configurable,
        }}

        // key filter
        function exceptKey(key){
            return (_.isFunction(obj[key]) || _.isUndefined(obj[key])
                || typeof(key)==='string' && key[0] && (key[0] in {'_':0,'#':0}))
        }

        // Wrap it, using propertyDescriptor(key)
        //for(key in obj){ // this enumerates properties in the prototype chain, which is too much!
        for(key of _.keys(obj)) {
            if(exceptKey(key)){ continue }
            data[key] = obj[key];
            Object.defineProperty(obj, key, propertyDescriptor(key));
        }

        // (Internal) API for obj
        _.extend(obj,{
            _updateWrapper: function (fset=this.fset_id, fget=undefined){
                config.fset = fset;
                config.fget = fget;
            },
            _rewrap: function (){
                if(!config.configurable){ throw new TypeError("Rewrap an object that is not configurable."); }
                // Add new attributes
                Object.keys(obj).forEach(function (key) {
                    if(exceptKey(key) || key in data){ return }
                    data[key] = obj[key];
                    Object.defineProperty(obj, key, propertyDescriptor(key));
                });
                // Delete old attributes
                Object.keys(data).forEach(function (key) {
                    if(!(key in obj)){ delete data[key] }
                });
            },
            _unwrap: function (){
                if(!config.configurable){ throw new TypeError("Unwrap an object that is not configurable."); }
                Object.keys(data).forEach(function (key) {
                    Object.defineProperty(obj, key, {
                        value: data[key],
                        writable: true,
                        enumerable: true,
                        configurable: true,
                    });
                });
                delete obj._updateWrapper;
                delete obj._rewrap;
                delete obj._unwrap;
            },
        });
    },
});

Backbone.MModel = Backbone.Model.extend({

    constructor: function (attributes, options){
        options = options || {};
        var model = this;
        this._data = options.data || {};
        Object.defineProperty(this._data, '_', {
            value: function(key, val, opts){ // the `self` accessor to **all** attributes
                if(key===undefined){ return this }
                return model.set(key, val, opts);
            },
            writable: false,
            enumerable: false,
            configurable: true,
        });
        Backbone.Model.prototype.constructor.apply(this, [attributes, options]);
    },

    /** Extend Backbone.Model.set():
     * - Add getter & setter for new attributes to `this._data`
     * - Fire `change(changed)` instead of `change(this)`
     */
    set: function(key, val, options) {
        if (key == null) return this;

        // Handle both `"key", value` and `{key: value}` -style arguments.
        var attrs = {};
        if (typeof key === 'object') {
            attrs = key;
            options = val;
        } else {
            attrs[key] = val;
        }
        options = options || {};

        // call super.set()
        Backbone.Model.prototype.set.apply(this, [attrs, _(_.clone(options)).extend({silent: true})]);
        var changes = _.keys(this.changed);

        // Add/remove getter & setter for new/obsolete attributes to/from `this.data`
        //  and bubble the `change` event for MModel-attributes
        var model = this;
        // wrap this in a function(key) so that get/setter will capture only the **value of `key`**, not the external variable `key`.
        function propertyDescriptor(key){return{
            get: function () {
                return model.get(key);
            },
            set: function (value) {
                return model.set(key, value);
            },
            enumerable: true,
            configurable: true, // for future removal via Model.unset()

        }}
        function mchanges(key){ // curry: f(key)(changes) -> handler(changes)
            return function(changes){
                var ch = {}; ch[key] = changes; //NOT {key: changes} !!
                model.trigger('change', ch);
            }
        }
        for(key in attrs) {
            var bbmm = (attrs[key] && attrs[key]._backbone_model) || attrs[key];
            var ismm = (bbmm && bbmm instanceof Backbone.MModel);
            ismm && model.stopListening(bbmm, 'change');
            if(options.unset) {
                delete model._data[key];
                continue;
            }
            ismm && model.listenTo(bbmm, 'change', mchanges(key));
            var pd = Object.getOwnPropertyDescriptor(model._data, key);
            if (!pd || 'value' in pd) { // data[value, writable] XOR accessor[get, set]
                Object.defineProperty(model._data, key, propertyDescriptor(key));
            }
        }

        // Fire `change(changed)` instead of `change(this)`, using...
        //  the codes `trigger('change...')` below are copied from backbone.js

        // Trigger all relevant attribute changes.
        if (!options.silent) {
            if (changes.length) this._pending = true;
            for (var i = 0, l = changes.length; i < l; i++) {
                var change = changes[i];
                this.trigger('change:' + change, _.pick(this.changed,change), this.changed[change], options);
            }
        }

        // You might be wondering why there's a `while` loop here. Changes can
        // be recursively nested within `"change"` events.
        if (this.changing) return this;
        if (!options.silent) {
            while (this._pending) {
                this._pending = false;
                this.trigger('change', this.changed, options);
            }
        }

        return this;
    },
});

Backbone.mmodelize = function (obj, options={model: Backbone.MModel}) {
    if(!(options.model && options.model.prototype
        && (options.model.prototype instanceof Backbone.MModel
            || options.model == Backbone.MModel))){
        throw TypeError('mmodelized by a model not an extension of Backbone.MModel.');
    }
    var mmodel = new options.model(_.clone(obj), _(_(options).omit('model')).extend({data:obj}));
    Object.defineProperty(obj,'_backbone_model', {
        value: mmodel,
        writable: false,
        enumerable: false,
        configurable: true,
    });
};

