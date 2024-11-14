//<script>
  //FolderDivTemplate = document.getElementById("folder-div").innerHTML; // FolderDiv.html
  //const FolderDivTemplateHtml = ``; // FolderDiv.js
  //const FolderDivTemplateStyle = ``; // FolderDiv.js
  //const FolderDivTemplate = FolderDivTemplateHtml + FolderDivTemplateStyle; // FolderDiv.js
  //const FolderDivStyle = ``; // FolderDiv.js
  //(function(){...style.innerHTML = FolderDivStyle...}()); // FolderDiv.js

  class FolderDiv extends HTMLElement {
    static observedAttributes = ["folded"];

    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      this.template = document.createElement('template');
      this.template.innerHTML = FolderDivTemplate;
      shadowRoot.appendChild(this.template.content.cloneNode(true));
      this._internals = this.attachInternals();

      this.isFolded = shadowRoot.getElementById("isFolded");
      this.arrow = shadowRoot.getElementById("arrow");
      this.stemLine = shadowRoot.getElementById("stemLine");
      this.contents = shadowRoot.getElementById("contents");
      this.heading = shadowRoot.getElementById("heading");
      this.unfoldable = shadowRoot.getElementById("unfoldable");

      this.unfoldable.addEventListener('slotchange', (e)=>{
        let udiv = this.unfoldable.assignedElements()[0];
        let h = udiv.children[0];
        if(h && h.tagName.startsWith('H')){
          console.debug(h);
          this.heading.assign(h);
        }
      });
    }
    connectedCallback() {

    }

    attributeChangedCallback(name, oldValue, newValue) {
      //console.debug(`Attribute "${name}" changed: ${oldValue} -> ${newValue}`);
      if(name == "folded"){
        this.isFolded.setAttribute("checked", newValue);
      }
    }

  }

  customElements.define("folder-div", FolderDiv);

//</script>

//<template id="folder-div">
const FolderDivTemplateHtml = `
  <!--folder-div style="display:flex; flex-direction:row;"-->
    <input type="checkbox" id="isFolded" />
    <label for="isFolded" id="sideControl" part="sideControl" style="display:flex; flex-direction:column;">
      <div id="arrow" part="arrow"></div>
      <div style="display:flex; flex-direction:row; flex:1 0 0;">
        <div style="flex:3"></div>
        <div style="flex:1; line-height:0; font-size:0;" id="stemLine" part="stemLine">&nbsp;</div>
        <div style="flex:3"></div>
      </div>
    </label>
    <div id="contents" part="contents" style="display:flex; flex-direction:column;">
      <div class="unfoldable">
        <label for="isFolded" part="heading">
          <slot name="heading" id="heading"></slot>
        </label>
        <slot name="unfoldable" id="unfoldable"></slot>
      </div>
      <div class="foldable"><slot name="foldable"></slot></div>
    </div>
  <!--/folder-div-->
`;

const FolderDivTemplateStyle = `
  <style>

    :root { /* ineffective, don't use this! Use :host instead. */
    }

    :host { /* style of the <folder-div> */
      display: flex;
      flex-direction:row;
      align-items: stretch;

      --control-foreground: DimGray;
      --stem-line-foreground: WhiteSmoke;
      --control-foreground-hover: blue;

    }

    /* The hidden checkbox holding folding state */
    #isFolded {
      display: none;
    }
    #isFolded + label {
      color: var(--control-foreground);
    }
    #isFolded + label:hover {
      color: var(--control-foreground-hover);
    }

    /* The arrow control to toggle folding state */

    #arrow::before {
      content: '►'; /*▶‣*/
    }
    #isFolded:not(:checked) + label > #arrow::before {
      content: '▼';
    }

    /* The stem line aligning unfolded content */

    #stemLine {
      background-color: var(--stem-line-foreground);
      display: none;
    }
    label:hover #stemLine {
      background-color: var(--control-foreground-hover);
    }
    #isFolded:not(:checked) + label #stemLine {
      display: block;
    }

    /* Folder contents */

    #contents {
      display: flex;
      flex-direction: column;
      padding-left: .5em;
      border-bottom: inset 1px;
    }

    /* Foldable content */

    #contents > .foldable {
      display: none;
    }
    #isFolded:not(:checked) ~ #contents > .foldable {
      display: block;
    }

    /* Unfoldable content */

    #contents > .unfoldable {
      display: block;
    }

    #heading {
      display: block;
    }

  </style>
`;

const FolderDivTemplate = FolderDivTemplateHtml + FolderDivTemplateStyle;

//</template>

//<style id="folder-div-style">
const FolderDivStyle = `
    div[slot="unfoldable-leaf"] {
      display: list-item;
      border-bottom: inset 1px;
      margin-left: 1em;
      padding-left: .5em;
    }
    div[slot="unfoldable-leaf"]::marker {
      color: var(--control-foreground);
      content: " ● "; /* Use BLACK CIRCLE U+25CF (●); The standard &bullet; U+2022 (•) is too small! */
    }
`;
//</style>

(function(){
  let style = document.createElement('style');
  style.setAttribute('id', 'folder-div-style');
  style.innerHTML = FolderDivStyle;
  document.querySelector('body').append(style);
}());
