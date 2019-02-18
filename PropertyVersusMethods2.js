
var myObject = {
    foo : function () {
      console.log( "foo" );
    }

};

var someFoo = myObject.foo;

console.log( someFoo );       // function foo() {..}
console.log( myObject.foo );  // function foo() {..}
