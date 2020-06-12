maxPossibleNumber = (number) => {
    let arr = String(number).split('');
    let decIndex = arr.indexOf('.');
    let threeMin = [];
    let maxIndex;
    while (arr.length) {
        maxIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            if (Number(arr[maxIndex]) <= Number(arr[i])) {
                maxIndex = i;
            }
        }
        threeMin.push(arr[maxIndex]);
        arr.splice(maxIndex, 1);
    }
    if(decIndex != -1) {threeMin.pop(); threeMin.splice(decIndex, 0, '.')};
    return threeMin.join('');
}
console.log(maxPossibleNumber(69523));
console.log(maxPossibleNumber(12523.97));
console.log(maxPossibleNumber(955));
