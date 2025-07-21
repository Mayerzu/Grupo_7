const boton0 = document.getElementById("btn0")
const boton1 = document.getElementById("btn1")
const boton2 = document.getElementById("btn2")
const boton3 = document.getElementById("btn3")
const boton4 = document.getElementById("btn4")
const botoN4 = document.getElementById("btnN4")
const boton5 = document.getElementById("btn5")
const boton6 = document.getElementById("btn6")
const boton7 = document.getElementById("btn7")
const boton8 = document.getElementById("btn8")
const boton9 = document.getElementById("btn9")
const boton10 = document.getElementById("btn10")

const texto = document.getElementById("texto")
const texto1 = document.getElementById("texto1")
const texto2 = document.getElementById("texto2")


const sections = document.querySelectorAll(".content1")


const botoncito = document.getElementById("boton")    


/*Este evento hace que cada que se haga click en un botón la información cambie dependiendo de lo que se solicita*/


boton0.addEventListener('click', () => {
    texto.textContent = "Para llegar a ser un artista reconocido y destacado es necesario el trabajo constante y los espacios para experimentar y retarse. Por eso desde el Museo se propone un programa integral y permanente que permita una formación continua y en escalada de los artistas, pasando por espacios de convivencia y aprendizaje como las residencias artísticas hasta los concursos, certámenes y subastas para aquellos profesionales más consagrados."
});
boton1.addEventListener('click', () => {
    texto.textContent = "Las residencias artísticas son becas de estudio y creación artística en el país y en el exterior.Envía tu carta de intenciones (máximo una pagina): puede ser una idea que quieres concretar en composiciones artísticas o la creación de obras que ya tienes conceptualizadas. Llena uno de los dos formularios, dependiendo si el proyecto es de artes plásticas o audiovisuales. Adjunta tu curriculum y breve reseña de trabajos anteriores.";
});

boton2.addEventListener('click', () => {
    texto.textContent = "Con este programa queremos retar a artistas de diferentes disciplinas a que nos presenten sus creaciones, que se vean en la obligación de presentar su trabajo ante un jurado cualificado y que se sometan a la crítica constructiva para mejorar y aprender durante el proceso. Además, es una manera de valorar y reconocer la excelencia y destacar aquellas propuestas merecedoras de ello.";
});
boton3.addEventListener('click', () => {
    texto.textContent = "SUMARTE es un programa del Museo de Arte de El Salvador dirigido por un Comité independiente, que busca apoyar a los artistas y promover el coleccionismo nacional. Consiste en una selección, concurso, exposición y subasta de obras de artistas consagrados y nuevos talentos, que a su vez, sirve como plataforma de especialización para artistas jóvenes o emergentes a través del “Premio Único SUMARTE” y una Residencia artística al talento joven.";
});
botoN4.addEventListener('click', () => {
    texto1.textContent = "Con el objetivo de interactuar y generar un impacto en los y las visitantes, así como lograr que nuevas personas disfruten y se vinculen con el museo, surge el programa público del Museo PRISMA.";
});
boton4.addEventListener('click', () => {
    texto1.textContent = "En el museo buscamos abrir espacios para todas las disciplinas artísticas. Creemos que la música y su dialogo con las otras disciplinas crea una experiencia multisensorial para el publico. Por eso, cada lunes a las 7:30 p.m., entre los meses de marzo y octubre ofrecemos el espacio del Salón Ernesto Álvarez para conciertos de colectivos musicales del país. El costo de la entrada está destinado al pago de los músicos. Además, te permite la entrada a las salas del Museo desde las 6:00 p.m.";
});
boton5.addEventListener('click', () => {
    texto1.textContent = "El programa de mediación cultural del PRISMA es una iniciativa fundamental que busca acercar el arte a diversos públicos, promoviendo el entendimiento y la apreciación del patrimonio artístico y cultural para todas las comunidades que nos visitan. Su impacto ha sido significativo en la comunidad salvadoreña ya que desde la reapertura del museo, después del cierre debido a la pandemia por COVID-19 en 2020, ha permitido que miles de personas tengan un acceso más directo y significativo al arte, contribuyendo a la educación cultural y al desarrollo personal de los participantes. Además, ha fortalecido los lazos entre el museo y la comunidad, creando un sentido de pertenencia y orgullo por el patrimonio cultural de El Salvador.";
});
boton6.addEventListener('click', () => {
    texto1.textContent = "En el Museo PRISMA buscamos abrir espacios para todas las disciplinas artísticas, proponiendo diferentes actividades que forman nuestra agenda y nos permiten crear una experiencia multisensorial para el público. Recibe todas nuestras novedades en nuestro canal de whatsapp: MUSEO PRISMA";
});
boton7.addEventListener('click', () => {
    texto2.textContent = "Buscamos establecer procesos de enseñanza y aprendizaje que amplíen las capacidades de percepción, diálogo y reflexión conjunta y constructiva en relación al arte y la experiencia artística a través de contenidos virtual y procesos de formación presenciales.";
});
boton8.addEventListener('click', () => {
    texto2.textContent = "En el museo buscamos abrir espacios para todas los asistentes al museo y así nació PRISMA en familia: los talleres de fin de semana que desarrolla el museo para toda público.";
});
boton9.addEventListener('click', () => {
    texto2.textContent = "La Cultura tiene un valor estratégico como eje transversal de desarrollo humano y es especialmente importante fomentarla en niños, niñas y jóvenes. Por eso desde el Museo PRISMA buscamos fortalecer los vínculos con los y las docentes. Estamos trabajando para ofrecer formación y contenidos a los y las docentes de El Salvador. Si quieres estar al tanto de nuestras novedades en educación te invitamos a dejarnos tus datos. Nos estaremos comunicando contigo de manera periódica para darte a conocer nuestras novedades y convocatorias para docentes.";
});
boton10.addEventListener('click', () => {
    texto2.textContent = "Desde los inicios del museo en el año 2003, hemos atendido a mas de 250,000 niños y niñas de centros escolares públicos y privados. Las visitas incluyen un recorrido por las exposiciones del museo y un taller artístico dirigido por especialistas.";
});



    /*Este evento hace que las imagenes hagan un efecto de deslizado hacia la izquierda cuando se scrollea hacian abajo*/

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;

            if ( top >= offset && top < offset + height ) {
                sec.classList.add('content1');
            } else{
                sec.classList.remove('content1');
            }
        });
        
    }


    
    
    /*Este evento funciona de forma que cuando el usuario llegue al final de la página y desee regresar al principio solo da click en el botón amarillo*/
    botoncito.addEventListener("click",() => {
    window.scrollTo({top: 0,})
    })