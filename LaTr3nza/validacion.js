document.getElementById('contactForm').addEventListener('submit', function(event) {
    validarEnviar(event);
});

function validarEnviar(event) {
    const parrafo = document.getElementById("error");
    const form = document.getElementById('contactForm');
    let error = false;

    if (form.name.value.length <= 2) {
        form.name.focus();
        parrafo.style.color = "red";
        parrafo.innerHTML = "Nombre incorrecto.";
        error = true;
    } else if (!form.correo.value.includes("@") || !form.correo.value.includes(".com")) {
        form.correo.focus();
        parrafo.style.color = "red";
        parrafo.innerHTML = "E-mail incorrecto.";
        error = true;
    } else if (isNaN(parseInt(form.telefono.value))) {
        form.telefono.focus();
        parrafo.style.color = "red";
        parrafo.innerHTML = "Telefono incorrecto, no es un número.";
        error = true;
    } else if (form.mensaje.value.length <= 2) {
        form.mensaje.focus();
        parrafo.style.color = "red";
        parrafo.innerHTML = "Ingrese un mensaje por favor.";
        error = true;
    } else if (form.opcion.selectedIndex == 0) {
        form.opcion.focus();
        parrafo.style.color = "red";
        parrafo.innerHTML = "Seleccione un horario.";
        error = true;
    }

    if (error) {
        event.preventDefault();
    } else {
        parrafo.style.color = "green";
        parrafo.innerHTML = "Gracias por completar el formulario!";
    }
}
