var myArray = [10, 20, "Hello", {}];




var myFunction = function (item, index, array) {
  console.log("for an element: "+item + " : " + index + " : " + array);

};

myArray.forEach(myFunction);
