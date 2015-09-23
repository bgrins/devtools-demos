
console.log("Hello from worker");

addEventListener('message', function (e) {
  var msg = e.data;
  if (msg.type === 'ping') {
    postMessage({
      type: 'pong',
      text: 'Hi from worker'
    });
  }
});
