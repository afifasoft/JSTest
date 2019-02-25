var myArray = [1, 2, 3];

for (var i = 0; i < myArray.length; i++) {
  console.log( myArray[i] );
}
// 1 2 3

console.log('---------')
var myArrayNew = [1, 2, 3];

for (var v of myArrayNew ) {
  console.log( v );
}


console.log('------');
var myArrayNew1 = [1, 2, 3];
var it = myArrayNew1[Symbol.iterator]();
console.log(it.next().value);
console.log(it.next());
console.log(it.next());
console.log(it.next());
