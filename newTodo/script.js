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
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item')

        let editButton = document.createElement('button');
        editButton.innerHTML = 'Edit'
        editButton.classList.add('editButton');
        
        let removeButton = document.createElement('button');
        removeButton.innerHTML = 'Remove'
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click',() => this.edit(input));
        removeButton.addEventListener('click',() => this.remove(itemBox));
    }
    edit(input){
        input.disabled = !input.disabled;
    }
    remove(item){
        container.removeChild(item);
    }
}
addButton.addEventListener('click',() => {
    let newItem = new item(inputValue.value)
    inputValue.value = "";
});