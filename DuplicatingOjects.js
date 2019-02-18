function anotherFunction() { /*..*/}

var anotherObject = {
  c : true
};

var anotherArray = [];

var myObject = {
  a : 2,
  b : anotherObject,  // reference, not a copy!
  c : anotherArray,   // another reference
  d : anotherFunction
};

anotherArray.push( anotherObject, myObject );

var someObj = {};

var newObj = JSON.parse( JSON.stringify( someObj ));


var newObj1 = Object.assign( {}, myObject);

console.log(newObj1.a);       // 2
console.log(newObj1.b == anotherObject );   // true
console.log(newObj1.c == anotherArray);     // true
console.log(newObj1.d == anotherFunction);  // true
