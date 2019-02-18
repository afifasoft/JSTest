var myArray = [ "foo", 42, "bar" ];

console.log( myArray.length );    // 3

console.log( myArray[0] );      // "foo"

console.log( myArray[2] );      // "bar"


myArray.baz = "baz";

console.log( myArray.length );    // 3
console.log( myArray.baz );     // "baz"
