var a = 10;

function outer() {
  var b = a;
  console.log(b);

  function inner() {

    var c = b; // undefined bcz...
    console.log(c);
    var b = 20;
  }

  inner();
}

outer();

// similar to above inner function
console.log(d);
var d = 20;
