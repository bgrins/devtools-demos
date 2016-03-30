
addEventListener('message', function (e) {
  var msg = e.data;
  console.log("Subworker received message of type '" + msg.type + "'");
  if (msg.type === 'ping') {
    postMessage({
      type: 'pong',
      text: 'Hi from Subworker'
    });
  }
});
