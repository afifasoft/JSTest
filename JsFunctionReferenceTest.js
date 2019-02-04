function foo() {
  foo.count = 4;    // 'foo' refers to itself
  console.log(foo.count);
}


setTimeout(function () {
  console.log('anonymous fn')
  // anonymous function (no name), cannot
}, 10);


foo();
