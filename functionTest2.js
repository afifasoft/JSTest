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

// f1 = 1; error



f();

f1();
