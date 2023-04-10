let addBtn = document.getElementById("add-item");
let updateBtn = document.getElementById("update-item");
let removeBtn = document.getElementById("remove-item");
let input = document.getElementById("search-bar");
let todoList = document.getElementById("todo-list");
console.log(input.value);
let count = 0;
function createNewNode() {
  let newList = document.createElement("li");
  let deleteIcon = document.createElement("span");
  let text = document.createTextNode(input.value);
  let firstElementChild = todoList.firstElementChild;
  deleteIcon.innerHTML = "delete";
  count++;
  newList.id = `item${count}`;
  deleteIcon.classList.add("material-symbols-outlined");
  newList.appendChild(text);
  todoList.insertBefore(newList, firstElementChild);
  todoList.insertBefore(deleteIcon, firstElementChild);
  input.value = "";
}
addBtn.addEventListener("click", createNewNode);

updateBtn.addEventListener("click", () => {
  todoList.firstElementChild.innerHTML = input.value;
});

removeBtn.addEventListener("click", () => {
  alert("Please use that delete icon ");
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    createNewNode();
  }
});

deletesymbol.addEventListener("click", () => {
  console.log("delete clicked");
  todoList.remove();
});
