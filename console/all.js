
(function () {
  var btn = document.getElementsByTagName('button')[0];
  btn.addEventListener('click', function (ev) {
    console.log("blazblaz", btn.getBoundingClientRect());
    console.count("foocount");
    ev.preventBubble();
    foo.bar.extern();
  }, false);
})();
