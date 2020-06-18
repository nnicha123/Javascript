calculateInterest = (money,years) => {
    let sum = money;
    for(let i=0;i<years;i++) sum += sum*0.025;
    return sum;
} 
console.log(calculateInterest(15126,14));
console.log(calculateInterest(100000,1));