# JavaScript
id:: 6708aad1-5efb-4b3f-ad99-e3ae2e73fcb4
:LOGBOOK:
CLOCK: [2024-10-11 Fri 12:18:00]
:END:
((665359e4-4597-4775-b849-f9acbb98960a)) ((6708aae5-891b-4e45-bb4e-d8a5e5c0c7ad))
	- JS
	  id:: 6708aae5-891b-4e45-bb4e-d8a5e5c0c7ad
	  ((665c9af1-1ce2-461c-af33-671690618c8f)) ((6708aad1-5efb-4b3f-ad99-e3ae2e73fcb4))
	- ((665359c0-a89a-41b5-9f28-503f79107a08)) https://en.wikipedia.org/wiki/JavaScript
	  id:: 6708b4f1-2857-4cfa-b066-55d4f90bf3a3
	- Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript
	- Object handling
		- The [enumerability & ownership](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) of object's property, whose key can be either string or [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol), are related to various functions, operations and control structures.
		  id:: 6708b829-9386-4423-8e93-5ce50c1ace1f
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2024-10-11 Fri 12:34:59]--[2024-10-11 Fri 15:38:05] =>  03:03:06
		  :END:
			- functions and operations for **any property**, either enumerable or non-enum, own or inherited
				- [obj[expression]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation)
				  id:: 6708d19a-e32e-44a8-bb16-70e4beb79a3b
				  can access any property, whose key is either string or Symbol.
				- [obj.identifier](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#dot_notation)
				  can access properties whose key is an [identifier](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), i.e. cannot start with number, nor have space, nor be a Symbol.
				- [key `in` obj](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
				  can check any property, whose key is either string or Symbol.
			- functions and operations for **only own enumerable** properties
				- [obj.`propertyIsEnumerable`()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable)
				- [`Object.keys`(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), [`Object.values`(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values), [`Object.entries`(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
				- [`Object.assign`(target, source1...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
				  can copy any own enumerable property, whose key is either string or Symbol.
					- This is equivalent to direct assignment with `obj.id = v` and `obj[exp]`
				- [Spread syntax `...`obj](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
				  is complicated by [`Symbol.iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) and 3 types of spreading: [object literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals), [array literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_array_literals), and [function argument list](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_function_calls).
			- control structure for **any enumerable** property, either own or inherited
				- [`for`(key `in` obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
			- functions for **any own** property, either enumerable or not
				- [`Reflect.ownKeys`(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)
					- [`Object.getOwnPropertyNames`(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
					- [`Object.getOwnPropertySymbols`(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
				- [`Object.getOwnPropertyDescriptors`(obj)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)
		- Manual `clear()` function
		  collapsed:: true
			- While `Map` provides [`Map.prototype.clear()` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear), the [plain object](((6708b36b-54f9-4455-bcb0-f6fb0c39f01e))) has no such convenient function.
				- This is due to the [complication](((6708b829-9386-4423-8e93-5ce50c1ace1f))) of [object's property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) (enumerability, configurabiblity, writability, getter, setter), which is designed for general purpose, not only for data storage like ((6708b36b-54f9-4455-bcb0-f6fb0c39f01e)).
			- ((66602f68-e23f-4b24-921e-b1a9fc0cc731)) We extend `Object.prototype` with a `clear()` function just to clear all enumerble properties owned by this object.
				- ```js
				  /** Clear all enumerable properties in an object
				   * (which are owned by that object only, not inherited)
				   */
				  Object.defineProperty(Object.prototype, 'clear', {
				    value: function(){
				      // Object.keys: enumerable own
				      // Object.getOwnPropertyNames: all own (enum & non-enum)
				      // for in: all enumerables (own & inherited)
				      for(p of Object.keys(this)){ delete this[p]; }
				    },
				    //enumerable: false, configurable: false, // already by default! A function should not be enumerable.
				    writable: true, // let this function to be updated (overriden) later on with assignment: Object.prototype.clear = function(){ /*new implementation*/ }
				  });
				  /* Note: If we don't defineProperty(), but do assignment
				    `Object.prototype.clear = function(){...}` first,
				    it will create an enumerable & configurable & writable property.
				    But a function in general should __not be enumerable__ though!
				  */
				  ```
		- TODO Extract the `wrap()` and `Backbone.MModel` in [_base.js](../assets/HTML/_base.js) which is copied from `~/opt/web/myhotel/airlink.myhotel/airlink/myhotel/templates/js/`
		  collapsed:: true
		  :LOGBOOK:
		  CLOCK: [2024-10-11 Fri 16:46:20]
		  :END:
			- Extend `Underscore.js`
			  ```js
			  /**
			  * Wrap a data object with accessors (get/setters)
			  * @param obj : Object -- the object to be wrapped
			  * @param fset : function -- setter: null = unwritable, undefined = direct write
			  * @param fget : function -- getter: null = unreadable, undefined = direct read
			  * @param configurable -- whether the obj can be rewrapped and unwrapped
			  */
			  wrap: function(obj, fset=this.fset_id, fget=undefined, configurable=false){...}
			  ```
			- Extend `Backbone.js`
			  ```js
			  /** Extend Backbone.Model.set():
			   * - Add getter & setter for new attributes to `this._data`
			   * - Fire `change(changed)` instead of `change(this)`
			   */
			  set: function(key, val, options) {...
			      // Add/remove getter & setter for new/obsolete attributes to/from `this.data`
			      //  and bubble the `change` event for MModel-attributes
			      var model = this;
			      // wrap this in a function(key) so that get/setter will capture only the **value of `key`**, not the external variable `key`.
			      function propertyDescriptor(key){return{...
			      }}
			  }
			  
			  ```
	- ## JSON
	  id:: 6708b36b-54f9-4455-bcb0-f6fb0c39f01e
	  :LOGBOOK:
	  CLOCK: [2024-10-11 Fri 12:18:05]
	  :END:
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((6708b36b-54f9-4455-bcb0-f6fb0c39f01e)) is the ((6708aad1-5efb-4b3f-ad99-e3ae2e73fcb4)) Object Notation which is commonly used as data format  in [electronic data interchange](https://en.wikipedia.org/wiki/Electronic_data_interchange), including that of [web applications](https://en.wikipedia.org/wiki/Web_application) with [servers](https://en.wikipedia.org/wiki/Server_(computing)). These days, JSON is prefered over the cumbersome XML format.
	- ## TypeScript
	  id:: 6708b45d-cf32-48eb-ab0f-60f34c45bdc4
	  :LOGBOOK:
	  CLOCK: [2024-10-11 Fri 12:18:11]
	  :END:
		- ((6651ecba-793d-43c5-8020-a9f260b032d8)) ((6708b45d-cf32-48eb-ab0f-60f34c45bdc4)) is a [free and open-source](https://en.wikipedia.org/wiki/Free_and_open-source) [high-level](https://en.wikipedia.org/wiki/High-level_programming_language) [programming language](https://en.wikipedia.org/wiki/Programming_language) developed by [Microsoft](https://en.wikipedia.org/wiki/Microsoft) that adds [static typing](https://en.wikipedia.org/wiki/Static_typing) with optional type [annotations](https://en.wikipedia.org/wiki/Annotation) to ((6708aad1-5efb-4b3f-ad99-e3ae2e73fcb4)).