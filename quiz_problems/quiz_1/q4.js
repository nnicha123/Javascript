// fibonacci
fib = (num) => {
    if(num <= 3) {
        return 1;
    }
    else{
        return fib(num -1) + fib(num-2);
    }
}
console.log(fib(8))