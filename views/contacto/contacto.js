


//document.getElementById("btnTarjeta1").addEventListener("click", function () {
  //document.getElementById("tarjeta1").classList.toggle("flipped");
//});
// Selecciona todas las tarjetas con la clase "tarjeta"
const tarjetas = document.querySelectorAll(".tarjeta");

// Recorre cada tarjeta y le asigna el evento de clic
tarjetas.forEach((tarjeta) => {
  tarjeta.addEventListener("click", () => {
    tarjeta.classList.toggle("flipped");
  });
});
