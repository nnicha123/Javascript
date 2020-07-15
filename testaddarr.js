arr1 = [{title:'One',paragraph:'two',image:'three'},{title:'One',paragraph:'two',image:'three'},{title:'One',paragraph:'two',image:'three'}]
arr2 = [{book:1,size:200},{book:1,size:300},{book:1,size:400}]
let newArr = []
// Array.prototype.push.apply(arr1,arr2); 
for(let i =0;i<arr1.length;i++){
    arr1[i].size = arr2[i].size
}
console.log(arr1)