var a = 10; // Global variable declaration
//var b = 20;

var myName = "JSProgrammer";

// Global scope declaration
function testFun() {
  var b = 20;     // testFun scope declaration
  var c = b;      // testFun scope declaration

  console.log(a + b);
}



function greet(name) {
  console.log("Welcome "+ name);
}

testFun();

greet(myName);
