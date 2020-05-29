
// for(let i=2;i<=10;i++){
//     console.log(i);
// }

// let user = {
//     name: "John",
//     go: function () { console.log(this.name) }
// }

// console.log(user.go())

function makeUser() {
    return {
        name: "John",
        ref: this
    };
};

let user = makeUser();

console.log(user.ref.name); // What's the result?