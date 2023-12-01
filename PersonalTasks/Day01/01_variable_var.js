//  Variable :  var
// It is the old way of declaring variable before ES6
// var has global scope and functional scope.

var x = 10; //Global scope
test();

function test() {
  var y = 20; //function scope
  console.log("y : " + y);
}

console.log("********************************************************");

// Drawback of var:
// ->Redeclaration is allowed using var keyword.

var browser = "Chrome";
var browser = "Firefox";
console.log("Output is:" + browser);

console.log("********************************************************");

// ->var is accessible outside the block inside the function.
sample();
function sample() {
  var num = 5;
  var value = false;
  if (num > 0) {
    var value = true;
    console.log("Number is greater than zero");
  } else {
    console.log("Number is less than zero or zero");
  }

  console.log(value);
}
