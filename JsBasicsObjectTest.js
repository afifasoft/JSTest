var obj = {
  a : "hello world",
  b : 42,
  c : true
};

console.log(obj.a);        // "hello world"
console.log(obj.b);       // 42
console.log(obj.c);      // true

console.log(obj["a"]);       // "hello world"
console.log(obj["b"]);      // 42
console.log(obj["c"]);     // true

var obj_b = {
  a : "hello world",
  b : 42
};

var b = "a";
console.log(obj_b[b]);     // "hello world"
console.log(obj_b["b"]);   //
