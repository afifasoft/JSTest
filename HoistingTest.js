a = 10;
console.log( b );
c++;

var a;
var b = 20;
var c;



testHositing();

function testHositing() {
  console.log( "test Hoisting..." );
}



function recurse() {
  console.log( "" );
  recurse();
}



function fnA() {

  console.log( "fnA()" );
  fnB();

}


function fnB() {

  console.log( "fnB()" );
  fnA();
  
}
