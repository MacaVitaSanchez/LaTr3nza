function validarEnviar(){
    parrafo = document.getElementById("error")

    if(document.form.name.value.length <= 2){
        // alert("Ingrese un nombre correcto.")
        document.form.name.focus()
        parrafo.style.color = "red"
        parrafo.innerHTML = "Nombre incorrecto."
        return
    }

    if (!(document.form.correo.value.includes("@"&&".com"))){
        // alert("Ingrese una direccion de mail correcto.")
        document.form.correo.focus()
        parrafo.style.color = "red"
        parrafo.innerHTML = "E-mail incorrecto."
        return
    }

    let tel = parseInt(document.form.telefono.value)
    if(isNaN(tel)){
        // alert("Tiene que ingresar un número valido en el DNI.")
        document.form.telefono.focus()
        parrafo.style.color = "red"
        parrafo.innerHTML = "Telefono incorrecto, no es un numero."
        return
    }

    if(document.form.mensaje.value.length <= 2){
        // alert("Ingrese un nombre correcto.")
        document.form.mensaje.focus()
        parrafo.style.color = "red"
        parrafo.innerHTML = "Ingrese un mensaje por favor"
        return
    }

    if(document.form.opcion.selectedIndex == 0){
        // alert("Debe seleccionar un motivo de su contacto.")
        document.form.opcion.focus()
        parrafo.style.color = "red"
        parrafo.innerHTML = "Seleccion incorrecta."
        return 
    }

    parrafo.style.color = "green"
    parrafo.innerHTML = "Gracias por completar el formulario!"
    document.formu.submit()
}
