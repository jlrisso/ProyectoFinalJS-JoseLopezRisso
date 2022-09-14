

/**
 * 
 * 
 * @Author: JOSE LOPEZ RISSO
 * Email: jal.risso@gmail.com
 * 
 * Content: Este archivo contiene lo relativo al local-storage.
 * Primero se definió un prefijo (PREFIX) y después con eso se generaron
 * las diferentes KEYs
 * 
 * 
 */



const LOCAL_STORAGE_PREFIX = 'ADVANCED_TASK_MANAGER'; //Se usa un PREFIX porque el local-storage es "site-dependent", 
                                                      //=> todos los sitios comparten el mismo espacio (ES PARA EVITAR PISAR LAS VARIABLES)


const LIST_KEY = `${LOCAL_STORAGE_PREFIX}-lists`;
const SELECTED_LIST_ID_KEY = `${LOCAL_STORAGE_PREFIX}-selectedListId`;




function loadLists() { // Cargo las listas del local-storage
    return JSON.parse(localStorage.getItem(LIST_KEY)) || [];
};


function loadSelectedListId() { //Cargo la lista selectada del local-storage
    return JSON.parse(localStorage.getItem(SELECTED_LIST_ID_KEY));
};

