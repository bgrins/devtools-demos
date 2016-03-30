
console.log("Hello from ServiceWorker importScripts at " + (new Date().toLocaleTimeString()), this);

setInterval(function() {
  console.log("ServiceWorker importScripts ping at " + (new Date().toLocaleTimeString()));
}, 10000);
