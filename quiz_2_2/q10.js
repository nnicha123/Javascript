squareRoot = (num) => {
    if ((Math.sqrt(num)).toFixed(0) == Math.sqrt(num)) return Math.sqrt(num);
    else {
        let fixedNum = (Math.sqrt(num)).toFixed(0);
        while (num % (fixedNum * fixedNum) != 0) fixedNum--;
        return (fixedNum == 1) ? 'root ' + num : fixedNum + ' root ' + (num / (fixedNum * fixedNum));
    }
}
console.log(squareRoot(50));
console.log(squareRoot(17));
console.log(squareRoot(25));
console.log(squareRoot(77));
console.log(squareRoot(121));
console.log(squareRoot(12));