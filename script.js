document.addEventListener("DOMContentLoaded", () => {
    const buttonToggle = document.getElementById("button-toggle");
    const menu = document.getElementById("menu");

    buttonToggle.addEventListener("click", () => {
        menu.classList.toggle("menu-aberto");
        menu.classList.toggle("menu-fechado");
    });
});