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
    const itemDIv = document.createElement("div");
    itemDIv.className = "itemDiv";
    const newItem = document.createElement("li");
    newItem.className = "newItem";
    newItem.textContent = inputText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.className = "deleteBtn";
    deleteBtn.addEventListener("click", () => {
      itemDIv.remove();
    });
    itemDIv.appendChild(newItem);
    itemDIv.appendChild(deleteBtn);
    displayItems.appendChild(itemDIv);

    input.value = "";
  }
}
