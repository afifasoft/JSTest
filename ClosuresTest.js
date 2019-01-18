function testClosures() {
  var a = 10;
  var b = 10;

  console.log(a + b);

}


testClosures();



(function () {
  var a = 20;
  var b = 30;

  console.log(a + b);
})();  // IIFE -Immediatly invoked function execution
