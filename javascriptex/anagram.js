// 2 *Not finished yet
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
    console.log(newArr);
    let setArr = new Set(newArr);
    setArr = Array.from(setArr);
    console.log(setArr);
    console.log(newArr[0] == setArr[0]);
    // should return 3 unique values
    return new Set(newArr);
}
console.log(uniqueValues(a));

// Find index in which the set comes from
let ArrSample = 
 [ 'anp',      'aceehrst',
  'aceehrst', 'anp',
  'aer',      'aer',
  'aceehrst'
]
let ArrSet = [ 'anp', 'aceehrst', 'aer' ];
let count = 0;
while(ArrSet.length > 0){
    console.log(ArrSet,count);
    count ++;
    ArrSet.splice(0,1);
    
}