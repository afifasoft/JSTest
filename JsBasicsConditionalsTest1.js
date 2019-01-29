var a = 42;
var b = 30;

if ( a == 2 ) {
  // do something
}
else if ( a == 10 ){
  // do another thing
}
else if ( a == 42 ){
  console.log( a );
  // do yet another thing
}
else {
  // fallback to here
}


switch ( a ) {
  case 2:
        console.log( a );
        // do something
    break;

  case 10:
          console.log( a );
          // do another thing
        break;

  case 42:
      console.log( a );
        // do yet another thing
      break;

  default:
    // fallback to here

}


switch ( b ) {
  case 30:
      console.log( b );
  case 2:
      // some cool stuff
      console.log( b );
    break;

  case 40:
        // other stuff
        console.log( b );
    break;

  default:
    // fallback
}


var d = 42;

var f = ( d > 41 ) ? "hello" : "world";
console.log( f );


// similar to:


// if ( a > 41 ) {
//    b = "hello";
//  } else {
//    b = "world";
//}
