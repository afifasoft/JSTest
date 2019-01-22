var numOfCustomers = 5;

while ( numOfCustomers > 0 ) {
  console.log( "How may I help you ?" );

  // help the customer...

  numOfCustomers = numOfCustomers - 1;
}

// versus:

do {
    console.log( "How may I help you ?" );

    // help the customer...

    numOfCustomers = numOfCustomers - 1;
} while ( numOfCustomers > 0);


var i = 0;

// a 'while...true' loop would run forever, right ?
while ( true ) {
    // kee
    if ( i <= 9) {
      console.log( i );
      i = i + 1;
    }
    // time to stop the loop!
    else {
        break;
    }
}
// 0 1 2 3 4 5 6 7 8 9
