let search = document.getElementById("search");
let btn = document.getElementById("btn");
let listbox = document.getElementById("listbox");
btn.addEventListener("click", (e) => {
  let addTask = document.createElement("li");
  let text = document.createTextNode(search.value);
  if (search.value === "") {
    alert("please fill a task");
  } else {
    addTask.appendChild(text);
    listbox.appendChild(addTask);
    search.value = "";
  }
  addTask.addEventListener("click", () => {
    addTask.style.textDecoration = "line-through";
  });
  addTask.addEventListener("dblclick", () => {
    addTask.remove();
  });
});
document.body.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let addTask = document.createElement("li");
    let text = document.createTextNode(search.value);
    if (search.value === "") {
      alert("please fill a task");
    } else {
      addTask.appendChild(text);
      listbox.appendChild(addTask);
      search.value = "";
      addTask.addEventListener("click", () => {
        addTask.style.textDecoration = "line-through";
      });
      addTask.addEventListener("dblclick", () => {
        addTask.remove();
      });
    }
  }
});
