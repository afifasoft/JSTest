
// vastly simplified 'mixin()' example:
function mixin(sourceObj, targetObj) {
  for (var key in sourceObj) {

    if(!(key in targetObj)) {
      targetObj[key] = sourceObj[key];
    }
  }
  return targetObj;
}

var Vehicle = {
  // ...
};


// first, create an empty object with
// Vehicle's stuff copied in
var Car = mixin( Vehicle, {} );


// now copy the intended contents into car
mixin( {
  wheels: 4,

  drive: function() {
    // ...
  }
}, Car );
