// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Event listener for the "Add Task" button
addButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim(); // Remove whitespace
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; // Clear input
    }
});

// Function to add a new task to the list
function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        taskItem.remove();
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
}
