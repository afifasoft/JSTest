function foo() {
  "use strict";

  // this code is strict mode

  function bar() {
    // this code is strict mode
  }
}

// this code is not strict mode

"use strict";
function fooBar() {

    // this code is strict mode

    function bar() {
        // this code is strict mode
    }
}


// this code is strict mode


function fooBarTest() {
  "use strict";     // turn on strict mode
    a = 1;          // 'var ' missing, ReferenceError
}

fooBarTest();
