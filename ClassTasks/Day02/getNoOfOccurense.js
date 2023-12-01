const nums = [2, 3, 4, 2, 5, 1, 2, 5, 2];
let getcount = 5;
getNoOfOccurs(nums, getcount);
console.log("***************************************************************");
const numsum = [2, 4, 7, 8, 11, 14];
let expectedsumvalue = 18;
getSumCountIndex(numsum, expectedsumvalue);
console.log("***************************************************************");

function getSumCountIndex(numsum, expectedsumvalue) {
  let numsize = numsum.length;
  for (let index = 0; index < numsize; index++) {
    const element = numsum[index];
    for (let index1 = 0; index1 < numsize; index1++) {
      const element1 = numsum[index1];
      let sumvalue = element + element1;
      if (sumvalue == expectedsumvalue) {
        console.log("element  : " + element);
        console.log("element1  : " + element1);
        console.log("sumvalue : " + sumvalue);
      }
    }
  }
}
console.log("***************************************************************");
function getNoOfOccurs(nums, getcount) {
  let numsize = nums.length;
  let returndata = 0;
  console.log("numsize : " + numsize);
  for (let index = 0; index < numsize; index++) {
    const element = nums[index];
    if (element == getcount) {
      returndata = returndata + 1;
    }
  }
  console.log("returndata : " + returndata);
  return returndata;
}
