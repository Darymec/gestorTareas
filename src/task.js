//lista de tareas
let tasks= JSON.parse(localStorage.getItem('tasks')) || [];

// Función para agregar tareas
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

//Funcion para poder traer la lista de tareas
export const getTasks = () => tasks;