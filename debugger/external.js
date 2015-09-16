
function foo(x, y) {
  var z = 10;
  return x + y + z;
}

function bar(x, y) {
  var z = 10;
  return x + y + z;
}

function baz(x, y) {
  x = x || 0;
  y = y || 0;
  var z = 10;
  return x + y + z;
}

console.log("Calling functions from external scripts");
foo(1,2);
bar(1,2);
baz(1,2);