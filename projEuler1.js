function multiplesOf3and5(number){
    let sum = 0;let count=0;
    while(count<number){
        if(count % 3 == 0 || count % 5 == 0){
            sum += count;
        }
        count++
    }
    return sum
}
console.log(multiplesOf3and5(10))
console.log(multiplesOf3and5(49))
console.log(multiplesOf3and5(1000))
console.log(multiplesOf3and5(8456))
console.log(multiplesOf3and5(19564))