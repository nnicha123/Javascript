
// Examples
// let arr = [1,2];
// let newArr = arr.concat([3,4],[5,6]);
// console.log(newArr);

// let arrNew = ["Bilbo", "Gandalf", "Nazgul"];
// arrNew.forEach(function(item,index,array){
//     console.log(`${item} is at index ${index} in ${array}`);
// })

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

  let user = users.find(item => item.id ==1); //returns item
  console.log(user.name);
  let userIndex = users.findIndex(item => item.id == 1);
  console.log(userIndex);
//   let someUsers = users.filter(item => item.id < 3);
//   console.log(someUsers.length);

// practice 1.1
let array1 = [1,2,30,400];
let array2 = array1.map(el => el*2);
console.log(array2);
// practice 1.2 **
array1 = [1, 2, 3, 4];
// array2 = array1.map(el =>"\"" + el + "\"");
// console.log(array2);

// let arr2 = "\""+array1.join("\",\"")+"\"";
// console.log(arr2);

array2 = array1.map(el => el.toString());
console.log(array2);

// practice 1.3
array1 = [1, "1", 2, {}];
array2 = array1.map(el => typeof el);
console.log(array2);

// practice 1.4
array1 = ["apple","banana","orange"];
array2 = array1.map(el => el.toUpperCase());
console.log(array2);

// practice 1.5
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
  ]
array2 = array1.map(el => el.name);
console.log(array2);

// practice 1.6
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
  ]
array2 = array1.map(el => el.age);
console.log(array2);

// practice 1.7
array1 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
  ]
array2 = array1.map(el => el.name + " " + el.surname);
console.log(array2);

// practice 1.8
array1 = [1,3,4,5,6,7,8];
array2 = array1.map(el => el % 2 == 0 ? 'even': 'odd');
console.log(array2);

// practice 1.9
array1 = [1, -3, 2, 8, -4, 5];
array2 = array1.map(el => Math.abs(el));
console.log(array2);

// practice 1.10
array1 = [100, 200.25, 300.84, 400.3];
array2 = array1.map(el => el.toFixed(2));
console.log(array2);

// practice 1.11
array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
  ]
  array2 = array1.map(el => {
    el.age = (el.birth.slice(5,7) >= "11") ?  (2019 -  el.birth.slice(0,4)) -1 : (2019 -  el.birth.slice(0,4));
    return el;
});
console.log(array2);

// practice 1.12 **
array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
  ]
array2 = array1.map(el => `<tr>\n <td> ${el.name} </td> \n <td> ${el.birth} </td> \n </tr>`)
console.log(array2);


// practice 2.1
array1 = [1,2,30,400];
array2 = array1.filter(el => el > 10);
console.log(array2);

// practice 2.2
array1 = [1,2,3,4];
array2 = array1.filter(el => el%2 != 0);
console.log(array2);

// practice 2.3
array1 = [1, "1", 2, {}];
array2 = array1.filter(el => typeof el == "number");
console.log(array2);

// practice 2.4
array1 = ["apple", "banana", "orange", "pineapple", "watermeon"];
array2 = array1.filter(el => el.length > 6);
console.log(array2);

// practice 2.5
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
  ]
array2 = array1.filter(el => el.age < 18);
console.log(array2);

// practice 2.6
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
  ]
array2 = array1.filter(el => el.age != 32);
console.log(array2);

// practice 2.7
array1 = [1, -3, 2, 8, -4, 5];
array2 = array1.filter(el => el > 0);
console.log(array2);

// practice 2.8
array1 = [1,3,4,5,6,7,8];
array2 = array1.filter(el => el % 3 == 0);
console.log(array2);

// practice 2.9
array1 = ["peach", 1, -3, "2", {}, []];
array2 = array1.filter(el => typeof el == "string");
console.log(array2);

// practice 2.10
array1 = ["APPLE", "appLE", "PEACH", "PEach"];
array2 = array1.filter(el => el.toUpperCase() == el)
console.log(array2);

// practice 2.11
array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
  ]
array2 = array1.filter(el => {
    if(el.birth.slice(5,7) == '10')
    return el;
})
console.log(array2);

// practice 2.12
array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
  ]
  array2 = array1.filter(el => {
    if(el.birth.slice(0,4) <= '2000')
    return el;
})
console.log(array2);

