const MessageDivTemplate = `
  <details id="message"><summary id="messageSummary"></summary>
    <div id="messageDetails"></div>
  </details>
`;

class MessageDiv extends HTMLElement {
  static observedAttributes = ["hidden", "folded"];

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
    if(name == "folded"){
      this.message.setAttribute("open", newValue);
    }
  }

}

customElements.define("message-div", MessageDiv);



  /* Chrome console error messages: GET ... {net:ERR_*, 404 (Not Found), ...}
  - Issue: those messages are browser's native and **cannot be controlled** by javascript (even they are properly catched/handlled in the script).
  - Chorme's solution: console config > check "Hide network"
  - Note that `mdimg.src = freq` is actually a GET request in disguise!
  */

function showError(msg, heading = 'Markdown loading error'){
  if(typeof(msg)==='string'){ heading += ': '; }else{ msg += '!'; }
  showMessage(heading, msg, 'brown');
}

function showMessage(heading, msg, color='green'){
  messageSummary.innerHTML = heading;
  messageDetails.innerHTML = msg;
  message.style.color = color;
  message.style.display = 'block';
  //message.setAttribute('open',true);
}

function clearMessage(){
  messageSummary.innerHTML = '';
  messageDetails.innerHTML = '';
  message.style.display = 'none';
  //message.removeAttribute('open');
}

