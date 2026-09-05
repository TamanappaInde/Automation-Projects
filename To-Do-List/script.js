const input = document.querySelector(".input")
const addBtn = document.querySelector("#button");
const todoList = document.querySelector("#todo_list");
const count = document.querySelector("#count")

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(todos))   
}

function updateCount(){
    count.textContent = todos.length;
}

function renderToDos(){
    todoList.innerHTML = "";

    todos.forEach((todo) => {
        const li = document.createElement("li")
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        const span = document.createElement("span");
        span.textContent = todo.text;
        if (todo.completed){
            span.style.textDecoration = "line-through";
            span.style.opacity = "0.5";
        }
        const btnGroup = document.createElement("div");

        // Complete button
        const completeButton = document.createElement("button");
        completeButton.innerHTML = "✔";
        completeButton.className = "btn btn-success btn-sm me-2";
        completeButton.onclick = () => {
            todo.completed = !todo.completed;
            saveToDos();
            renderToDos();
        };

        // Edit button
        const editButton = document.createElement("button");
        editButton.innerHTML = "✏";
        editButton.className = "btn btn-warning btn-sm me-2"
        editButton.onclick = ()=> {
            const newText = prompt("Edit ToDo", todo.text);
            if (newText && newText.trim() !== ""){
                todo.text = newText.trim();
                saveToDos();
                renderToDos();
            }
        };

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "🗑";
        deleteButton.className = "btn btn-danger btn-sm";
        deleteButton.onclick = ()=> {
            if (confirm("Delete this task")){
                todos = todos.filter(item=>item.id !== todo.id);
                saveToDos();
                renderToDos();
            }
        };

        btnGroup.appendChild(completeButton);
        btnGroup.appendChild(editButton);
        btnGroup.appendChild(deleteButton);

        li.appendChild(span);
        li.appendChild(btnGroup);

        todoList.appendChild(li);

    });
    updateCount();

}

function addToDo(){
    const text = input.ariaValueMax.trim();

    if (text === ""){
        alert("Please enter task !");
        return;
    }
    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    todos.push(todo);
    saveToDos();
    renderToDos();
    input.value = "";
    input.focus();
}

addBtn.addEventListener("click", addToDo);
input.addEventListener("keypress", function (e){
    if (e.key === "Enter"){
        addToDo();
    }

});
renderToDos();