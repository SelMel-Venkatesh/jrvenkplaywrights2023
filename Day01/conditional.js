let browsername = "chrome";
getBrowserVersion("chrome");
console.log("*******************************");
getBrowserVersion("firefox");
console.log("*******************************");
getTestingType("Sanity");
console.log("*******************************");
getTestingType("Regression");
console.log("*******************************");
getTestingType("Functional");
console.log("*******************************");
getTestingType("Smoke");

function getBrowserVersion(browsername) {
  switch (browsername) {
    case "chrome":
      var browserversion = "170.28";
      console.log(browserversion);
      break;
    case "firefox":
      var browserversion = "1769.1";
      console.log(browserversion);
      break;
    default:
      break;
  }
}

function getTestingType(testingtype) {
  switch (testingtype) {
    case "Functional":
      console.log("Functional");
      break;
    case "Sanity":
      console.log("Sanity");
      break;
    case "Regression":
      console.log("Regression");
      break;
    default:
      console.log("System Testing");
      break;
  }
}
