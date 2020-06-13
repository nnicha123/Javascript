

maxPairSum = (array) => {
    let sumMax = 0;
    let count = 0;
    let maxIndex;
    while (count < 2) {
        maxIndex = 0;
        // find min value
        for (let i = 0; i < array.length; i++) {
            if (array[maxIndex] < array[i]) {
                maxIndex = i;
            }
        }
        sumMax += array[maxIndex];
        count++;
        array.splice(maxIndex, 1);
    }
    return sumMax;
}

console.log(maxPairSum([2, 5, 3, 9, 19, 3, 7, 58]));