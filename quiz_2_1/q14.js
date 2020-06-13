factSum = (n) => {
    let multSum = 1;
    for(let i=1;i<n;i++) multSum *= i;
    facArr =  String(multSum).split('');
    multSum = 0;
    for(let i=0;i<facArr.length;i++) multSum += Number(facArr[i]);
    return multSum;
}
console.log(factSum(6));
console.log(factSum(7));