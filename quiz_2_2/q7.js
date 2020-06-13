// NOT DONE YET
numberOfSquare = (height,width) => {
    let highestSquare = 1;
    let area = height*width
    for(let i=1;i<=area;i++){
        if(area % (i*i) == 0){
            highestSquare = i*i;
        }
    }
    return highestSquare;
}
console.log(numberOfSquare(15,15));
console.log(numberOfSquare(20,15));
console.log(numberOfSquare(2,8));
console.log(numberOfSquare(1,5));
