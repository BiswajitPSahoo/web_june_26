// const user = {
//     firstname : "Rohit",
//     lastname : "Sharma",
//     age : 35,
//     isGraduated : true,
//     'address' : 'BBSR',
//     'course fee' : 5000.66,
//     greet : function() {
//         console.log("Virat says Hello !!!", this);
//         console.log("My full nmae is", this.fullname); 
//     },
//     // hello : () => {
//     //     console.log("Hello from arrow function !!!", this);
//     // }
// }

// //Extract complete object
// // console.log("user object", user)

// //Extract single value from object
// //call dot(.)notation
// console.log("firstname is:", user.firstname);
// console.log("lastname is:", user.lastname);
// console.log("Full name is:", user.firstname, user.lastname);

// //call bracket([])notation
// console.log("Age is:", user['age']);
// console.log("Address is:", user['address']);
// console.log("Course fee is:", user['course fee']);

// //console.log("full name:", user.fullname);//undefined - as key is not

// //Add / UPDATE key to object
// user.fullname = "Virat Kohili";
// console.log(user);
// user['adhar number'] = 1234567890;
// user['phone number'] = 8984441016;

// //Access Methods from object
// user.greet();
// // // user.hello();

// //----------Nested Object----------
// const employee = {
//     fullname: 'Salman Khan',
//     age: 58,
//     address : {
//         street : 'Andheri',
//         pin : 400053,
//         city : 'Mumbai',
//         state : 'Maharashtra',
//         country : 'India'
//     }
// }

// console.log("Full name:", employee.fullname);
// console.log("Age", employee.age);
// console.log("Country", employee.address.country);

// employee.address.pin = 7540031

// console.log("Pin", employee.address.pin);

const owner = {
    'Name of owner' : 'Mukesh Ambani',
    age : 65,
    'Company' : 'Reliance',
    employee : {
        fullname: 'Akash Ambani',
        age: 32,
        work : {
            designation : 'CEO',
            salary : 5000000,
            location : 'Mumbai'
        }
    }
}

console.log("Owner name:", owner['Name of owner']);
console.log("Owner age:", owner.age);
console.log("Owner company:", owner['Company']);

console.log("Employee name:", owner.employee.fullname);
console.log("Employee age:", owner.employee.age);
console.log("Employee designation:", owner.employee.work.designation);
console.log("Employee salary:", owner.employee.work.salary);
console.log("Employee location:", owner.employee.work.location);