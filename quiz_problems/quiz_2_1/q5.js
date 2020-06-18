sumNum = (n) => {
    let count = 0;
    let sum = 0;
    while(count < n){
        count++;
        for(let i = 1;i<=count;i++) sum += count; 
    }
    return sum;
}
console.log(sumNum(1)); //1
console.log(sumNum(2)); //5
console.log(sumNum(3)); //14
console.log(sumNum(4)); //30