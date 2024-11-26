
function showError(msg, heading = 'Markdown loading error'){
  if(typeof(msg)==='string'){ heading += ': '; }else{ msg += '!'; }
  showMessage(heading, msg, 'brown');

  /* Chrome console error messages: GET ... {net:ERR_*, 404 (Not Found), ...}
  - Issue: those messages are browser's native and **cannot be controlled** by javascript (even they are properly catched/handlled in the script).
  - Chorme's solution: console config > check "Hide network"
  - Note that `mdimg.src = freq` is actually a GET request in disguise!
  */
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

