var a = "42";
var b = 42;

console.log( a == b );    // true  checks the value and coerce  42 == 42 or "42" == "42"
console.log( a === b );   // false  bcz coercion is not allowed

var array1 = [ 1, 2, 3 ];
var array2 = [ 1, 2, 3 ];
var c = "1,2,3";

console.log( array1 == c );     // true
console.log( array2 == c );     // true

// arrays are by default coerced to strings by simply joining all the values with comma (,)
console.log( array1 == array2 );  // false
