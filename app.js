//  Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const FiltterOption = document.querySelector(".fillter-todo");

// console.log(todoInput);
// console.log(todoButton);
// console.log(todoInput);
// console.log(FiltterOption);

//  Event Listener

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteAndCheckTodo);
FiltterOption.addEventListener("click", filterTodo);

// Functions

//  Add Function

function addTodo(event) {
  // Prevent form from Submiting
  event.preventDefault();

  // Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create LI
  const newTodo = document.createElement("li");
  newTodo.innerHTML = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // CREATE CHECK MARK BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // CREATE Trash  BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // APPEND TO LIST
  todoList.appendChild(todoDiv);

  // Clear Todo Input Value
  todoInput.value = "";
}

// Delete and Check Function

function deleteAndCheckTodo(event) {
  // console.log(event.target);
  const item = event.target;

  // DELETE TODO
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;

    // Aniamation
    todo.classList.add("fall");

    todo.addEventListener("transitionend", function () {
      todo.remove();
      // console.log(todo);
    });
  }

  // CHECK MARK
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

// filter function

function filterTodo(e) {
  const todos = todoList.children;

  const todosArray = [...todos]; // convert HTMLCollection to an Array
  // console.log(todos); // HTMLCollection
  todosArray.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;

      case "uncompleted":
        if (todo.classList.contains("completed")) {
          todo.style.display = "none";
        } else {
          todo.style.display = "flex";
        }
        break;
    }
  });
}
