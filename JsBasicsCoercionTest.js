var a = "42";


var b = Number( a );    // explicit coercion

console.log( a ); // "42"
console.log( b ); // 42 -- the number


var c = "42";


var d = c * 1;      // implicit coercion

console.log( c );
console.log( d );
