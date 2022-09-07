

/**
 * 
 * 
 * @Author: JOSE LOPEZ RISSO
 * Email: jal.risso@gmail.com
 * 
 * Content: Este archivo contiene funciones para borrar y/o eliminar información.
 * La función deleteMyList borra la Lista que está siendo mostrada en pantalla,
 * la que sería la "selectedList". Por otro lado, la función "deleteCompletedTasks"
 * elimina las tareas de mi lista actual que hayan sido selectadas 
 * (marcadas con la tilde del checkbox)
 * 
 */




function deleteMyList() { //Borra mi lista actual
    Swal.fire({
        title: 'Estás seguro?',
        text: "Esta operación no se puede deshacer!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
        if (result.isConfirmed) {
            //Si la respuestas es OK => Eliminamos la lista
            lists = lists.filter(list => list.id !== selectedListId);
            selectedListId = null;
            saveAndRender();

            Swal.fire({
                title: 'Lista eliminada!',
                icon: 'success',
                showConfirmButton: false,
                timer: 2500,
                toast: true,
                position:'bottom-right',
            })
        }
    })
}



function deleteCompletedTasks() {  //Borra mis tareas completas
    const selectedList = lists.find(list => list.id === selectedListId);
    selectedList.tasks = selectedList.tasks.filter(task => !task.completed)
    saveAndRenderTasks(selectedList)
}






