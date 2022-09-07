


/**
 * 
 * 
 * @Author: JOSE LOPEZ RISSO
 * Email: jal.risso@gmail.com
 * 
 * Content: Este archivo contiene variables varias que se toman del DOM
 * 
 * 
 */



//DOM List Elements
const listsContainer= document.querySelector('[data-lists]'); //Mi contenedor de listas
const listTemplate= document.querySelector('#list-template'); //Mi template lista
const newListForm= document.querySelector('#new-list-form'); //Mi formulario lista
const newListInput= document.querySelector('#input-list'); //Mi input nueva lista



//DOM Task Elements
const tasksContainer= document.querySelector('.tasks'); //Mi contenedor de tasks
const taskTemplate= document.querySelector('#task-template'); //Mi template task
const newTaskForm= document.querySelector('#new-task-form'); //Mi formulario de task
const newTaskInput= document.querySelector('#input-task'); //Mi input nuevo task



//DOM Display Elements
const taskCount= document.querySelector('.task-count'); //Cantidad de tasks
const listDisplayContainer= document.querySelector('.todo-list'); //Mi display de cada lista
const listTitle= document.querySelector('.list-title'); //Mi titulo de lista



//Delete Buttons 
const deleteListButton= document.querySelector('#delete-list'); //Mi boton de borrar lista
const deleteCompletedTasksButton= document.querySelector('#delete-completed-tasks');//Mi boton de borrar tareas completadas (marcadas con el checkbox)


//Weather Icon 
const weatherIcon = document.querySelector('#weather-icon');







