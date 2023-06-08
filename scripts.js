// get from local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// render tasks
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" onchange="checkTask(${index})" ${task.checked ? 'checked' : ''}>
      <span>${task.name}</span>
      <button onclick="editTask(${index})">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

// Function to add a task
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskName = taskInput.value.trim();

  if (taskName !== '') {
    const newTask = {
      name: taskName,
      checked: false
    };

    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskInput.value = '';
    renderTasks();
  }
}

// Function to edit a task
function editTask(index) {
  const newTaskName = prompt('Enter a new task name:');
  if (newTaskName !== null && newTaskName.trim() !== '') {
    tasks[index].name = newTaskName.trim();
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
  }
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

//check/uncheck a task
function checkTask(index) {
  tasks[index].checked = !tasks[index].checked;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

//  rendering  tasks
renderTasks();
