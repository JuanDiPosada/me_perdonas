const btnNo = document.getElementById("btnNo");
const btnSi = document.getElementById("btnSi");
const mensajeFinal = document.getElementById("mensajeFinal");
const imgDinamica = document.getElementById("imgDinamica");

// Lista de imágenes disponibles
const imagenes = [
  "assets/image1.png",
  "assets/image2.png",
  "assets/image3.png",
  "assets/image4.png",
];

function moverBoton(e) {
  if (e) e.preventDefault();

  // Cambiar imagen aleatoriamente
  const randomImg = imagenes[Math.floor(Math.random() * imagenes.length)];
  imgDinamica.src = randomImg;

  // Margen de seguridad para evitar bordes "imposibles"
  const padding = 50;
  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;

  const btnWidth = btnNo.offsetWidth;
  const btnHeight = btnNo.offsetHeight;

  // Aseguramos que el botón siempre sea visible y clickeable
  // Limitamos el rango para que no se pegue a las esquinas extremas
  const safeWidth = winWidth - btnWidth - padding * 2;
  const safeHeight = winHeight - btnHeight - padding * 2;

  // Si la pantalla es muy pequeña, ajustamos el padding
  const activePadding = safeWidth > 0 ? padding : 10;
  const finalSafeWidth = Math.max(winWidth - btnWidth - 20, 0);
  const finalSafeHeight = Math.max(winHeight - btnHeight - 20, 0);

  const randomX = Math.floor(Math.random() * finalSafeWidth) + 10;
  const randomY = Math.floor(Math.random() * finalSafeHeight) + 10;

  btnNo.style.position = "fixed";
  btnNo.style.left = `${randomX}px`;
  btnNo.style.top = `${randomY}px`;
}

// Interacción en PC
btnNo.addEventListener("mouseover", moverBoton);

// Interacción en Mobile
btnNo.addEventListener("touchstart", (e) => {
  moverBoton(e);
});

// Por seguridad
btnNo.addEventListener("click", (e) => {
  if (btnNo.style.position === "fixed") {
    moverBoton(e);
  }
});

btnSi.addEventListener("click", () => {
  mensajeFinal.classList.remove("hidden");
});
