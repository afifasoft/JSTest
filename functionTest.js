function sayHello(name, timeOfDay) {
  console.log(name+' hello'
              + " Time of Day : " +timeOfDay);
}


sayHello('Cloud', 'afternoon');


function sayHelloFunc(name, timeOfDay) {
  console.log('sayHelloFunc');
  console.log(name+' hello'
              + " Time of Day : " +timeOfDay);
}


sayHelloFunc('Cloud', 'evening', 42);


function sayHelloFuncReturnSomething(name, timeOfDay) {
  console.log('sayHelloFuncReturnSomething');
  return name+' hello '+ "Time of Day : " +timeOfDay;
}


var returnValue = sayHelloFuncReturnSomething('Cloud', 'evening');
console.log("RTV: "+returnValue);
