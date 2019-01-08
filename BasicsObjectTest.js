var myString = "Hello"; //inline string

var myObj = {}; // object inline   empty object


console.log(myObj);

myObj.firstName = "Abdul";
myObj.lastName= "Atif";

console.log(myObj);


console.log("The firstName is:" + myObj.firstName);
console.log("The lastName is: "+ myObj.lastName);



var customerDetails = {
  firstName: "Abdul",
  lastName: "Atif",
  mobile: "05047463876",
  orderDate: "10-12-2018",
  deliveryDate: "12-12-2018",
  orderNumber: "670",
  invoiceNumber: "43",
  "1": "ONE",
  clothObj: {
    itemName: "Kandura",
    itemCode: "100001",
    itemPrice: "100"
  }
};



console.log(customerDetails);

console.log(customerDetails.mobile);
//console.log(customerDetails.remarks);

console.log(customerDetails["mobile"]);

// console.log(customerDetails.1); // eror
console.log(customerDetails["1"]);



var firstNameIndian = "firstName";

console.log(customerDetails[firstNameIndian]);

console.log("inner object");
console.log(customerDetails.clothObj);
console.log(customerDetails.clothObj.itemCode);
customerDetails.clothObj.grossTotal = 12000;
console.log(customerDetails);
console.log("----------");
console.log(customerDetails.clothObj);

console.log(customerDetails.clothObj["grossTotal"]);




var defaultmeasurementSize = {
  sleevs : "0.00",
  neck : "0.00",
  bottom : "0.00",
  shoulder: "0.00"
};


var selectedMeasurementSize = {
  sleevs : "12.10",
  neck : "10.10",
  bottom: "12.11",
  shoulder: "12.10",
  shirtlength: null,
  age: 25
};

var selectMeasure = defaultmeasurementSize;

console.log(selectMeasure.sleevs);

if (defaultmeasurementSize === defaultmeasurementSize) {
  console.log("selectMeasure and defaultmeasurementSize are equal");
} else {
  console.log("selectMeasure and defaultmeasurementSize are not equal");
}

console.log(selectedMeasurementSize.shirtlength);


selectedMeasurementSize.age = undefined;
console.log(selectedMeasurementSize);
console.log(selectedMeasurementSize.age);

delete selectedMeasurementSize.age;
console.log(selectedMeasurementSize);
