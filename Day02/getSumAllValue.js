var inputno = 5;
getSumAllValues(inputno);

function getSumAllValues(inputno) {
  var index1 = 0;
  var sum = 0;
  for (let index = 0; index < inputno; index++) {
    if (index1 < inputno) {
      index1 = index + 1;
    }
    console.log("Index : " + index);
    console.log("Index1 : " + index1);
    sum = sum + index1;
    console.log("SUM : " + sum);
  }
  console.log("Final SUM : " + sum);
}
