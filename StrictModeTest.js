"use strict";
var myName = "";

myname = "JS Programming"; // human error so use strict mode

console.log( myname );

testStrictMode();

function testStrictMode() {
  "use strict";

  var aa  = 10;
  aA = 20;

  console.log(aA);
}
