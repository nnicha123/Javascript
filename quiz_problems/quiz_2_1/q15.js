findPrimeSum = (n) => {
    let val = 1;
    let sum = 0;
    while (val < n) {
        val = val + 1;
        for (var i = 2; i <= val; i++) if (val % i == 0) break;
        if (i == val) sum += val;
    }
    return sum;
}
console.log(findPrimeSum(4129980)); //too slow
// console.log(findPrimeSum(11));
