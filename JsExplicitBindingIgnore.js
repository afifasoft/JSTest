function foo(a, b) {
  console.log( "a:" + a +" ,b:"+b );
}

// spreading out array as parameters
foo.apply( null, [ 2, 3 ] ); // a:2, b:2


var bar = foo.bind(null, 5);
bar( 4 ); // a:5 , b: 4
