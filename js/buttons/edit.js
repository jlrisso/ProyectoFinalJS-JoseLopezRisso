

/**
 * 
 * 
 * @Author: JOSE LOPEZ RISSO
 * Email: jal.risso@gmail.com
 * 
 * Content: Este archivo contiene las funciones involucrads en el proceso
 * de edición de un TASK específico: ya sea cambiar de estado a través de su "checkbox"
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


function saveMyCheckbox(event) { //Guardar el nuevo estado del checkbox
    const selectedList = lists.find(list => list.id === selectedListId);
    const taskId = event.target.id;
    const selectedTask = selectedList.tasks.find(task => task.id === taskId);
    selectedTask.completed = event.target.checked;
    saveAndRenderTasks(selectedList)
}


function editMyTask(event) { //Cuando el usuario hace click en "EDIT" se queda atento a dos eventos: KEYPRESS & BLUR
    const taskId = event.target.id;
    const pTag = document.querySelector(`p[id='${taskId}']`);
    pTag.contentEditable = true;
    pTag.classList.add('highlight');
    pTag.focus();

    pTag.addEventListener('keypress', saveWithEnter, false);
    pTag.addEventListener('blur', saveWithBlur, false);

}


function saveWithEnter(event) { //Guarda el contenido del task con ENTER
    
    if (event?.keyCode === 13) { //Check for Enter Key (que es la número 13)
        checkForNoContentAndSave(event);       
    }
}

function saveWithBlur(event) { //Guarda el contenido del task con BLUR
    if(event.sourceCapabilities!==null) {//NOTA IMPORTANTE: Realizo esta comparación, porque sino
        checkForNoContentAndSave(event);//cuando toco "Enter" (evento KEYPRESS), al sacar el enter el foco del elemento
                                        //se me termina ejecutando el BLUR; Para que no se ejecute el BLUR cuando el usuario
                                        //presiona "Enter" hago esta comparación.
    }
}


function checkForNoContentAndSave(event){ //Chequea que el nuevo contentido a guardar en el TASK sea != de "", después lo guarda en local-storage
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

