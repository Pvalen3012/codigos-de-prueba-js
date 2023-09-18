

    alert("¡Hola! Bienvenido.");



const numeroSecreto = Math.floor(Math.random(55) * 100) + 1;
        let intentos = 0;

        const input = document.getElementById("numeroInput");
        const boton = document.getElementById("adivinarBtn");
        const mensaje = document.getElementById("mensaje");

        boton.addEventListener("click", function () {
            const numeroAdivinado = parseInt(input.value);
            intentos++;

            if (numeroAdivinado === numeroSecreto) {
                mensaje.textContent = `¡Correcto! Lo adivinaste en ${intentos} intentos.`;
            } else if (numeroAdivinado < numeroSecreto) {
                mensaje.textContent = "El número es mayor. Sigue intentando.";
            } else {
                mensaje.textContent = "El número es menor. Sigue intentando.";
            }
        });