commonMul = (arr) => {
    arr.sort((a,b) => a-b);
    let minVal = arr[0];
    let count = arr.length;
    let gcdArr = [];
    let divisibleVal;
    for(let i=1;i<=minVal;i++) {
        for(let j = 0;j<arr.length;j++){
            if(arr[j] % i == 0){
                count--;
                divisibleVal = i;
            }
        }
        if(!count){
            gcdArr = divisibleVal;
        }
        count = arr.length;
    }
    return gcdArr;
}
console.log(commonMul([6,16,8]));
console.log(commonMul([8,16,8]));
console.log(commonMul([8,16,8,4,2]));
console.log(commonMul([9,27,81,3]));