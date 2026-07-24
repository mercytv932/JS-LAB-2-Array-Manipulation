const form = document.querySelector(".form");
const input = document.querySelector(".input");
const addItem = document.querySelector(".addItem");
const displayItems = document.querySelector(".displayItems");

let items = [];

form.addEventListener("click", function () {
  event.preventDefault();
});

addItem.addEventListener("click", () => {
  addItems();
});

function addItems() {
  inputText = input.value;
  if (inputText === "") {
    return "Please Write Something!";
  } else {
    const newItem = document.createElement("li");
    newItem.textContent = inputText;
    displayItems.appendChild(newItem);
  }
}
