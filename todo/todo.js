document.addEventListener("DOMContentLoaded", function () {
  let tasks = [];

  const taskIP = document.querySelector("#taskInput");
  const addTaskBtn = document.querySelector("#add-task-btn");
  const taskList = document.querySelector(".task-list");
  const clearTasksBtn = document.querySelector("#clear-all-btn");

  addTaskBtn.addEventListener("click", addTask);
  clearTasksBtn.addEventListener("click", clearTasks);

  function displayTasks() {
    let taskHTML = "";
    tasks.forEach((task, index) => {
      taskHTML += `<li>
      ${task} <button class="del-task-btn" data-index="${index}">x</button>
      </li>`;
    });
    taskList.innerHTML = taskHTML;

    const remTaskBtns = document.querySelectorAll(".del-task-btn");
    remTaskBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const index = Number(this.getAttribute("data-index"));
        removeTask(index);
      });
    });
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadTasks() {
    try {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks !== null) {
        tasks = JSON.parse(storedTasks);
      }
    } catch (e) {
      console.error("Error loading tasks from localStorage:", e);
    }
  }

  function addTask() {
    const taskTxt = taskIP.value;
    if (taskTxt === "") return;
    tasks.push(taskTxt);
    taskIP.value = "";
    saveTasks();
    displayTasks();
  }

  function removeTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
  }

  function clearTasks() {
    tasks = [];
    saveTasks();
    displayTasks();
  }

  loadTasks();
  displayTasks();
});
