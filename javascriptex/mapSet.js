let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');
console.log(map.get(1));
console.log(map.get('1'));

let names = new Map();
names.set('CEO', 'Peejak');
names.set('COO', "P'Kem");
names.set('CFO', "P'Earth");
console.log(names.get('CEO'));
console.log(names.has('COO'));
console.log(names.delete('COO'));
console.log(names.has('COO'));

// let john = { name: "John" };
// let visitsCountMap = new Map();
// visitsCountMap.set(john, 123);
// console.log( visitsCountMap.get(john) ); // 123
// console.log(names.keys());


let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);
// iterate แต่ละ keys (ผัก)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate แต่ละ values (จำนวน)
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}

// iterate แต่ละ [key, value] entries
for (let entry of recipeMap) { // เหมือนกับการใช้ of recipeMap.entries()
    console.log(entry); // cucumber,500 (และไปเรื่อย ๆ)
}
recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`); // cucumber: 500 etc
});

// Object
let user = {
    name: 'sonter',
    age: 19,
    skill: "NodeJS"
}
//   convert object to map
user = Object.entries(user);
console.log(user);
// convert map back to object
user = Object.fromEntries(user);
console.log(user);
// example of map -> object conversion
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);
console.log(prices);


// // Example of set
// let set = new Set();
// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };
// // visits, some users come multiple times (don't keep the repeated values!!!!)
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);
// // เนื่องจาก set เก็บแค่ค่าที่ unique
// console.log( set ); // 3
// for (let user of set) {
//   console.log(user.name); // John (then Pete and Mary)
// }

let set = new Set(["oranges", "apples", "bananas"]);
for (let value of set) console.log(value);
// เหมือนกับ forEach:
set.forEach((value, valueAgain, set) => {
    console.log(value);
});

// Exercises
// 1
unique = (arr) => new Set(arr);
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(unique(values));
// 2 
let a = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// Write a function to first only return the originals;
uniqueValues = (arr) => {
    let newArr = [];
    arr.forEach(str => {
        str = str.toLowerCase();
        str = str.split("");
        str = str.sort();
        str = str.join("");
        newArr.push(str);
    })
    // should return 3 unique values
    return new Set(newArr);
}


console.log(uniqueValues(a));
