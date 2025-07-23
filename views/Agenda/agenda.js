// Espera a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const calendar = document.getElementById('calendar');
    const modal = document.getElementById('modal');
    const modalDate = document.getElementById('modal-date');
    const modalActivities = document.getElementById('modal-activities');
    const activityInput = document.getElementById('activity-input');
    const activityDesc = document.getElementById('activity-desc'); //para la descripción
    const addActivityBtn = document.getElementById('add-activity-btn');
    const activityList = document.getElementById('activity-list');
    const closeModal = document.querySelector('.close');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const currentMonthYear = document.getElementById('current-month-year');
    const yearFilter = document.getElementById('year-filter');

    // Variables globales
    let activities = JSON.parse(localStorage.getItem('activities')) || {};
    let currentDate = new Date(); // Fecha actual de la computadora

    // Inicializa el colapso del navbar
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        new bootstrap.Collapse(document.querySelector('#navbarNav'), {
            toggle: false
        });
    }

    // Genera el calendario
    function generateCalendar() {
        calendar.innerHTML = '';
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        const today = new Date(); // Fecha actual para comparar
        const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        currentMonthYear.textContent = `${monthNames[month]} ${year}`;

        // Días de la semana
        const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
        daysOfWeek.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.textContent = day;
            dayElement.style.fontWeight = 'bold';
            dayElement.style.backgroundColor = '#001d3d';
            dayElement.style.color = '#fff';
            calendar.appendChild(dayElement);
        });

        // Espacios vacíos
        for (let i = 0; i < firstDay; i++) {
            calendar.appendChild(document.createElement('div'));
        }

        // Días del mes
        for (let i = 1; i <= daysInMonth; i++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'day';
            dayElement.textContent = i;
            const dateKey = `${year}-${month + 1}-${i}`;
            if (activities[dateKey]) {
                dayElement.classList.add('has-activities');
            }
            // Resalta el día actual
            if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayElement.classList.add('current-day');
            }
            dayElement.addEventListener('click', () => showModal(i, month, year));
            calendar.appendChild(dayElement);
        }
    }

    // Llena el selector de años
    function populateYearFilter() {
        const currentYear = new Date().getFullYear();
        // Con 20 años antes y 20 años después del actual
        for (let i = currentYear - 20; i <= currentYear + 20; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            if (i === currentDate.getFullYear()) {
                option.selected = true;
            }
            yearFilter.appendChild(option);
        }
    }

    // Muestra el modal
    function showModal(day, month, year) {
        modal.style.display = 'block';
        const dateKey = `${year}-${month + 1}-${day}`;
        const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        modalDate.textContent = `Día ${day} de ${monthNames[month]} ${year}`;
        modalActivities.innerHTML = '';
        
        if (activities[dateKey]) {
            activities[dateKey].forEach(activity => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${activity.title}</strong>: ${activity.description}`;
                modalActivities.appendChild(li);
            });
        }
    }

    // Actualiza la lista de actividades
    function updateActivityList() {
        activityList.innerHTML = '';
        Object.keys(activities).forEach(dateKey => {
            const [year, month, day] = dateKey.split('-').map(Number);
            if (year === currentDate.getFullYear() && month === currentDate.getMonth() + 1) {
                activities[dateKey].forEach(activity => {
                    const li = document.createElement('li');
                    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
                    li.innerHTML = `<strong>Día ${day} de ${monthNames[month - 1]} ${year}</strong>: ${activity.title} - ${activity.description}`;
                    activityList.appendChild(li);
                });
            }
        });
    }

    // Agrega una actividad
    addActivityBtn.addEventListener('click', () => {
        const dateStr = modalDate.textContent.match(/Día (\d+) de (\w+) (\d+)/);
        const day = dateStr[1];
        const monthName = dateStr[2];
        const year = dateStr[3];
        const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const month = monthNames.indexOf(monthName);
        const dateKey = `${year}-${month + 1}-${day}`;
        const title = activityInput.value.trim();
        const description = activityDesc.value.trim();
        
        if (title && description) {
            if (!activities[dateKey]) {
                activities[dateKey] = [];
            }
            activities[dateKey].push({ title, description });
            localStorage.setItem('activities', JSON.stringify(activities));
            activityInput.value = '';
            activityDesc.value = '';
            showModal(day, month, year);
            generateCalendar();
            updateActivityList();
        }
    });

    // Cierra el modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cierra el modal al hacer clic fuera
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Navega al mes anterior
    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar();
        updateActivityList();
    });

    // Navega al mes siguiente
    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar();
        updateActivityList();
    });

    // Cambia el año
    yearFilter.addEventListener('change', (event) => {
        currentDate.setFullYear(parseInt(event.target.value));
        generateCalendar();
        updateActivityList();
    });

    // Inicializa la página
    populateYearFilter();
    generateCalendar();
    updateActivityList();
});