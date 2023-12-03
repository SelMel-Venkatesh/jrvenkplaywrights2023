function Ve(params) {
  // check if input params is not null or undefined
  if (!params) {
    return null;
  }

  // initialize an empty string for palindrome
  let palindrome = "";

  // loop through the input params and create the palindrome
  for (let i = 0; i < params.length; i++) {
    // check if the character is alphanumeric
    if (/^[a-zA-Z0-9]+$/.test(params[i])) {
      // append the character to the beginning of the palindrome
      palindrome = params[i] + palindrome;
    }
  }

  // check if the input params length is even
  if (params.length % 2 === 0) {
    // if yes, then the first character of the palindrome is duplicated
    palindrome = palindrome.substring(1) + palindrome.substring(0, 1);
  }

  // return the generated palindrome
  return palindrome;
}

console.log("it is palidrome : " + Ve("MADAN"));
