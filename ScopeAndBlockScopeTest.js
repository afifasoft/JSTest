








var a = 20;

// Function Scoping
var name = "JavaScript";

if(name === "JavaScript") {
  var department = "Engineering";
}

console.log(name);

console.log(department);



function allocateDepartment () {
  if(name === "JavaScript") {
    var departmentCS = "EngineeringInCSE";
  }
}

allocateDepartment();
console.log(departmentCS);
