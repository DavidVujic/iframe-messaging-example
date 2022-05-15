function handleMessage(message) {
  console.log('The message:', message);
  document.querySelector('#the-message').innerHTML = `What: ${message.what}. When: ${message.when}`;
}

function isValidEvent(event) {
  if (event.origin !== window.location.origin) {
    return false;
  }

  const expectedSenderOrigin = window.location.origin;

  if (event.source.location.origin !== expectedSenderOrigin) {
    return false;
  }

  return true;
}

function onMessage(event) {
  if (!isValidEvent(event)) {
    return;
  }

  handleMessage(event.data);
}

window.addEventListener('message', onMessage, false);
