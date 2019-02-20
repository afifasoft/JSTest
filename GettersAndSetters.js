var myObject = {

  get a() {
    return this._a_;
  },

  set a(val) {
    this._a_ = val * 2;
  }

};

myObject.a = 2;
console.log(myObject.a);



// Existence
var myObject1 = {
  a : 2,
};

console.log(("a" in myObject));
console.log(("b" in myObject));


console.log(myObject.hasOwnProperty("a"));
console.log(myObject.hasOwnProperty("b"));
