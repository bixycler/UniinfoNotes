const MessageDivTemplate = `
  <details id="message"><summary id="messageSummary"></summary>
    <div id="messageDetails"></div>
  </details>
`;

class MessageDiv extends HTMLElement {
  static observedAttributes = ['heading', "hidden", "folded"];

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    this.template = document.createElement('template');
    this.template.innerHTML = MessageDivTemplate;
    shadowRoot.appendChild(this.template.content.cloneNode(true));
    this._internals = this.attachInternals();

    this.message = shadowRoot.getElementById("message");
    this.messageSummary = shadowRoot.getElementById("messageSummary");
    this.messageDetails = shadowRoot.getElementById("messageDetails");
  }
  connectedCallback() {
  }
  disconnectedCallback() {
  }

  attributeChangedCallback(name, oldValue, newValue) {
    //console.debug(`Attribute "${name}" changed: (${oldValue}) -> (${newValue})`);
    if(name == "hidden"){
      this.message.style.display = newValue ? 'none' : 'block';
    }else if(name == "folded"){
      if(newValue==null){ this.message.setAttribute("open", true); }
      else{ this.message.removeAttribute("open"); }
    }
  }

  showError(msg, heading = null){
    if(heading===null){ heading = this.getAttribute('heading'); }
    if(typeof(msg)==='string'){ heading += ': '; }else{ msg += '!'; }
    this.showMessage(heading, msg, 'brown');
  }

  showMessage(heading, msg, color='green'){
    this.messageSummary.innerHTML = heading;
    this.messageDetails.innerHTML = msg;
    this.message.style.color = color;
    this.message.style.display = 'block';
    //this.message.setAttribute('open',true);
  }

  clearMessage(){
    this.messageSummary.innerHTML = '';
    this.messageDetails.innerHTML = '';
    this.message.style.display = 'none';
    //this.setAttribute('folded',true);
    //this.message.removeAttribute('open');
  }

}

customElements.define("message-div", MessageDiv);



  /* Chrome console error messages: GET ... {net:ERR_*, 404 (Not Found), ...}
  - Issue: those messages are browser's native and **cannot be controlled** by javascript (even they are properly catched/handlled in the script).
  - Chorme's solution: console config > check "Hide network"
  - Note that `mdimg.src = freq` is actually a GET request in disguise!
  */


