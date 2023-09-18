const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tasks = [];

function showTasks() {
    if (tasks.length === 0) {
        console.log('No tasks.');
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. [${task.completed ? 'x' : ' '}] ${task.description}`);
        });
    }
}

function addTask(description) {
    tasks.push({ description, completed: false });
    console.log('Task added.');
}

function completeTask(taskIndex) {
    if (taskIndex >= 0 && taskIndex < tasks.length) {
        tasks[taskIndex].completed = true;
        console.log('Task marked as completed.');
    } else {
        console.log('Invalid task index.');
    }
}

rl.on('line', function (input) {
    const parts = input.split(' ');
    const command = parts[0];

    switch (command) {
        case 'add':
            const description = parts.slice(1).join(' ');
            addTask(description);
            break;

        case 'complete':
            const taskIndex = parseInt(parts[1]) - 1;
            completeTask(taskIndex);
            break;

        case 'list':
            showTasks();
            break;

        case 'exit':
            rl.close();
            break;

        default:
            console.log('Unknown command.');
            break;
    }
});

console.log('Simple Task Manager CLI');
console.log('Available commands: add, complete, list, exit');
