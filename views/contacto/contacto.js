document.addEventListener("DOMContentLoaded", () => {
  // Efecto de volteo para las tarjetas
  const tarjetas = document.querySelectorAll(".tarjeta");
  tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener("click", () => {
      tarjeta.classList.toggle("flipped");
    });
  });
});