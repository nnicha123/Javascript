//20
function draw(n) {
    let finalAnswer = '';
    let tryloopAns = '';
    let count = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            newAns = i * j
            tryloopAns += (newAns);
            if(count == 2){
                tryloopAns += '\n';
            }
            }
        count++ ;
        finalAnswer += (tryloopAns + '\n');
        tryloopAns = '';
    }
    return finalAnswer;
}
// draw(4)
console.log(draw(4));