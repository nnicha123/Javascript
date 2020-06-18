findPrime = (n) => {
    let val = 1;
    let arr = [];
    while (val < n) {
        val = val + 1;
        for (var i = 2; i <= val; i++) if (val % i == 0) break;
        if (i == val) arr.push(val);
    }
    return arr;
}
console.log(findPrime(9))
console.log(findPrime(11))
console.log(findPrime(942))