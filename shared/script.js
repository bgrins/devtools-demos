
document.addEventListener("DOMContentLoaded", function() {
  var h1 = document.querySelector("h1");
  if (h1 && !document.title) {
    document.title = "DevTools Demos - " + h1.textContent;
  }

  var body = document.body;
  if (body.classList.contains("header")) {
    var header = document.createElement("header");
    var link = document.createElement("a");
    link.setAttribute("href", "../");
    link.textContent = "DevTools Demos";
    header.appendChild(link);
    body.insertBefore(header, body.firstChild);
  }
});
