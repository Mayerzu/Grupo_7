document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".fade-in");
  const slideInElements = document.querySelectorAll(".slide-in");

  fadeInElements.forEach(el => {
    el.classList.add("show");
  });

  slideInElements.forEach(el => {
    el.classList.add("slide");
  });
});
