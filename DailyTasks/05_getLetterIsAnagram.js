let inputtext1 = "listen";
let inputtext2 = "silent";
getTextIsAnagram(inputtext1, inputtext2);
//getTextIsAnagram("hello", "world");
function getTextIsAnagram(inputtext1, inputtext2) {
  let numsize = inputtext1.length;
  let iscontain;
  for (let index = 0; index < numsize; index++) {
    const element = inputtext1.charAt(index);
    console.log("element : " + element);
    iscontain = inputtext2.includes(element);
    console.log("iscontain : " + iscontain);
    if (iscontain == false) {
      console.log("Given Letter is not Anagram");
      break;
    }
  }
  if (iscontain == true) {
    console.log("Given Letter is Anagram");
  }
}
