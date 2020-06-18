sumValues = (num1,num2) => {
    let sum = 0;
    arr = String(num1).split('').concat(String(num2).split(''));
    for(let i=0;i<arr.length;i++) sum += Number(arr[i]);
    return sum;
}
console.log(sumValues(130,120));