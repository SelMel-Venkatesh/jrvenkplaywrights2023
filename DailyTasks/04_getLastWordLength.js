let inputname = "Hello World";
console.log(getlastwordlength(inputname));

function getlastwordlength(inputname) {
  var splitinput = inputname.split(" ");
  console.log("splitinput : " + splitinput);
  console.log(typeof splitinput);
  var splitinputlength = splitinput.length;
  let lastvalue = splitinput[splitinputlength - 1];
  console.log("splitinputlength : " + splitinputlength);
  console.log("lastvalue : " + lastvalue);
  return lastvalue.length;
}
