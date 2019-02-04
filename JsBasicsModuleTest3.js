function createPerson() {
  var firstName = "John";
  var lastName = "SA";

  var returnObj = {

    "getFirstName" : function () {
      return firstName;
    },

    "getLastName" :function () {
        return lastName;
    },

    "setFirstName" : function (name) {
      firstName = name;
    },
    "setLastName" : function (name) {
      lastName = name;
    }

  };
  return returnObj;
}


var person = createPerson();
console.log(person.getFirstName());
person.setFirstName("Michel");
person.setLastName("DXB");
console.log(person.getFirstName());
console.log(person.getLastName());
