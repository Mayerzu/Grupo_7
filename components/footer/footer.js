document.addEventListener("DOMContentLoaded", () => {
  fetch("/components/footer/footer.html")
    .then(response => response.text())
        // "footer" es el nombre con el que se manda a llamar en otras paginas.
    .then(html => {
      document.getElementById("footer").innerHTML = html;

      // Cargar el CSS del footer dinámicamente.
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/components/footer/footer.css";
      document.head.appendChild(link);
    })
    .catch(error => console.error("Error al cargar footer:", error));
});
