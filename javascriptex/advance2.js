console.log(0xff);

let a = 0b11111111;
let b = 0o377;
console.log(a == b);

let num = 1.23456;
console.log(Math.floor(num*100)/100);

let nu = 255;
console.log(nu.toString(16));
console.log(nu.toString(2));
console.log(nu.toString());

console.log((0.1 + 0.2) == (0.3)); //false
console.log(0.1 + 0.2); //0.30000000000000004

let suM = 0.1 + 0.2;
console.log(suM.toFixed(2) == 0.3);

const RandomFunc = (min,max) => {
    let num = Math.random()*(max-min) + min;
    return num;
}
console.log(RandomFunc(1,5));

function sum(a, b) {
    return a + b;
  }
  
  console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
  
//   Multi-line
let guestList = "Guests:\n * John\n * Pete\n * Mary";
console.log(guestList) 

// Exercise
// 1
const uCFirst = (string) =>  string[0].toUpperCase() + string.slice(1);
console.log(uCFirst("dsdfzsrghello"));

// 2
const checkSpam = (string) => string.includes("xxx") || string.includes("viagra");
console.log(checkSpam("awsviagrafre"));
console.log(checkSpam("awsvixxxagrafre"));
console.log(checkSpam("ergethe"));

// 3 truncate
const truncate = (str,maxlength) => (str.length > maxlength) ?  str.slice(0,maxlength-1) + "..." : str;
console.log(truncate("qwertyuiopasdfghjklzxcvbn",20));
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

// 4 extractCurrencyValue
const extractCurrencyValue = (str,rate) => str.slice(1,str.length) * rate
console.log(extractCurrencyValue('$1220',30.5));

// Arrays
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
console.log( fruits.length ); // 4

// Practice
// 1
let styles = ["Jazz","Blues"];
styles.push("Rock-n-Roll");
console.log(styles);
styles[1] = "Classics";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rap","Reggae");
console.log(styles);
// 3 Need to do in index.html (using prompt) -> do in index.html
const sumInput = () => {

}