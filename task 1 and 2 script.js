// Task 1: Array Manipulation Basics

let shoppingList = [];

function addItem(item) {
  shoppingList.push(item);
}

function removeLastItem() {
  shoppingList.pop();
}

function displayList() {
  shoppingList.forEach((item) => {
    console.log(item);
  });
}

addItem("Apple");
addItem("Orange");
addItem("Orange");
console.log(shoppingList);

removeLastItem();
console.log(shoppingList);

displayList();

//Task 2: Filter and Search an Array

let shoppingList = [];

function addItem(item) {
  if (shoppingList.includes(item)) {
    console.log("Already in the list");
  } else {
    shoppingList.push(item);
  }
}

function removeLastItem() {
  shoppingList.pop();
}

function displayList() {
  shoppingList.forEach((item) => {
    console.log(item);
  });
}

function filterItems(searchTerm) {
  const term = searchTerm.toLowerCase();
  return shoppingList.filter((item) => item.toLowerCase().includes(term));
}

addItem("Apple");
addItem("Orange");
addItem("Orange");
console.log(shoppingList);

removeLastItem();
console.log(shoppingList);

displayList();

addItem("Apple");
