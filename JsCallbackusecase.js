function foo() {
  setTimeout(() => {
    // 'this' here is lexically inherited from 'foo()'
    console.log( this.a );
  }, 100)
}


function bar() {
  var self = this; // lexical capture of 'this'
  setTimeout( function () {
    console.log(self.a);
  },100);
}

var obj = {
  a : 2
};

var obj2 = {
  a : 2
};

foo.call( obj ); // 2
bar.call( obj2 ); // 2
