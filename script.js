document.addEventListener("DOMContentLoaded", () => {
    const buttonToggle = document.getElementById("button-toggle");
    const menu = document.getElementById("menu");

    buttonToggle.addEventListener("click", () => {
        menu.classList.toggle("menu-aberto");
        menu.classList.toggle("menu-fechado");
    });
});

function lerTexto() {
  const texto = document.querySelector(".conteudo-artigo").innerText;

  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = "pt-BR";
  fala.rate = 1;
  fala.pitch = 1;

  speechSynthesis.cancel(); 
  speechSynthesis.speak(fala);
}

function pararLeitura() {
  speechSynthesis.cancel();
}
