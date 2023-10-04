document.getElementById('addTaskButton').addEventListener('click', function() {
    var taskInput = document.getElementById('taskInput');
    var dateInput = document.getElementById('dateInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value === '' || dateInput.value === '') {
        alert('Please enter a task and a due date.');
        return;
    }

    var newTask = document.createElement('li');
    newTask.innerHTML = `
        <div class="py-4">
            <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-gray-900">
                    ${taskInput.value}
                </p>
                <div class="ml-2 flex-shrink-0 flex">
                    <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        ${dateInput.value}
                    </p>
                </div>
            </div>
            <div class="mt-2 flex items-center text-sm text-gray-500">
                <button class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
            </div>
        </div>
    `;
    newTask.querySelector('button').addEventListener('click', function() {
        taskList.removeChild(newTask);
    });

    taskList.appendChild(newTask);

    taskInput.value = '';
    dateInput.value = '';

    var tasks = Array.from(taskList.children);
    tasks.sort(function(a, b) {
        return new Date(a.querySelector('p').textContent) - new Date(b.querySelector('p').textContent);
    });
    tasks.forEach(function(task) {
        taskList.appendChild(task);
    });
});
