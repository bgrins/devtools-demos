
document.addEventListener("DOMContentLoaded", function() {
  var h1 = document.querySelector("h1");
  if (h1 && !document.title) {
    document.title = "DevTools Demos - " + h1.textContent;
  }

  var body = document.body;
  if (body.classList.contains("header")) {
    var header = document.createElement("header");
    var link = document.createElement("a");
    link.setAttribute("href", "../index.html");
    link.textContent = "DevTools Demos";
    header.appendChild(link);

    var repoLink = document.createElement("a");
    repoLink.className = "repo-link";
    repoLink.setAttribute("href", "https://github.com/bgrins/devtools-demos");
    repoLink.textContent = "repository";
    header.appendChild(repoLink);

    body.insertBefore(header, body.firstChild);
  }
});
