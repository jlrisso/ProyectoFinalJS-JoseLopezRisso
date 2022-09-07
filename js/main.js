/**
 * 
 * 
 * @Author: JOSE LOPEZ RISSO
 * Email: jal.risso@gmail.com
 * Date: 17-08-2022
 * License: 
 * Version: 
 * 
 */


'use strict';





/*  
 * COMIENZO DEL MAIN  
 */


let lists = loadLists();
List.fromJSON(lists);


let selectedListId = loadSelectedListId();

renderLists();

newListForm.addEventListener('submit', createNewList);
listsContainer.addEventListener('click', showMyList);
deleteListButton.addEventListener('click', deleteMyList);
deleteCompletedTasksButton.addEventListener('click', deleteCompletedTasks)
newTaskForm.addEventListener('submit', createNewTask);
tasksContainer.addEventListener('click', changeTask);



/* 
 * FIN DEL MAIN 
 */






//Funciones
function showMyList(event) { //Muestra mi lista selectada
    if (event.target.tagName.toLowerCase() !== 'li') return;
    selectedListId = event.target.dataset.listId
    saveAndRender();
}


function clearContainer(container) { //Limpia mi contenedor
    container.innerHTML = '';
}







/*

VER LO DE CLONE (TRUE)


TOASTIFY


ARREGLAR EL MARGIN DE LA LISTA DE TAREAS, PARA QUE NO TOQUE EL FINAL DE PAGINA







/*if((event?.keyCode===13 || event?.type==='blur') && event.target.textContent) {
        console.log("Entro");
        event.target.contentEditable=false;
        const selectedList = lists.find(list => list.id === selectedListId);
        const selectedTask = selectedList.tasks.find(task => task.id === event.target.id);
        event.target.classList.remove('highlight');
        /*if(!event.target.textContent) {
            event.target.textContent = selectedTask.content;
            return;
        }
        selectedTask.content = event.target.textContent;
        saveAndRenderTasks(selectedList);
    }




*/




 /*event.target.contentEditable = false;
        const selectedList = lists.find(list => list.id === selectedListId);
        const selectedTask = selectedList.tasks.find(task => task.id === event.target.id);
        event.target.classList.remove('highlight');
        if (!event.target.textContent) {
            event.target.textContent = selectedTask.content;
            return;
        }
        selectedTask.content = event.target.textContent;*/
        //saveAndRenderTasks(selectedList);

