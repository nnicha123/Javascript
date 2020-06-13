// NEED TO MODIFY FURTHER TO ACCEPT ANY NUMBER OF ARRAYS -> now works for array length 3
commonMul = (arr) => {
    let common = 1;
    // find min
    arr.sort((a,b) => a-b);
    for(let i=1;i<=arr[0];i++) {if((arr[0] % i == 0) && (arr[0] % i == 0) && (arr[2] % i == 0)) common = i};
    return common;
}
console.log(commonMul([8,6,16]));
console.log(commonMul([8,8,16]));
