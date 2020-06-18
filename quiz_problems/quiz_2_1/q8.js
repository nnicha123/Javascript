lcmFind = (arr) => {
    arr.sort((a,b) => a-b);
    let count = 0;
    let divisibleVal;
    let i = arr[arr.length-1];
    while(true){
        for(let j = 0;j<arr.length;j++){
            if(i % arr[j] == 0){
                count++;
                divisibleVal = i;
            }
        }
        if(count == arr.length){
          return divisibleVal;
        }
        count = 0;
        i++;
    }
}
console.log(lcmFind([24,48,96]));
console.log(lcmFind([2,3,5,7]));
