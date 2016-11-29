const { log } = require("./log");
const { events } = require("./events");

events.add(document.body, "click", () => {
  log("Hi!");
});