let arr = [-3,1,-8,4,-1,2,1,5,5];

getMaxSubSum = (arr) => {
  
    let size = arr.length;
    let start = 0;
    let end = 0;
  
    let maxSoFar = 0, maxEndingHere = 0;
  
    for (let i = 0; i < size; i++) {
        if (arr[i] > maxEndingHere + arr[i]) {
            start = i;
            maxEndingHere = arr[i];
        } else
            maxEndingHere = maxEndingHere + arr[i];
  
        if (maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere;
            end = i;
        }
    }
    return maxSoFar;
}

console.log(getMaxSubSum(arr));
console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2,-1,2,3,-9]));
console.log(getMaxSubSum([-1,2,3,-9,11]));
console.log(getMaxSubSum([-2,-1,1,2]));
console.log(getMaxSubSum([100,-9,2,-3,5]));
console.log(getMaxSubSum([1,2,3]));