var inputno = 10;
getOddNumbers(inputno);

function getOddNumbers(inputno) {
  for (let index = 0; index <= inputno; index++) {
    var returnvalue = checkOddOrEven(index);
    if (returnvalue == "ODD") {
      console.log(index);
    }
  }
}

function checkOddOrEven(number) {
  if (number % 2 === 0) {
    return "EVEN";
  } else {
    return "ODD";
  }
}
