// Old func -> find prime and put in array
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
// to get the first prime numbers 1-100; (don't know the limit)
findTotal = (n) => {
    let primeArr = findPrime(n);
    let sum = 0;
    for(let i=1;i<=n;i++) (primeArr.indexOf(i) != -1) ? sum -=i : sum += i
    return sum
}

console.log(findTotal(11));
console.log(findTotal(15));