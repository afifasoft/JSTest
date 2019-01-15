var add = function (a, b) {
  console.log(arguments);
  return a + b;
};

console.log(add(10, 30, 2, 3, 4, 5));


var sumNumbers = function () {
  var i, sum = 0;
  for (i = 0; i < arguments.length; i++) {
      sum += arguments[i];
  }
  return sum;
};


console.log(sumNumbers(10, 20, 30, 4, 5, 6));
