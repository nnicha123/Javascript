function fiboEvenSum(num) {
    // You can do it!
    if(num === 1){
        return 0
    }
    if(num === 2){
        return 1;
    }
    return fiboEvenSum(num-1) + fiboEvenSum(num-2)
  }
  
  console.log(fiboEvenSum(10));