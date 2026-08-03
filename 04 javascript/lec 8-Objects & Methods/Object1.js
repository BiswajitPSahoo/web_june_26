const user = {
    name : "John Doe",
    age : 30,
}

// user = {} //error - cannot reassign a const variable

/*
*const Object
* 1. existing key can be updated
* 2. existing key can be deleted
* 3. new key can be added
* 4. new key can be deleted
 */
user.name = "Raj"
console.log(user);

delete user.age;
console.log(user);

user.address = "123 Main St";
console.log(user);

/**
 * Object.seal()
 * 1. existing key can be updated
 * 2. existing key cannot be deleted
 * 3. new key cannot be added
 */
const employee = {
    name : "Roman",
    age : 25,
}

Object.seal(employee)
console.log(employee);

employee.name = "Ronaldo";
console.log(employee);

delete employee.name
console.log(employee);

/** 
  * Object.freeze()
  * 1. existing key can not be updated
  * 2. existing key cannot be deleted
  * 3. new key cannot be added
  */
const student = {
    name : "Roman",
    age : 25,
}

Object.freeze(student)
console.log(student);

student.name = "Ronaldo";
console.log(student);

delete student.name
console.log(student);