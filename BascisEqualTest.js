var a = 10;
var b = "10";

if(a === b) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}


var c = 10;

if (c) {
  console.log("true");
} else {
  console.log("values may be zero");
}


var d = 0;

if (d) {
  console.log("true");
} else {
  console.log("values must be zero");
}

var e = "hello";

if (e) {
  console.log("string value contains char - true");
} else {
  console.log("false");
}


var f = "";

if (f) {
  console.log("string true");
} else {
  console.log("empty string - false");
}



var g = undefined;

if (g) {
  console.log("undefined-true");
} else {
  console.log("undefined-false");
}


var h = null;

if (h) {
  console.log("null - true");
} else {
  console.log("null - false");
}
