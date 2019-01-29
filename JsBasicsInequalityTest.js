var a = 41;
var b = "42";
var c = "43";

console.log( a < b );    // true  if one or both is not a string, then both values are coerced
console.log( b < c );    // true  if both are strings, the comparision is made lexicographically


var d = 42;
var f = "foo";

console.log( d < f );   // false strict inequality - when one of the values
                        // cannot be made into a valid number
console.log( d > f );   // false

console.log( d == f );  // false
