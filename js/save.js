


function saveAndRender() { //Guardo y Renderizo las Listas
    saveListsAndSelectedListId();
    renderLists();
}

function saveAndRenderTasks(selectedList) { //Guardo y Renderizo el Display y las Tasks de la lista-seleccionada
    saveListsAndSelectedListId();
    renderDisplay(selectedList);
}

function saveListsAndSelectedListId() { //Guardo en local-storage las listas y la lista selectada
    localStorage.setItem(LIST_KEY, JSON.stringify(lists)); //(KEY, VALUE)
    localStorage.setItem(SELECTED_LIST_ID_KEY, JSON.stringify(selectedListId)); //(KEY, VALUE)
}