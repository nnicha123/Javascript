// practice 1.11
array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
  ]
let age;
arr2 = array1.map(el => {
    el.age = (el.birth.slice(5,7) >= "11") ?  (2019 -  el.birth.slice(0,4)) -1 : (2019 -  el.birth.slice(0,4));
    return el;
});
console.log(arr2);
// array2 = array1;
// for(let i =0;i<array1.length;i++) array2[i].age = arr2[i];
// console.log(array2);

// practice 1.12 **
// array1 = [
//     { name: "apple", birth: "2000-01-01" },
//     { name: "banana", birth: "1990-10-10" },
//     { name: "watermelon", birth: "1985-12-30" },
//   ]
// array2 = array1.map(el => `<tr>\n <td> ${el.name} </td> \n <td> ${el.birth} </td> \n </tr>`)
// console.log(array2);