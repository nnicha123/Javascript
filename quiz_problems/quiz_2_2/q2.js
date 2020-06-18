pow = (a,n) => {
    let result = 1;
    while(n){
        result*=a;
        n--;
    }
    return result;
};
console.log(pow(5,5));
// without using the Math.pow() method