// Lista de tareas
let tasks = JSON.parse(localStorage.getItem('task')) || [];

// Función para agregar tareas
export const addTask = (task) => {
const newTask = {
    id: Date.now(),
    text: task,
    completed: false,
};
task.push(newTask); 
localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Función parfa poder traer la lista de tareas
export const getTasks = () => tasks;