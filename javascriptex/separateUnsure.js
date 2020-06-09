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
  let date;
  let months;
array2 = array1.map(el => {
    date = new Date(el.birth);
    months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
    el.day = date.getDate();
    el.birth = months[date.getMonth()];
    el.year = date.getFullYear();
    return `<tr> \n  <td>${el.name}</td> \n <td>${el.day} ${el.birth} ${el.year}</td> \n  </tr>`;
})
console.log(array2);
// arr3 = array1.map(el => {
//     date = new Date(el.birth);
//     months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
//     el.birth = months[date.getMonth()];
//     return el
// })
// console.log(arr3);
// let date = new Date("2000-01-01");
// let months = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
// console.log(months[date.getMonth()]);

