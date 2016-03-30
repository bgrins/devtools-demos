
console.log("Hello from worker", this);

var id;

addEventListener('message', function (e) {
  var msg = e.data;
  console.log("Worker received message of type '" + msg.type + "'");
  if (msg.type === 'ping') {
    postMessage({
      type: 'pong',
      text: 'Hi from worker',
      id: id
    });
  }

  if (msg.type === 'setup') {
    id = msg.id;

    postMessage({
      type: 'setup',
      text: 'Salutation from worker',
      id: id
    });
  }
  if (msg.type === 'error') {
    throwError();
  }
});

function createChildWorker() {
  let subWorker = new Worker("sub-worker.js");
  subWorker.addEventListener('message', function (e) {
    console.log("Subworker has responeded to ping", e.data.type);
  });
  subWorker.postMessage({
    type: "ping"
  });
}

if (!! this.Worker) {
  createChildWorker();
}

function throwError() {
  throw new Error("Worker threw an error :(")
}
