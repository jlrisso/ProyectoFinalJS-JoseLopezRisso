


function renderIncompleteTasks(incompleteTasksNumber) { //Renderiza contador de tareas incompletas

    if (!incompleteTasksNumber) taskCount.innerText = 'Sin tareas pendientes';
    else {
        taskCount.innerText = `${incompleteTasksNumber>1 ? `${incompleteTasksNumber} tareas pendientes`: `1 tarea pendiente`}`;
    }
}


function renderTasks(list) { //Renderiza las tareas

    clearContainer(tasksContainer);
    list.tasks.forEach(renderTask);
}


function renderTask(task) { //Renderiza una tarea

    const taskTemplateCopy = taskTemplate.content.cloneNode(true); //True to clone children
    const taskCheckbox = taskTemplateCopy.querySelector('input');
    const pTag = taskTemplateCopy.querySelector('p');
    const editButton = taskTemplateCopy.querySelector('button');

    [taskCheckbox.id, pTag.id, editButton.id] = Array(3).fill(task.id);

    ({
        completed: taskCheckbox.checked,
        content: pTag.textContent,

    } = task);

    tasksContainer.append(taskTemplateCopy);
}
