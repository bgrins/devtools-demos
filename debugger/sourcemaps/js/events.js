exports.events = {
  add: function (target, evt, cb) {
    target.addEventListener(evt, cb);
  }
};
