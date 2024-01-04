document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", () => addTask(taskInput, taskList));
    taskList.addEventListener("click", (event) => handleTaskListClick(event, taskList));
});

const addTask = (input, list) => {
    const taskText = input.value.trim();
    if (taskText !== "") {
        const li = createTaskElement(taskText);
        list.appendChild(li);
        input.value = "";
    }
};

const createTaskElement = (taskText) => {
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="removeBtn">Remove</button>`;
    return li;
};

const handleTaskListClick = (event, list) => {
    const target = event.target;
    if (target.classList.contains("removeBtn")) {
        const li = target.parentNode;
        list.removeChild(li);
    }
};
