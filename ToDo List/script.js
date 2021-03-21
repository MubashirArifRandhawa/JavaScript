const toDoInput = document.querySelector("#toDoInput");
const btnAdd = document.querySelector("#btnAdd");
const showToDoListUnorderedList = document.querySelector(".toDos");
const LOCAL_STORAGE_LIST_KEY = "ToDo";
const LOCAL_STORAGE_LIST_COMPLETED_KEY = "completed";
var idVal = 0;
var completed = [];

// Events
btnAdd.addEventListener("click", addToDoList);
showToDoListUnorderedList.addEventListener(
  "click",
  deleteAndCompletedTaskAction
);

function addToDoList(e) {
  e.preventDefault();
  justAddOnScreenElement();
  var list = JSON.parse(localStorage.getItem("ToDo"));
  if (toDoInput.value == null || toDoInput.value === "") return;
  if (list === null) {
    var list = [];
    var object = {
      id: idVal,
      todo: toDoInput.value,
      status: "Not Complete",
    };
    idVal++;
    list.push(object);
  } else {
    var previousId = list.length - 1;
    previousId++;
    var object = {
      id: previousId,
      todo: toDoInput.value,
      status: "Not Complete",
    };
    list.push(object);
  }
  localStorage.setItem("ToDo", JSON.stringify(list));
  toDoInput.value = " ";
}

function showAllToDos() {
  key = "ToDo";
  stringToJSON = JSON.parse(localStorage.getItem(key));
  if (stringToJSON == null) return;
  else {
    stringToJSON.forEach((item) => {
      const addDiv = document.createElement("div");
      addDiv.classList.add("todo");
      addDiv.setAttribute("id", item.id);
      const newListItem = document.createElement("li");
      newListItem.textContent = item.todo;
      newListItem.classList.add("todo_style");
      if (item.status == "Completed") {
        newListItem.classList.toggle("completed");
      }
      addDiv.appendChild(newListItem);

      const completedBtn = document.createElement("Button");
      completedBtn.innerHTML = `<i id= ${item.id} class="fas fa-check"></i>`;
      completedBtn.classList.add("complete-button");
      completedBtn.setAttribute("id", item.id);
      addDiv.appendChild(completedBtn);

      const trashBtn = document.createElement("Button");
      trashBtn.innerHTML = `<i id= ${item.id} class="fas fa-trash"></i>`;
      trashBtn.classList.add("trash-button");
      trashBtn.setAttribute("id", item.id);
      addDiv.appendChild(trashBtn);

      showToDoListUnorderedList.appendChild(addDiv);
    });
  }
}

function deleteAndCompletedTaskAction(e) {
  var item = e.target;
  if (e.target.classList.value === "trash-button") {
    item.parentElement.classList.add("fall");
    item.parentElement.addEventListener("transitionend", function () {
      item.parentElement.remove();
    });
    stringToJSON = JSON.parse(localStorage.getItem(key));
    var newArray = stringToJSON.filter(function (value, index, arr) {
      return value.id != e.target.id;
    });
    localStorage.setItem("ToDo", JSON.stringify(newArray));
  }
  if (e.target.classList.value === "fas fa-trash") {
    item.parentElement.parentElement.classList.add("fall");
    item.parentElement.addEventListener("transitionend", function () {
      item.parentElement.parentElement.remove();
    });

    stringToJSON = JSON.parse(localStorage.getItem(key));
    var newArray = stringToJSON.filter(function (value, index, arr) {
      return value.id != e.target.id;
    });
    localStorage.setItem("ToDo", JSON.stringify(newArray));
  }
  if (e.target.classList.value === "complete-button") {
    item.parentElement.classList.toggle("completed");
    // stringToJSON = JSON.parse(localStorage.getItem(key));
    // stringToJSON.forEach((item) => {
    //   if (item.id == e.target.id) {
    //     var object = {
    //       id: item.id,
    //       todo: item.todo,
    //       status: "Complete",
    //     };
    //     completed.push(object);
    //   }
    // });
    // localStorage.setItem("ToDo", JSON.stringify(stringToJSON));
  }
  if (e.target.classList.value === "fas fa-check") {
    item.parentElement.parentElement.classList.toggle("completed");
    // stringToJSON = JSON.parse(localStorage.getItem(key));
    // stringToJSON.forEach((item) => {
    //   if (item.id == e.target.id) {
    //     item.status = "Completed";
    //   }
    // });
    // localStorage.setItem("ToDo", JSON.stringify(stringToJSON));
  }
}

function justAddOnScreenElement() {
  if (toDoInput.value == null || toDoInput.value == " ") return;
  else {
    const addDiv = document.createElement("div");
    addDiv.classList.add("todo");
    const newListItem = document.createElement("li");
    newListItem.textContent = toDoInput.value;
    newListItem.classList.add("todo_style");
    addDiv.appendChild(newListItem);

    const completedBtn = document.createElement("Button");
    completedBtn.innerHTML = `<i class="fas fa-check"></i>`;
    completedBtn.classList.add("complete-button");
    addDiv.appendChild(completedBtn);

    const trashBtn = document.createElement("Button");
    trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    trashBtn.classList.add("trash-button");
    addDiv.appendChild(trashBtn);

    showToDoListUnorderedList.appendChild(addDiv);
  }
}
showAllToDos();
