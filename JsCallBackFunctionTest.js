function foo() {
  console.log( this.a );

}

function doFoo(fn) {
  // 'fn' is just another reference to 'foo'
  console.log( "doFoo" );
  fn();
}

var obj = {
  a : 2,
  foo: foo
};

var a = "oops, global";   // 'a' also property on global object

doFoo( obj.foo );   //
