
function renderDisplay(selectedList) { //Renderiza cabecera (header) de la Lista mostrada

    //Incomplete Tasks
    const incompleteTasksNumber = selectedList.tasks.reduce((acc, task) => {
        return (!task.completed) ? acc += 1 : acc;
    }, 0);

    renderIncompleteTasks(incompleteTasksNumber);
    renderTasks(selectedList);
}
