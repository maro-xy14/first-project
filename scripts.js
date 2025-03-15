function addTask() {
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskText));

        const removeButton = document.createElement('button');
        removeButton.innerHTML = '✖';
        removeButton.className = 'remove-task';
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };
        li.appendChild(removeButton);

        taskList.appendChild(li);
        newTaskInput.value = '';
    }
}
