function foo() {
  console.log( "foo" );
}


var someFoo = foo;

var myObject = {
  someFoo : foo

};



console.log( foo );               // function foo() {..}
console.log( someFoo );          // function foo() {..}
console.log( myObject.someFoo ); // function foo() {..}
