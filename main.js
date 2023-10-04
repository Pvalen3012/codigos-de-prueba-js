

    alert("¡Hola mundo!");




function Task(description, completed) {
    this.description = description;
    this.completed = completed || false;
}


const taskList = [];


function addTask(description) {
    const newTask = new Task(description);
    taskList.push(newTask);
    console.log(`Tarea "${description}" agregada.`);
}


function showTaskList() {
    console.log("Lista de Tareas:");
    taskList.forEach((task, index) => {
        const status = task.completed ? "[x]" : "[ ]";
        console.log(`${index + 1}. ${status} ${task.description}`);
    });
}


function completeTask(index) {
    if (index >= 0 && index < taskList.length) {
        taskList[index].completed = true;
        console.log(`Tarea "${taskList[index].description}" marcada como completada.`);
    } else {
        console.log("Índice de tarea no válido.");
    }
}


function main() {
    console.log("Bienvenido al Simulador de Lista de Tareas!");

    while (true) {
        console.log("\nOpciones:");
        console.log("1. Agregar tarea");
        console.log("2. Mostrar lista de tareas");
        console.log("3. Marcar tarea como completada");
        console.log("4. Salir");

        const choice = prompt("Ingrese el número de la opción deseada:");

        switch (choice) {
            case "1":
                const taskDescription = prompt("Ingrese la descripción de la tarea:");
                addTask(taskDescription);
                break;
            case "2":
                showTaskList();
                break;
            case "3":
                const taskIndex = prompt("Ingrese el número de la tarea que desea marcar como completada:") - 1;
                completeTask(taskIndex);
                break;
            case "4":
                console.log("Gracias por usar el Simulador de Lista de Tareas. ¡Hasta luego!");
                return;
            default:
                console.log("Opción no válida. Por favor, ingrese un número válido.");
        }
    }
}


main();
