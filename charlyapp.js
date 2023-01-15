    // Obtener referencia al botón
    var boton = document.getElementById("boton");

    // Añadir un escucha de evento al botón
    boton.addEventListener("click", function(){
      // Obtener referencia al título
      var titulo = document.getElementById("titulo");

      // Cambiar el contenido del título
      titulo.innerHTML = "Título cambiado culo";
    });