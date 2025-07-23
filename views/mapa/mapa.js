const areas = [
  { x: 262.5, y: 0, w: 75, h: 75, name: "Entrada", desc: "Punto de acceso principal al museo, donde comienza la experiencia cultural." },
  { x: 0, y: 75, w: 262.5, h: 150, name: "Área de dioses mitológicos", desc: "Colección de obras inspiradas en mitologías griega, romana y egipcia." },
  { x: 0, y: 225, w: 262.5, h: 150, name: "Área de pinturas de santos", desc: "Retratos y escenas de santos cristianos de los siglos XV-XVIII." },
  { x: 337.5, y: 75, w: 262.5, h: 150, name: "Área de pinturas del viejo testamento", desc: "Obras que representan historias bíblicas como el Arca de Noé y Moisés." },
  { x: 337.5, y: 225, w: 262.5, h: 150, name: "Área de fósiles", desc: "Exhibición de fósiles que muestran la evolución de la vida en la Tierra." },
  { x: 262.5, y: 75, w: 75, h: 300, name: "Pasillo", desc: "Pasillo que conecta las diferentes áreas del museo." },
  { x: 0, y: 375, w: 600, h: 75, name: "Área de objetos arqueológicos", desc: "Artefactos antiguos que revelan la historia de civilizaciones pasadas." }
];

let selectedArea = null;

function setup() {
  let canvas = createCanvas(600, 450);
  canvas.parent('sketch-holder');
  textSize(15); 
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  
  // Dibujar paredes del museo 
  stroke(0);
  strokeWeight(0.5); 
  noFill();
  rect(0, 0, 600, 450);

  // Dibujar cuartos y nombres dentro de las figuras
  stroke(0);
  strokeWeight(0.5); 
  for (let area of areas) {
    if (mouseX > area.x && mouseX < area.x + area.w && mouseY > area.y && mouseY < area.y + area.h) {
      fill(255, 195, 0, 150); // Resaltado amarillo semitransparente 
    } else {
      fill(173, 216, 230, 100); // Fondo azul semitransparente sin selección
    }
    rect(area.x, area.y, area.w, area.h);
    fill(0); // Texto negro
    text(area.name, area.x + area.w / 2, area.y + area.h / 2); // Nombre dentro de la figura
  }
}

// Detectar clic y actualizar descripción
function mousePressed() {
  
  for (let area of areas) {
    if (mouseX > area.x && mouseX < area.x + area.w && mouseY > area.y && mouseY < area.y + area.h) {
      selectedArea = area;
      updateDescription();
      break;
    }
  }
}

function updateDescription() {
  let descriptionElement = document.getElementById('area-description');
  if (selectedArea) {
    descriptionElement.innerText = `${selectedArea.name}: ${selectedArea.desc}`;
    descriptionElement.style.backgroundColor = '#ffc300';
    descriptionElement.style.color = '#000'; 
  } else {
    descriptionElement.innerText = "Haz clic en un área para ver su descripción";
    descriptionElement.style.backgroundColor = '#f8f9fa'; 
    descriptionElement.style.color = '#000';
  }

  // Actualizar descripciones generales
  let generalDescriptionElement = document.getElementById('general-description');
  let generalText = "";
  for (let area of areas) {
    generalText += `<p><strong>${area.name}:</strong> ${area.desc}</p>`;
  }
  generalDescriptionElement.innerHTML = generalText;
}
window.addEventListener('load', () => {
  updateDescription(); // ← esto hace que se muestre el texto inicial
});