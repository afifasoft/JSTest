var a = 10;


function globalScopeTest() {
  var b = a;
  console.log(b);
//  console.log(c);
  c = 100; // it is created in the Global scope
}

globalScopeTest();
