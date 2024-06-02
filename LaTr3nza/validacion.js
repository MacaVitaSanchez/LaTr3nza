function validarEnviar(){
    parrafo = document.getElementById("error")

    if(document.formulario.name.value.length <= 2){
        // alert("Ingrese un nombre correcto.")
        document.formulario.nombre.focus()
        parrafo.style.color = "red"
        parrafo.innerHTML = "Nombre incorrecto."
        return
    }
 
    let edadEntera = parseInt(document.formulario.edad.value)
    if(isNaN(edadEntera)){
        // alert("Tiene que ingresar un número valido en la edad.")
        document.formulario.edad.focus()
        parrafo.style.color = "red"
        parrafo.innerHTML = "Edad incorrecta."
        return
    }
    else{
        if(edadEntera < 18 || edadEntera > 65){
            // alert("Tiene que ser mayor de edad o tener menos de 65 años.")
            document.formulario.edad.focus()
            parrafo.style.color = "red"
            parrafo.innerHTML = "Edad incorrecta, ingrese un valor entre 18 y 65."
            return 
        }
    }
    // ANALIZO EL DNI
    let DNIentero = parseInt(document.formulario.dni.value)
    if(isNaN(DNIentero)){
        // alert("Tiene que ingresar un número valido en el DNI.")
        document.formulario.dni.focus()
        parrafo.style.color = "red"
        parrafo.innerHTML = "DNI incorrecto, no es un numero."
        return
    }
    else{
        if(document.formulario.dni.value.length != 8){
            // alert("El dni tiene que tener 8 numeros.")
            document.formulario.dni.focus()
            parrafo.style.color = "red"
            parrafo.innerHTML = "DNI incorrecto."
            return 
        }
    }
    // ANALIZO SI SELECCIONÓ DE FORMA CORRECTA
    if(document.formulario.interes.selectedIndex == 0){
        // alert("Debe seleccionar un motivo de su contacto.")
        document.formulario.interes.focus()
        parrafo.style.color = "red"
        parrafo.innerHTML = "Seleccion incorrecta."
        return 
    }

    if(isNaN(document.formulario.fecha.valueAsNumber)){
        parrafo.style.color = "red"
        document.formulario.fecha.focus()
        parrafo.innerHTML = "Fecha no seleccionada"
        return 
    } else{
        if(document.formulario.fecha.valueAsNumber <= 1716249600000){
            parrafo.style.color = "red"
            document.formulario.fecha.focus()
            parrafo.innerHTML = "La fecha debe ser de hoy para adelante"
            return 
        }
    }
    parrafo.style.color = "green"
    parrafo.innerHTML = "Gracias por completar el formulario!"
    document.formulario.submit()
}