

/**
 * 
 * 
 * @Author: JOSE LOPEZ RISSO
 * Email: jal.risso@gmail.com
 * 
 * Content: Este archivo contiene funciones relacionadas a la creación
 * de nuevas LISTAS y de nuevas TAREAS. Estas dos funciones son llamadas
 * cuando el usuario carga info a través de alguno de los inputs
 * 
 * 
 * 
 */





function createNewList(event) { //Crea una nueva Lista
    event.preventDefault(); //prevenimos que se en envie el formulario 
    if (!newListInput.value) return;

    const newList = new List({
        title: newListInput.value
    });
    newListInput.value = '';
    console.log(newList);
    lists.push(newList);

    saveAndRender();
}


function createNewTask(event) { //Crea un nuevo Task
    event.preventDefault(); //prevenimos que se en envie el formulario 
    if (!newTaskInput.value) return;
    const selectedList = lists.find(list => list.id === selectedListId);
    selectedList.addTask(newTaskInput.value);
    newTaskInput.value = '';
    saveAndRenderTasks(selectedList)

}