var a = 10;


// wait for 1 seconds

var fn = function () {
  console.log( a );
};

setTimeout(fn, 6000,);

console.log( a );


console.log( "Done" );
