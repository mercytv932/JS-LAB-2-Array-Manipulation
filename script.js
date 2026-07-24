// Task 1: Array Manipulation Basics

let shoppingList = [];

function addItem(item){
    shoppingList.push(item);
}

function removeLastItem(){
    shoppingList.pop();
}

function displayList(){
    shoppingList.forEach(item=>{
        console.log(item);
    })
}

addItem("Apple");
addItem("Orange");
addItem("Orange");
console.log(shoppingList);

removeLastItem();
console.log(shoppingList);

displayList();

