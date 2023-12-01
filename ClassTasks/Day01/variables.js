var firstname = "venkat";
console.log(firstname);

var firstname = "Venkatesh";
console.log(firstname);

let firstnames = "letvenkat";
console.log(firstnames);

firstnames = "letVenkatesh";
console.log(firstnames);

let browsername = "chrome";
getBrowserVersion(browsername);
getBrowserVersion("firefox");

function getBrowserVersion(browsername) {
  var browserversion = "170.28";
  if (browsername == "chrome") {
    let browsermax = true;
    console.log(browserversion);
  } else {
    console.log("No version");
  }
  console.log(browsermax);
}
