var foo = {
  bar: function() {
    console.log("Logging from " + window.location.toString())
  }
}
console.log("Hello from page", this, foo);

var $log = document.querySelector("#log");
const $newWorkerButton = document.querySelector("#new-worker");
const $newDestroyWorkerButton = document.querySelector("#new-destroy-worker");
const $destroyAllButton = document.querySelector("#destroy-all-workers");
const $clearButton = document.querySelector("#clear");
const $helloButton = document.querySelector("#hello");
const $errorButton = document.querySelector("#error");

var workerIndex = 0;
var workers = [];
var newWorker;

function addMessageToLog(msg) {
  $log.textContent = $log.textContent + msg + "\n";
}


function createHelloWorker(e, postCreate) {
  newWorker = new Worker("hello-workers/hello-worker.js?" + workers.length);
  workers.push(newWorker);
  newWorker.addEventListener('message', function(e) {
    addMessageToLog("Worker # " + e.data.id + ": " + e.data.text);
    if (!!postCreate) {
      postCreate(newWorker);
    }
  });
  newWorker.postMessage({
    type: "setup",
    id: workers.length
  });
}

createHelloWorker();

$helloButton.addEventListener("click", function() {
  workers.forEach((worker) => worker.postMessage({
    type: "ping"
  }));
});

$errorButton.addEventListener("click", function() {
  workers.forEach((worker) => worker.postMessage({
    type: "error"
  }));
});

$clearButton.addEventListener("click", function() {
  $log.textContent = "";
});

$destroyAllButton.addEventListener("click", function() {
  workers.forEach((worker) => {
    addMessageToLog("Worker # " + workers.indexOf(worker) + ": has been terminated.");
    worker.terminate();
  });
})

$newWorkerButton.addEventListener("click", createHelloWorker);

$newDestroyWorkerButton.addEventListener("click", function(e) {
  createHelloWorker(e, (worker) => worker.terminate());
});
