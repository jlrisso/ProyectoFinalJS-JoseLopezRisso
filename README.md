



ACERCA DEL PROYECTO
___________________

El proyecto web que presento consiste en un "Gestor de Tareas" que, básicamente, posibilita
la creación de múltiples listas, dentro de las cuales se pueden crear diferentes tareas.
Así por ejemplo se puede crear una lista que se llame "Trabajo",
y dentro de la misma definir tareas específicas relacionadas con la actividad laboral.



ESTRUCTURA DEL PROYECTO


El proyecto consiste en una única página (html), dentro de la cual tenemos 
tres secciones definidas:

1) Sección para crear una lista.
2) Sección para crear las tareas específicas para cada lista.
3) Un widget que muestra información del clima, junto con la fecha actual.


DETALLES DE LA ESTRUCTURA


1) Esta sección, que aparece al costado izquierdo de la página, permite al usuario crear
diferentes listas de tareas. Una vez creada una lista, la misma se hace accesible y se 
le pueden agregar tareas. 

2) Esta sección --que aparece al medio de la página-- muestra la lista de tareas seleccionada
por el usuario. Si la lista no tiene tareas se muestra vacía. Caso contrario, la lista muestra
las tareas que hayan sido agregadas por el usuario, y en la parte inferior, aparece un campo
que posibilita la creación de nuevas tareas para esa lista que se está mostrando. Cada lista
tiene un contador de tareas dinámico (un número de tareas pendientes) que se va actualizando 
conforme a la marcación o no del checkbox que tiene cada tarea. Por otro lado, cada tarea 
tiene al costado derecho un botón que permite la edición de la misma. Los cambios de la tarea editada
se guardan tanto con la tecla enter como así también quitándole el foco al elemento. Finalmente,
en la parte más baja de esta sección tenemos dos botones:

A) Un botón para eliminar las tareas completas de la lista que se está mostrando. Este botón
borra todas las tareas que tengan su checkbox marcado.

B) Otro botón que permite eliminar completamente la lista que se está mostrando. 

3) Esta sección, que figura al costado derecho, muestra información del clima, en base a la ciudad
donde uno se encuentre (geo-localización), junto con la fecha.




TECNOLOGIAS APLICADAS Y/O UTILIZADAS
******************************************

Para la construcción de este proyecto se utilizó una amplia variedad de conceptos,
la mayoría vistos durante el cursado. Por nombrar algunos:

01) Utilización de Clases: se definió una Clase (llamada Lista), con su respectivo constructor y métodos.
02) Conceptos avanzados de Arrays.
03) Conceptos avanzados de Objetos.
04) Funciones.
05) Local-Storage. En el caso de este proyecto cuando se actualiza la página, el sitio muestra la última lista seleccionada
por el usuario, así como también mantiene todos los cambios en las tareas individuales (checkboxs que fueran marcados),
06) Eventos: Event Delegation.
07) Librerías: se utilizó Toastify, Sweet Alert y Axios. 
08) Se implementó un sistema de IDs únicos para cada lista y para cada tarea, a través del módulo CRYPTO.
09) Se aplicaron conceptos de API (con API KEY).
10) Se aplicaron conceptos de Asyn & Await.
11) Se implementó Try & Catch.
12) Operadores avanzados.
12) Se utilizó GIT.





-------------------------------------------------------------
@JOSE LOPEZ RISSO - 2022







