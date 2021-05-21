function removeOrToggleElement() {
  document.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", e => {
      if (e.target.tagName === "LI") {
        console.log(e.target);
        e.target.classList.toggle("checked");
      } else if (e.target.tagName === "SPAN") {
        e.path[1].style.display = "none";
      }
    });
  });
}

function newElement() {
  let task = document.getElementById("task");
  let inputValue = task.value;
  if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length == 0) {
    $(".error").toast("show");
  } else {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.textContent = inputValue;
    span.setAttribute("class", "close");
    span.textContent = "x";
    li.appendChild(span);
    document.getElementById("list").appendChild(li);
    setLocalTodos(inputValue);
    $(".success").toast("show");
    li.addEventListener("click", e => {
      if (e.target.tagName === "LI") {
        console.log(e.target);
        e.target.classList.toggle("checked");
      } else if (e.target.tagName === "SPAN") {
        e.path[1].style.display = "none";
      }
    });
  }
  task.value = "";
}

function getLocalTodos() {
  const stringTodos = localStorage.getItem("todos");
  const parsedTodos = JSON.parse(stringTodos);
  parsedTodos.forEach(parsedTodo => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.textContent = parsedTodo;
    span.setAttribute("class", "close");
    span.textContent = "x";
    li.appendChild(span);
    document.getElementById("list").appendChild(li);
  });
}

function setLocalTodos(todo) {
  const stringTodos = localStorage.getItem("todos");
  const parsedTodos = JSON.parse(stringTodos);
  parsedTodos.push(todo);
  localStorage.setItem("todos", JSON.stringify(parsedTodos));
}

getLocalTodos();
removeOrToggleElement();
