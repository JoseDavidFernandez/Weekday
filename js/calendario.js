const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"); 

// Obtenemos una nueva fecha, año y mes en curso
let date = new Date(),          //Fecha Actual
currMonth = date.getMonth(),    //Mes Actual
currYear = date.getFullYear();  //Año Actual

// Almacenamos el nombre de todos los meses en el array
const months = ["Enero", 
                "Febrero", 
                "Marzo", 
                "Abril", 
                "Mayo", 
                "Junio", 
                "Julio", 
                "Agosto", 
                "Septiembre", 
                "Octubre", 
                "Noviembre", 
                "Diciembre"
                ];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // Obtenemos el primer día del mes
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // Obtenemos el ultimo fecha del mes
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // Obtenemos el último día del mes
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // Obtenemos la última fecha del mes anterior
    let liTag = "";

    // Creamos li del mes anterior últimos días
    for (let i = firstDayofMonth; i > 0; i--) { 
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    // Creamos li de todos los días del mes actual
    for (let i = 1; i <= lastDateofMonth; i++) {
        // Agregar clase activa a li si el día, mes y año actuales coinciden
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                    && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    // Creamos li de los primeros días del próximo mes
    for (let i = lastDayofMonth; i < 6; i++) { 
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }

    // Pasamos el mes y el año actual como texto de fecha actual
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();


