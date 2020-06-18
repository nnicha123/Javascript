minPairSum = (array) => {
    let sumMax = 0;
    let count = 0;
    let minIndex;
    while (count < 2) {
        minIndex = 0;
        // find min value
        for (let i = 0; i < array.length; i++) {
            if (array[minIndex] > array[i]) {
                minIndex = i;
            }
        }
        sumMax += array[minIndex];
        count++;
        array.splice(minIndex, 1);
    }
    return sumMax;
}

console.log(minPairSum([2, 5, 3, 9, 19, 3, 7, 58]));