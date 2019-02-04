var person = {
  "firstName" : "John",
  "lastName"  : "SA",

  "getFirstName" : function () {
    return this.firstName;
  },

  "getLastName" : function () {
      return this.lastName;
  }

};


var firstName = person.getFirstName();
console.log(firstName);

var lastName = person.getLastName();
console.log(lastName);
