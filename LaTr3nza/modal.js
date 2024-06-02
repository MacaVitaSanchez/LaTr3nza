document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.carousel-item img');

    var modal = document.getElementById('imageModal');

    var modalImg = document.getElementById("modalImage");

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            modal.style.display = "block"; 
            modalImg.src = this.src; 
        });
    });

    var closeBtn = document.querySelector(".close");
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none"; 
    });
});
