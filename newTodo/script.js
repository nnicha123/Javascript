const addButton = document.querySelector(".addButton");
let inputValue = document.querySelector(".input");
let container = document.querySelector('.container');
class item{
    constructor(itemName){
        // Item div
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item')
        
        let removeButton = document.createElement('button');
        removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>'
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(removeButton);


        removeButton.addEventListener('click',() => this.remove(itemBox));
    }
    remove(item){
        container.removeChild(item);
    }
}
let newy = new item('Try');
addButton.addEventListener('click',() => {
    if(inputValue.value){
        newItem = new item(inputValue.value)
        inputValue.value = "";
    }

});