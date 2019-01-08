var a = "Cloud";

// function declaration
function fooFuncDeclaration() {
  console.log("foo() function declaration");
}


// function expression
var f = function foo() {
  console.log("foo() function expression");
};


// anonymous function expression
var f1 = function () {
  console.log("anonymous function expression");
};


var f3 = function (name) {
  console.log(name +" executor - anonymous function expression");
}
// f1 = 1; error


var executor = function (fn, name) {
  // console.log(fn);
  console.log("inside executor fn");
  fn(name);
};


f();

f1();

executor(f3, "GGICO");
