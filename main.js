document.addEventListener("DOMContentLoaded", () => {
  console.log("main.js loaded"); 

  // Animaciones
  const fadeInElements = document.querySelectorAll(".fade-in");
  const slideInElements = document.querySelectorAll(".slide-in");

  fadeInElements.forEach(el => el.classList.add("show"));
  slideInElements.forEach(el => el.classList.add("slide"));

  // Card 
  const exhibitions = [
    {
      title: "Pinturas de santos",
      description: "Explora el arte inspirado en figuras religiosas y santos.",
      image: "/assets/images/colecciones/card-santos/La Virgen de la leche con san Bernardo de Claraval y san Benito.jpg"
    },
    {
      title: "Pinturas del Antiguo Testamento",
      description: "Descubre obras basadas en historias bíblicas.",
      image: "/assets/images/colecciones/card-antiguo-testamento/Caín (o Melquisedec) presentando ofrenda. Pintura mural de la ermita de la Vera Cruz de Maderuelo.jpg"
    },
    {
      title: "Pinturas de dioses mitológicos",
      description: "Sumérgete en la mitología a través del arte.",
      image: "/assets/images/colecciones/card-dioses-mitologicos/Bodas de Psiquis y Cupido.jpg"
    },
    {
      title: "Objetos arqueológicos",
      description: "Conoce artefactos del pasado histórico.",
      image: "/assets/images/general/Objetos-arqueologicos.png"
    }
  ];

  // Card con animacion
  const cardGrid = document.getElementById("cardGrid");
  exhibitions.forEach((exhibition, index) => {
    const card = document.createElement("div");
    card.className = "col-lg-3 col-md-6 col-sm-12 mb-4";
    card.innerHTML = `
      <div class="card card-animate" style="animation-delay: ${index * 0.2}s">
        <div class="card-img-wrapper">
          <img src="${exhibition.image}" class="card-img-top" alt="${exhibition.title}">
        </div>
        <div class="card-body">
          <h3 class="card-title">${exhibition.title}</h3>
          <p class="card-text">${exhibition.description}</p>
        </div>
      </div>
    `;
    cardGrid.appendChild(card);
   
    setTimeout(() => card.querySelector(".card-animate").classList.add("show"), 100);
  });

  // Carousel 
  const carouselImages = [
    "/assets/images/colecciones/card-antiguo-testamento/La Creación.jpg",
    "/assets/images/colecciones/card-dioses-mitologicos/La bacanal de los andrios.jpg",
    "/assets/images/colecciones/card-santos/La Virgen de la leche con san Bernardo de Claraval y san Benito.jpg",
    "/assets/images/colecciones/carrusel/La-crucifixión-Flandes.png"
  ];

  // Create carousel  con imagenes
  const carousel = document.getElementById("carousel");
  carouselImages.forEach(image => {
    const imgWrapper = document.createElement("div");
    imgWrapper.className = "carousel-img-wrapper";
    imgWrapper.innerHTML = `<img src="${image}" alt="Galería Museo Prisma">`;
    carousel.appendChild(imgWrapper);
  });

  // Carousel 
  let currentIndex = 0;
  const totalImages = carouselImages.length;
  let autoPlayInterval;

  function moveCarousel(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
      currentIndex = 0;
    }
    updateCarousel();
  }

  function updateCarousel() {
    const offset = -currentIndex * 100;
    console.log(`Moving carousel to index ${currentIndex}, offset ${offset}%`); // Debug log
    carousel.style.transform = `translateX(${offset}%)`;
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(() => moveCarousel(1), 5000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }


  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  prevBtn.addEventListener("click", () => moveCarousel(-1));
  nextBtn.addEventListener("click", () => moveCarousel(1));


  startAutoPlay();


  const carouselContainer = document.querySelector(".carousel-container");
  carouselContainer.addEventListener("mouseenter", stopAutoPlay);
  carouselContainer.addEventListener("mouseleave", startAutoPlay);
});