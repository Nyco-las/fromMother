document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".carrosel-container");
    setInterval(() => {
        container.appendChild(container.firstElementChild);
    }, 6000); // Alterna a cada 6 segundos
});