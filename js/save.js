


function saveAndRender() { //Guarda y Renderiza nuevamente las Listas
    saveListsAndSelectedListId();
    renderLists();
}

function saveAndRenderTasks(selectedList) { //Guarda y Renderiza nuevamente el Display y las Tasks
    saveListsAndSelectedListId();
    renderDisplay(selectedList);
}

function saveListsAndSelectedListId() { //Guardar en el local-storage las listas y la lista selectada
    localStorage.setItem(LIST_KEY, JSON.stringify(lists)); //(KEY, VALUE)
    localStorage.setItem(SELECTED_LIST_ID_KEY, JSON.stringify(selectedListId)); //(KEY, VALUE)
}