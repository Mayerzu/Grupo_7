document.addEventListener("DOMContentLoaded", () => {
  fetch("/components/navbar/navbar.html")
    .then(response => response.text())
    // "navbar" es el nombre con el que se manda a llamar en otras paginas.
    .then(html => {
      document.getElementById("navbar").innerHTML = html;

      // Cargar el CSS del navbar dinámicamente.
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/components/navbar/navbar.css";
      document.head.appendChild(link);
    })
    .catch(error => console.error("Error al cargar navbar:", error));
});
