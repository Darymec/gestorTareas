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

// Función para eliminar tarea
export const deleteTask = (id) => {
    tasks = tasks.filter ((task) => task.id !== parseInt(id));
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Función para actuaslizar una tarea
export const updateTask = (id) => {
    tasks = tasks.map((task) => {
            if(task.id === parseInt(id)) {
                    task.completed = !task.completed;
            }
            return task;
    });
    localStorage.setItem('task', JSON.stringify(tasks));
};