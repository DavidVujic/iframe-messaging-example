function getTarget() {
  return document.querySelector('main iframe').contentWindow;
} 

function sendMessage(target, message) {
  target.postMessage(message, window.location.origin);
}

function onSendClick() {
  const target = getTarget();
  const message = { what: 'hello world', when: Date.now() };

  sendMessage(target, message);
}

document.querySelector('#send-button').addEventListener('click', onSendClick);
