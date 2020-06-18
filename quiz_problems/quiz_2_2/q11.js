dotProduct = (vector1, vector2) => {
    let minVector;
    let maxVector;
    let sum = 0;
    if (vector1.length != vector2.length) {
        if(vector1.length > vector2.length) {
            minVector = vector2;
            maxVector = vector1;
        }else{
            minVector = vector1;
            maxVector = vector2;
        }
        while(minVector.length <maxVector.length) minVector.push(0);
    } 
    else{
        minVector = vector1;
        maxVector = vector2;
    }
    for(let i=0;i<maxVector.length;i++) sum += (minVector[i] * maxVector[i]);
    return sum;
    // return minVector;
}
console.log(dotProduct([1,2,6,9],[3,2,6,3]));
console.log(dotProduct([3, 4], [2, 8, 9, 11]));