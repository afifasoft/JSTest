function foo() {
  console.log( 'foo()' );
}

// 'foo' function reference expression
// then '()' executes it

foo();

// 'IIFE' function expression,
// then '()' executes it

var a = 42;

(function IIFE() {
  var a = 10;
  console.log( a );     // 10
  console.log( 'IIFE()' );
})();


console.log( a );


var x = (function IIFEreturn() {
    return 42;
})();

console.log( x );
