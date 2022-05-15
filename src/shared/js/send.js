function getRecipient(query) {
  const recipient = query ? document.querySelector(query).contentWindow : window.parent;

  return recipient;
} 

function sendMessage(target, message) {
  target.postMessage(message, window.location.origin);
}

function onSendClick(e) {
  const message = e.target.dataset.message;
  const query = e.target.dataset.iframe;

  const to = getRecipient(query);
  const data = { what: message, when: Date.now() };

  sendMessage(to, data);
}

document.querySelector('button.send-button').addEventListener('click', onSendClick);
