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


let lists = loadLists(); //cargar listas
List.fromJSON(lists);    //convertirlas a mi clase "List"


let selectedListId = loadSelectedListId(); //cargar Id de lista sleccionada

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
function clearContainer(container) { //Limpia mi contenedor
    container.innerHTML = '';
}




/*
TOASTIFY
*/
