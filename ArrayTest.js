var itemName = ["kandura", "perfume", "belt"];

console.log(itemName[0]);
console.log(itemName[1]);
console.log(itemName[2]);
console.log(itemName);
console.log("length: "+ itemName.length);
itemName[3] = "watch";
console.log(itemName[3]);
console.log(itemName);
console.log("length: "+itemName.length);

var itemNonKandura = itemName;
console.log(itemNonKandura);

console.log(itemNonKandura["0"]);
itemNonKandura[400] = "casio";
console.log(itemNonKandura.length);
console.log(itemNonKandura);

console.log("---------------------");

itemNonKandura["foo"] = "bar";
console.log(itemNonKandura);
console.log(itemNonKandura.length);
