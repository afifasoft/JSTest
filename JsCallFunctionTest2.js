function foo() {
  console.log( this.a );
}


var obj = {
  a : 2,
  foo: foo
};

var a = "oops, global"; // 'a' also property on global object

setTimeout( obj.foo, 100 ); // "oops, global"


// setTimeout() built in from the JS

// function setTimeout(fn, delay) {
//   // wait (somehow) for 'delay' milliseconds
//   fn(); // <-- call-site!
// }
