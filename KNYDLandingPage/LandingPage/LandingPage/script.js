// Detectar cuando se carga la página completamente
window.addEventListener("load", (event) => {

    console.log("page is fully loaded");

    // Agregar un evento de desplazamiento (scroll)
    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");

        // Verificar si se ha desplazado más allá de cierta cantidad de píxeles
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
