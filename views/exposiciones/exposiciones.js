
const botoncito = document.getElementById("boton")
let animado = document.querySelectorAll(".card")


/*Este evento funciona de forma que cuando el usuario llegue al final de la página y desee regresar al principio solo da click en el botón amarillo*/
botoncito.addEventListener("click",() => {
window.scrollTo({top: 0,})
})


/*Este evento muestra el contenido en card a medida se hace scroll, genera un movimiento de abajo hacia arriba y su opacidad aumenta*/
function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop)
    for (var i=0; i<animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado -500< scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba")
        }
    }
}

window.addEventListener("scroll", mostrarScroll);



/*Este evento muestra las imagenes de las obras destacadas con un scroll animado, donde las imagenes varian de tamaño a media se scrollea hacia arriba o hacia abajo*/

let options = {
    threshold: [0.1,0.2,0.3]
}

let callback = (entries) => {
    entries.forEach((entry) => {
        entry.target.style.scale = entry.intersectionRatio;
    });
}

let observer = new IntersectionObserver(callback, options);
for(const target of document.querySelectorAll(".item")) {
    observer.observe(target);
}