import { renderTasks } from "./ui";
import { addTask } from "./task";

document.addEventListener("DOMContentLoaded", () => {
    //Hacemos visible la Lista de Tareas
    renderTasks();

    //Agregar el evento para la función para agregar tareas
    document.getElementById("task-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const taskInput = document.getElementById("task-input");
        if(taskInput.value !== "") {
            //Agregamos la tarea
            addTask(taskInput.value);

            //Volvemos a cargar la lista de tareas
            renderTasks();

            //Limpiar el input
            document.getElementById("task-input").value = "";
        }
    });

});