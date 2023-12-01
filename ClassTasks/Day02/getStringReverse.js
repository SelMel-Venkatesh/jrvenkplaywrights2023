let inputname = "Venkatesh";

getStringToChar(inputname);
getStringToChar("MADAM");

function getStringToChar(inputname) {
  var strlength = inputname.length;
  console.log("String Length : " + strlength);
  for (let index = 0; index < strlength; index++) {
    const element = inputname[index];
    console.log(element);
  }
  console.log("********************************************************");
  for (let index = strlength - 1; index >= 0; index--) {
    const element = inputname[index];
    console.log(element);
  }
  console.log("********************************************************");
  var additionaltext = " - Automation Test Lead";
  var newconcattext = inputname + additionaltext;
  console.log(newconcattext);
  console.log("********************************************************");
  var strreverse = "";
  for (let index = strlength - 1; index >= 0; index--) {
    const element = inputname.charAt(index);
    strreverse = strreverse + element;
  }
  console.log("strreverse : " + strreverse);
  if (inputname === strreverse) {
    console.log("Given Input data is Palidrome");
  } else {
    console.log("Given Input data is not Palidrome");
  }
  console.log("********************************************************");
}
