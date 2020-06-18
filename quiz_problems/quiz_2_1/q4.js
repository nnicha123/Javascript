findPrime = (n) => {
    let val = 1;
    let arr = [];
    while (arr.length < n) {
        val = val + 1;
        for (var i = 2; i <= val; i++) if (val % i == 0) break;
        if (i == val) arr.push(val);
    }
    return arr;
}
console.log(findPrime(4))
console.log(findPrime(5))
console.log(findPrime(160))