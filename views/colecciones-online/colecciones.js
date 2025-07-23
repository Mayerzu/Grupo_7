// Espera a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const addCardBtn = document.getElementById('add-card-btn');
    const cardsContainer = document.getElementById('cards-container');
    const categoryList = document.getElementById('category-list');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const sidebar = document.getElementById('sidebar');

    // Datos de obras de las categorías 
    const artworks = [
        // Pinturas religiosas (santos)
        { id: 1, category: 'santos', title: 'El evangelista San Marcos', description: 'Pintura al fresco', image: '/assets/images/colecciones/card-santos/El evangelista san Marcos y un ángel. Pintura mural de la ermita de la Vera Cruz de Maderuelo.jpg' },
        { id: 2, category: 'santos', title: 'Los evangelistas San Mateo y San Lucas', description: 'Pintura al fresco', image: '/assets/images/colecciones/card-santos/Los evangelistas san Mateo y san Lucas. Pintura mural de la ermita de la Vera Cruz de Maderuelo.jpg' },
        { id: 3, category: 'santos', title: 'Frontal de Solanllong', description: 'Temple sobre tabla, 1200-1210', image: '/assets/images/colecciones/card-santos/Frontal de Solanllong. Pantocrátor con el Tetramorfos.jpg' },
        { id: 4, category: 'santos', title: 'El Lavatorio', description: 'Pintura al fresco', image: '/assets/images/colecciones/card-santos/El Lavatorio.jpg' },
        { id: 5, category: 'santos', title: 'Retablo de San Cristóbal', description: 'Temple sobre tabla, finales siglo XIII', image: '/assets/images/colecciones/card-santos/Retablo de San Cristóbal.jpg' },
        { id: 6, category: 'santos', title: 'Retablo de la leyenda de Santa Lucía', description: 'Temple sobre tabla, 1357-1385', image: '/assets/images/colecciones/card-santos/Retablo de la leyenda de santa Lucía.jpg' },
        { id: 7, category: 'santos', title: 'Episodios de las vidas de la Magdalena y San Juan Bautista', description: 'Temple sobre tabla, 1359-1362', image: '/assets/images/colecciones/card-santos/Episodios de las vidas de la Magdalena y de san Juan Bautista.jpg' },
        { id: 8, category: 'santos', title: 'San Eloy en el taller de orfebrería', description: 'Dorado, témpera sobre tabla, hacia 1370', image: '/assets/images/colecciones/card-santos/San Eloy en el taller de orfebrería.jpg' },
        { id: 9, category: 'santos', title: 'San Eloy ante el rey Clotario', description: 'Dorado, témpera sobre tabla, hacia 1370', image: '/assets/images/colecciones/card-santos/San Eloy ante el rey Clotario.jpg' },
        { id: 10, category: 'santos', title: 'San Andrés negándose a adorar al ídolo', description: 'Temple sobre tabla, 1400', image: '/assets/images/colecciones/card-santos/San Andrés negándose a adorar al ídolo.jpg' },
        { id: 11, category: 'santos', title: 'La Virgen de la leche con San Bernardo y San Benito', description: 'Dorado, temple sobre tabla, 1400-1415', image: '/assets/images/colecciones/card-santos/La Virgen de la leche con san Bernardo de Claraval y san Benito.jpg' },
        // Antiguo Testamento
        { id: 12, category: 'antiguo', title: 'Caín (o Melquisedec) presentando ofrenda', description: 'Pintura al fresco', image: '/assets/images/colecciones/card-antiguo-testamento/Caín (o Melquisedec) presentando ofrenda. Pintura mural de la ermita de la Vera Cruz de Maderuelo.jpg' },
        { id: 13, category: 'antiguo', title: 'Abel presentando ofrendas', description: 'Pintura al fresco', image: '/assets/images/colecciones/card-antiguo-testamento/Abel presentando ofrendas. Pintura mural de la ermita de la Vera Cruz de Maderuelo.jpg' },
        { id: 14, category: 'antiguo', title: 'El Pecado Original', description: 'Pintura al fresco', image: '/assets/images/colecciones/card-antiguo-testamento/El Pecado Original. Pintura mural de la ermita de la Vera Cruz de Maderuelo.jpg' },
        { id: 15, category: 'antiguo', title: 'Creación de Adán', description: 'Pintura al fresco', image: '/assets/images/colecciones/card-antiguo-testamento/Creación de Adán. Pintura mural de la ermita de la Vera Cruz de Maderuelo.jpg' },
        { id: 16, category: 'antiguo', title: 'La Creación', description: 'Óleo sobre tabla, siglos XV-XVI', image: '/assets/images/colecciones/card-antiguo-testamento/La Creación.jpg' },
        { id: 17, category: 'antiguo', title: 'Retablo del arzobispo don Sancho de Rojas', description: 'Temple sobre tabla, 1415-1420', image: '/assets/images/colecciones/card-antiguo-testamento/Retablo del arzobispo don Sancho de Rojas.jpg' },
        // Dioses mitológicos
        { id: 18, category: 'mitologicos', title: 'Ofrenda a Venus', description: 'Óleo sobre lienzo, 1518', image: '/assets/images/colecciones/card-dioses-mitologicos/Ofrenda a Venus.jpg' },
        { id: 19, category: 'mitologicos', title: 'La bacanal de los andrios', description: 'Óleo sobre lienzo, 1523-1526', image: '/assets/images/colecciones/card-dioses-mitologicos/La bacanal de los andrios.jpg' },
        { id: 20, category: 'mitologicos', title: 'Leda y el cisne', description: 'Óleo sobre tabla, 1529-1550', image: '/assets/images/colecciones/card-dioses-mitologicos/Leda y el cisne.jpg' },
        { id: 21, category: 'mitologicos', title: 'Venus y un sátiro', description: 'Óleo sobre lienzo, último tercio siglo XVI', image: '/assets/images/colecciones/card-dioses-mitologicos/Venus y un sátiro.jpg' },
        { id: 22, category: 'mitologicos', title: 'La fragua de Vulcano', description: 'Óleo sobre lienzo, hacia 1577', image: '/assets/images/colecciones/card-dioses-mitologicos/La fragua de Vulcano.jpg' },
        { id: 23, category: 'mitologicos', title: 'Bodas de Psiquis y Cupido', description: 'Óleo sobre lienzo, después de 1574', image: '/assets/images/colecciones/card-dioses-mitologicos/Bodas de Psiquis y Cupido.jpg' }
    ];

    // Función para crear una card
    function createCard(artwork) {
        const col = document.createElement('div');
        col.className = 'col';

        const card = document.createElement('div');
        card.className = 'card new-card';
        card.innerHTML = `
            <img src="${artwork.image}" class="card-img-top" alt="${artwork.title}">
            <div class="card-title">${artwork.title}</div>
            <div class="card-content">${artwork.description}</div>
        `;

        col.appendChild(card);
        cardsContainer.appendChild(col);

        setTimeout(() => card.classList.remove('new-card'), 600);
    }

    // Cargar todas las obras inicialmente
    artworks.forEach(artwork => createCard(artwork));

    // Evento para cambiar categoría
    categoryList.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            categoryList.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            e.target.classList.add('active');

            const category = e.target.getAttribute('data-category');
            cardsContainer.innerHTML = '';
            const filteredArtworks = category === 'all' ? artworks : artworks.filter(a => a.category === category);
            filteredArtworks.forEach(artwork => createCard(artwork));

            
        }
    });

    // Evento para buscar
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        cardsContainer.innerHTML = '';
        const filteredArtworks = artworks.filter(a => a.title.toLowerCase().includes(query));
        filteredArtworks.forEach(artwork => createCard(artwork));
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchBtn.click();
    });

    // Agregar nueva obra 
    addCardBtn.addEventListener('click', () => {
        const newId = Date.now();
        const newArtwork = {
            id: newId,
            category: ['santos', 'antiguo', 'mitologicos'][Math.floor(Math.random() * 3)],
            title: `Obra ${newId}`,
            description: 'Descripción generada',
            image: `assets/images/colecciones/obra-${newId}.jpg`
        };
        artworks.push(newArtwork);
        createCard(newArtwork);
        cardsContainer.style.opacity = 0;
        setTimeout(() => cardsContainer.style.opacity = 1, 10);
    });
});