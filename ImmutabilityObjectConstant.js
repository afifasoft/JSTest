var myObject = {};

// if both writable and configurable are false then constant
Object.defineProperty(myObject, "a", {
  value : 4,
  writable : false,
  configurable : false
});
