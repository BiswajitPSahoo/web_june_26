//function declaration
//function <function_name>(list of parameters) {}
function myFun() {
    console.log("Good Morning!!!");
}

// myFun()

function greet(name = 'JT') {
    console.log("Good Morning", name, '!!!');
}
// greet("Biswajit")
// greet(10)
// greet(true)
// greet()
// greet("Omm", 10)

function addJTTag(name) {
    return "JT'ans " + name
}

let updatedName = addJTTag("Omm")
console.log(updatedName);

function add(a,b,c) {
    console.log("Sum Is:" +(a+b+c)) 
}

add(12,45,56)
