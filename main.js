
    alert("¡Hola mundo!");
       
       let listaTareas = JSON.parse(localStorage.getItem("tareas")) || [];

        const nuevaTareaInput = document.getElementById("nuevaTarea");
        const agregarTareaBtn = document.getElementById("agregarTarea");
        const listaTareasElement = document.getElementById("listaTareas");

        
        function mostrarTareas() {
            listaTareasElement.innerHTML = "";
            listaTareas.forEach((tarea, index) => {
                const tareaElement = document.createElement("li");
                tareaElement.textContent = tarea.text;

               
                const eliminarBtn = document.createElement("button");
                eliminarBtn.textContent = "Eliminar";
                eliminarBtn.addEventListener("click", () => {
                    listaTareas.splice(index, 1);
                    guardarTareas();
                    mostrarTareas();
                });

                tareaElement.appendChild(eliminarBtn);
                listaTareasElement.appendChild(tareaElement);
            });
        }

        
        agregarTareaBtn.addEventListener("click", () => {
            const nuevaTarea = nuevaTareaInput.value;
            if (nuevaTarea.trim() !== "") {
                listaTareas.push({ text: nuevaTarea });
                guardarTareas();
                nuevaTareaInput.value = "";
                mostrarTareas();
            }
        });

        // Función para guardar la lista de tareas en localStorage
        function guardarTareas() {
            localStorage.setItem("tareas", JSON.stringify(listaTareas));
        }

    
        mostrarTareas();

      
