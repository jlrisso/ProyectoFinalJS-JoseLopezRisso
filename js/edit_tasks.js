

/**
 * 
 * 
 * @Author: JOSE LOPEZ RISSO
 * Email: jal.risso@gmail.com
 * 
 * Content: Este archivo contiene las funciones involucrads en el proceso
 * de edición de un TASK específico: ya sea cambiar de estado su "checkbox"
 * o editar el contenido del TASK. La función "changeTask", chequea si el 
 * click sobre el TASK responde a un click en el "CHECKBOX" o a un click sobre
 * el botón "EDIT". En caso de click sobre el "CHECKBOX", lo que hace es 
 * llamar a la función saveMyCheckBox, que básicamente guarda en local-storage
 * ese cambio. Por otro lado, la función "editMyTask" resalta el contenido
 * de un TASK específico, para poder editarlo, y queda atento a dos eventos:
 * BLUR y KEY PRESS:
 * 
 * 1) BLUR: En caso de hacer click fuera del elemento, es decir, 
 * sacándole el foco, la función guarda el nuevo contenido del TASK.
 * 
 * 2) KEY PRESS: En caso de presionar la tecla ENTER, la función guarda
 * el nuevo contenido del TASK.
 * 
 * Es importante mencionar que el contenido editado solo se guarda si es
 * distinto de "".
 *
 * 
 * 
 */





function changeTask(event) { // 
    if (event.target.tagName.toLowerCase() === 'input') { //&& event.target.getAttribute('type') === 'checkbox') 
        saveMyCheckbox(event);
    } else if (event.target.tagName.toLowerCase() === 'button') {
        editMyTask(event);
    }
}


function saveMyCheckbox(event) {
    const selectedList = lists.find(list => list.id === selectedListId);
    const taskId = event.target.id;
    const selectedTask = selectedList.tasks.find(task => task.id === taskId);
    selectedTask.completed = event.target.checked;
    saveAndRenderTasks(selectedList)
}


function editMyTask(event) {
    const taskId = event.target.id;
    const pTag = document.querySelector(`p[id='${taskId}']`);
    pTag.contentEditable = true;
    pTag.classList.add('highlight');
    pTag.focus();

    pTag.addEventListener('keypress', saveWithEnter, false);
    pTag.addEventListener('blur', saveWithBlur, false);

}


function saveWithEnter(event) {
    if (event?.keyCode === 13) { //Check for Enter Key (que es la número 13)
        checkForNoContentAndSave(event);       
    }
}

function saveWithBlur(event) {
    checkForNoContentAndSave(event);
}


function checkForNoContentAndSave(event){
    event.target.contentEditable = false;
    const selectedList = lists.find(list => list.id === selectedListId);
    const selectedTask = selectedList.tasks.find(task => task.id === event.target.id);
    event.target.classList.remove('highlight');
    if (!event.target.textContent) {
          event.target.textContent = selectedTask.content;
          return;
    }
    selectedTask.content = event.target.textContent;
    saveAndRenderTasks(selectedList);
}

