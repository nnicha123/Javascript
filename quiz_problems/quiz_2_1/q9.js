factorial = (n) => {
    let count = 1;
    let result =1;
    while(count <= n){
        result *= count;
        count ++;
    }
    return result
}
console.log(factorial(4));