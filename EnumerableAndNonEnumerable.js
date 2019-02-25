var myObject = { };

Object.defineProperty(
  myObject,
  "a",
  // make 'a' enumerable as normal
  { enumerable : true, value: 2}
);

Object.defineProperty(
  myObject,
  "b",
  // make 'b' nonenumerable
  { enumerable : false, value: 3}
);


console.log(myObject.propertyIsEnumerable("a"));
console.log(myObject.propertyIsEnumerable("b"));


console.log(Object.keys(myObject)); // ['a']

console.log(Object.getOwnPropertyNames( myObject ));  // ['a', 'b']
