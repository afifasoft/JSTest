
var myObject = {
  a : 2
};


console.log( myObject.a );  // 2

console.log( myObject["a"] ); // 2


var myObject1 = {
  a : 2

};


var idx;

if("wantA") {
  idx = "a";
}

console.log( myObject1[idx]); // 2


var myObject2 = { };

myObject2[true] = "foo";
myObject2[3] = "bar";
myObject2[myObject2] = "baz";

console.log( myObject2["true"]); // "foo"
console.log( myObject2["3"]);   // "bar"
console.log( myObject2["[object Object]"]); // "baz"
