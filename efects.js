document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".carrosel-container");
    setInterval(() => {
        container.appendChild(container.firstElementChild);
    }, 6000); 
});

