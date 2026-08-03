// // const s1 = "Rohit"
// // const s2 = "Virat"
// // const s3 = "Sachin"

// const stds = ["Rohit", "Virat", "Sachin"]
// console.log(stds.length);

// console.log(stds[0]);
// console.log(stds[1]);
// console.log(stds[2]);

// for(let i = 0; i < stds.length; i++){
//     console.log(stds[i]);
//  }

// // console.log(stds[4]); // undefined

// // stds[10] = "Dhoni"


// //============Array Methods================
const fruits = ["Apple", "Banana", "Mango"]

fruits.push("Pineapple") // add element at the end
console.log(fruits);

fruits.pop() // remove element from the end
console.log(fruits);

// fruits.unshift("Pineapple") // add element at the start
// console.log(fruits);

// fruits.shift() // remove element from the start
// console.log(fruits);

console.log(fruits.includes("Apple"));
console.log(fruits.includes("Apples", 2));

console.log(fruits.indexOf("Apple"));   //0
console.log(fruits.indexOf("Apple", 2));  //-1

// // step 1 => check mango is present in the array or not
if(fruits.includes("Mango")) {

//     // step 2 => if exists then extract the index 
    const index = fruits.indexOf("Mango");

    //step 3 => then upddate the value in the index
    fruits[index] = "kiwi";

    console.log(fruits)
} else {
    // step 4 => if not exists then do nothinng
    alert("Search element is not present")
}





