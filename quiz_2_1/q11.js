typesSort = (arr,bool) => {
    let newArr = []; let minIndex;
    if(bool){
        while (arr.length) {
            minIndex = 0;
            for (let i = 0; i < arr.length; i++) if(arr[minIndex] > arr[i]) minIndex = i;
            newArr.push(arr[minIndex]);
            arr.splice(minIndex, 1);
        }
    }
    else{
            while (arr.length) {
                minIndex = 0;
                for (let i = 0; i < arr.length; i++) if(arr[minIndex] < arr[i]) minIndex = i;
                newArr.push(arr[minIndex]);
                arr.splice(minIndex, 1);
            }
    }
    
    return newArr;
}
console.log(typesSort([1, 5, 7, 8, 3, 2],true));
console.log(typesSort([1, 5, 7, 8, 3, 2],false));
