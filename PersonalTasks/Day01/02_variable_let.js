// Variable : let
// let has block level scope, redeclaration is not allowed but reinitialisation is allowed.

let m = "hi athira";
let time = 4;
if (time > 3) {
  let msg = "How are you?";
  //let is block level scope
  console.log(msg);
}
//Error msg is not defined because msg is inside the block.
console.log(msg);

let n = 5;
//Error Cannot redeclare block-scoped variable 'n'. ( rename n1 to n)
let n1 = 6;
//Reinitialisation is allowed
let k = 5;
k = 6;
