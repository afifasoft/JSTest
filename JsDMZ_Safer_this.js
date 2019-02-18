function foo(a, b) {
  console.log( "a: " + a + " ,b "+ b );
}


// our DMZ empty object
var ø = Object.create(null);


foo.apply(ø, [2, 3] ); // a:2 ,b:3


// currying with 'bind(...)'
var bar = foo.bind( ø, 5 );
bar( 4 );   // a:5 ,b:4
