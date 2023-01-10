var nextTaskId = 0;
var taskList = [];
var taskCreatedCount = 0;
var taskCompletedCount = 0;

document.getElementById("add-task-btn").addEventListener("click", function () {
    var taskInput = document.getElementById("task-input");
    var task = {
        id: nextTaskId++,
        name: taskInput.value,
        completed: false
    }
    taskList.push(task);
    taskCreatedCount++;
    updateTaskCount();
    updateTaskList();
});

function updateTaskList() {
    var taskListElem = document.getElementById("task-list");
    taskListElem.innerHTML = "";

    for (var i = 0; i < taskList.length; i++) {
        var task = taskList[i];
        var li = document.createElement("li");
        li.setAttribute("data-task-id", task.id);
        li.innerHTML = `${task.id} - ` + task.name;
        li.classList.toggle("completed", task.completed);
        li.addEventListener("click", function () {
            var taskId = this.getAttribute("data-task-id");
            taskList.find(t => t.id == taskId).completed = !taskList.find(t => t.id == taskId).completed;
            if (taskList.find(t => t.id == taskId).completed) {
                taskCompletedCount++;
            } else {
                taskCompletedCount--;
            }
            this.classList.toggle("completed");
            updateTaskCount();
        });

        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "X";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", function () {
            var taskId = this.parentNode.getAttribute("data-task-id");
            var task = taskList.find(t => t.id == taskId);
            if (task.completed) {
                taskCompletedCount--;
            }
            taskCreatedCount--;
            taskList = taskList.filter(function (t) { return t.id != taskId });
            updateTaskCount();
            updateTaskList();
        });

        li.appendChild(deleteBtn);
        taskListElem.appendChild(li);
        
    }
}

function updateTaskCount() {
    document.getElementById("task-created-count").innerHTML = taskCreatedCount;
    document.getElementById("task-completed-count").innerHTML = taskCompletedCount;
}
