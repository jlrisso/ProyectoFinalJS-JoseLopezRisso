
/**
 * 
 * 
 * @Author: JOSE LOPEZ RISSO
 * Email: jal.risso@gmail.com
 * 
 * Content: Este archivo contiene mi única clase llamada LISTA.
 * Al ser una clase, el nombre de este archivo .js empieza con 
 * mayúsculas. Para generar IDs únicos para cada Lista y para cada
 * Task, se utilizó el módulo "CRYPTO", el cual tiene un método
 * llamado "randomUUID", que justamente genera IDs únicos (UUID).
 * 
 * 
 */





class List { //Clase Lista
    constructor({id = crypto.randomUUID(), title, tasks=[]}) {  //Omitting an argument triggers the default value
        this.id = id;
        this.title = title;
        this.tasks = tasks;
    };

    createTask(taskName){ //Crea un nuevo task dentro de la list 
        return { id: crypto.randomUUID(), content: taskName, completed: false}
    };

    addTask(taskName) { //Agrega un nuevo task (luego de crearlo) dentro del Array de tareas de mi lista
        this.tasks.push(this.createTask(taskName));
    };

    static fromJSON(arrOfObjects){ //Me permite recuperar mi "Tipo de Objetos" de Clase Lista, luego de cargar el local-storage
        arrOfObjects.forEach((object, index) => {
           arrOfObjects[index] = new List (object); 
        });
    };

};







