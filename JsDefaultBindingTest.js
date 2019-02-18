function foo() {
  "use strict";
  console.log( this.a );
}

var a = 2;

foo(); // TypeError: 'this' is 'undefined'


function bar() {
  console.log( this.b );

}


var b = 2;

(function () {
  "use strict";
  
  bar();
})();
