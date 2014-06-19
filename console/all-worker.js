console.log("hello from a worker");
postMessage("worker init");

var i = 0;
onmessage = function(ev)
{
  console.log("worker received event", ev, "data", ev.data);
  postMessage({i: i++, time: new Date(), });
  if (ev.data == "time") {
    console.time("lolz");
    console.time({i: i, timer: 'foo'});
  }
  if (ev.data == "timeEnd") {
    console.timeEnd("lolz");
    console.timeEnd({i: i, timer: 'foo'});
  }
};