findSum = (n) => {
    let sum = 0;
    let newArr = String(n).split('')
    while (newArr.length) sum += Number(newArr.pop())
    return sum;
}
console.log(findSum(4129980)); //33
