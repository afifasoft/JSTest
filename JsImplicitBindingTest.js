function foo() {
  console.log( this.a );
}

var obj = {
  a: 2,
  foo: foo
};

obj.foo(); // 2


function bar() {
  console.log( this.b );
}

var obj2 = {
  b : 42,
  bar: bar
};

var obj3 = {
  b : 2,
  obj2: obj2
};


obj3.obj2.bar();
