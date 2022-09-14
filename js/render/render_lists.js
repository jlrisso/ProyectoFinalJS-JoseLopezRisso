


/**
 * 
 * 
 * @Author: JOSE LOPEZ RISSO
 * Email: jal.risso@gmail.com
 * 
 * Content: Este archivo contiene las funciones que renderizan las
 * listas y una función que renderiza el nombre de la lista 
 * seleccionada.
 * 
 * 
 */




 function showMyList(event) { //Muestra mi lista selectada cuando es clickeada
    if (event.target.tagName.toLowerCase() !== 'li') return;
    selectedListId = event.target.dataset.listId
    saveAndRender();
}



//UTILITY
function clearContainer(container) { //Limpia el contenedor que le paso como argumento
    container.innerHTML = '';
}



function renderLists() { //Renderiza las listas

    clearContainer(listsContainer); //Remover
    lists.forEach(renderList);

    if (!selectedListId) listDisplayContainer.style.display = 'none'
    else {
        renderDisplay(renderListTitle(selectedListId));
    }
};



function renderList(list) { //Renderiza una lista

    const listTemplateCopy = listTemplate.content.cloneNode(true); //True to clone children
    const listElement = listTemplateCopy.querySelector('.list-name');

    ({
        id: listElement.dataset.listId,
        title: listElement.innerText,
    } = list);

    if (list.id === selectedListId) listElement.classList.add('active-list');
    listsContainer.append(listTemplateCopy);
}



function renderListTitle(listId) { //Renderiza el nombre de la lista, en base a un id que le paso
    //Title
    const selectedList = lists.find(list => list.id === listId);
    listDisplayContainer.style.display = 'block';
    ({
        title: listTitle.innerHTML
    } = selectedList);

    return selectedList;
}












