findPrime = () => {
    let val = 1;
    let arr = [];
    while (val < 100) {
        val = val + 1;
        for (var i = 2; i <= val; i++) if (val % i == 0) break;
        if (i == val) arr.push(val);
    }
    return arr;
}
console.log(findPrime())