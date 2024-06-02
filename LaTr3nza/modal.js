document.addEventListener("DOMContentLoaded", function() {
    // Obtén todas las imágenes del carrusel
    var images = document.querySelectorAll('.carousel-item img');

    // Obtén el modal
    var modal = document.getElementById('imageModal');

    // Obtén el elemento de la imagen dentro del modal
    var modalImg = document.getElementById("modalImage");

    // Recorre todas las imágenes del carrusel y añade un evento de clic a cada una
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            modal.style.display = "block"; // Muestra el modal
            modalImg.src = this.src; // Establece la imagen en el modal
        });
    });

    // Obtiene el elemento de cierre (x) del modal y agrega un evento de clic para cerrar el modal
    var closeBtn = document.querySelector(".close");
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none"; // Oculta el modal cuando se hace clic en el botón de cerrar
    });
});
