var myObject = {

  get a() {
    return 2;
  }
};


Object.defineProperty(
  myObject, "b", {
      get : function () { return this.a * 2 },

      enumerable : true
  }


);

console.log( myObject.a );  // 2
console.log( myObject.b );  // 4



var myObject1 = {

  get a() {
    return 2;
  }

};

myObject1.a = 3;
console.log(myObject1.a);
