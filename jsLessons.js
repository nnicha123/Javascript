// Exercise
// const newObj = {};
// newObj.name = "Sonter";
// console.log(newObj)
// newObj.surname = "Pakorn";
// console.log(newObj)
// newObj.name = "Boy";
// console.log(newObj);
// delete newObj.name;
// console.log(newObj);

// let object = {
//     name:'Nicha',
//     age:24
// }

// let object2 = {}
// // Ex sol1
// let isEmpt = (obj,key) => {
//     return (key in obj);
// }
// console.log(isEmpt(object,'age'))
// console.log(isEmpt(object,'blah'))

// // Ex sol2
// let isEmpty = (obj) => {
//     for (let key in obj) {
//         if(key) return true;
//       }
//       return false
// }
// console.log(isEmpty(object))
// console.log(isEmpty(object2))

// const user = {
//     name: "John"
//   };

//   // does it work?
//   user.name = "Pete";
//   console.log(user.name);

// Add salaries
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = (obj) => {
//     let total = 0;
//     for (let key in obj) {
//         total += obj[key]
//     }
//     return total;
// }
// console.log(sum(salaries))

// Multiply numeric
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
//   let multiplyNumeric = (obj,times) => {
//     for (let key in obj) {
//         if(typeof (obj[key])=="number") obj[key] *=times;   
//     }
//     return obj;
//   }
//   console.log(multiplyNumeric(menu, 2));

// let garbage = {
//     name: 'John'
// }
// console.log(garbage);
// garbage = null;
// console.log(garbage);

let user = {
    name: "John",
    age: 30
};

user.sayHi = function () {
    console.log("Hello!");
};

user.sayHi(); // Hello!