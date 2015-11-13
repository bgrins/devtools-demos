
console.log("Hello from worker", this);

addEventListener('message', function (e) {
  var msg = e.data;
  console.log("Worker received message of type '" + msg.type + "'");
  if (msg.type === 'ping') {
    postMessage({
      type: 'pong',
      text: 'Hi from worker'
    });
  }
  if (msg.type === 'error') {
    throwError();
  }
});

function throwError() {
  throw new Error("Worker threw an error :(")
}
