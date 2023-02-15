let tareas = [
    {
        id: 1,
        descripcion: "Hacer Mercado",
        completado: true
    },
    {
        id: 2,
        descripcion: "Estudiar para la prueba",
        completado: false
    },
    {
        id: 3,
        descripcion: "Sacar a pasear a Tobby",
        completado: false
    }
];
const inputAgregar = document.querySelector("#inputAgregar");
const botonAgregar = document.querySelector("#btnAgregar");
const spanTareasTotales = document.querySelector("#tareasTotales");
const spanTareasRealizadas = document.querySelector("#tareasRealizadas");
const divTareas = document.querySelector("#tareas");

let nuevoId = 4;
renderTareas();


botonAgregar.addEventListener("click", function () {

    crearTarea();

    renderTareas();

});

function crearTarea() {
    let nuevaTarea = inputAgregar.value;

    tareas.push({
        id: nuevoId,
        descripcion: nuevaTarea,
        completado: false
    });

    nuevoId ++;
}

function renderTareas() {
    let html = "";

    tareas.forEach(function(tarea){
        let checkboxChequeado = "";
        
        if (tarea.completado) {
            checkboxChequeado = "checked";
        }

        let template = `
            <div style="width:10%">${tarea.id}</div>
            <div style="width:70%">${tarea.descripcion}</div>
            <div style="width:10%">
                <input type="checkbox" id="completado-${tarea.id}" ${checkboxChequeado} 
                onchange="actualizarTarea(${tarea.id})">
            </div>
            <div style="width:10%" class="mt-2">
                <button class="btn btn-danger">X</button>
            </div>
        `;

        html += template;
    })
    
    divTareas.innerHTML = html;
}

function actualizarTarea(id) {

    const indexTarea = tareas.findIndex(tarea => tarea.id == id);//1

    const completada = document.querySelector("#completado-" + id).checked;

    tareas[indexTarea].completado = completada;

    renderTareas();
    tareasTotales();
    tareasRealizadas();
}

function tareasTotales() {
    let total = tareas.length;
    spanTareasTotales.innerHTML = total;
}

function tareasRealizadas() {
    let tareasCompletadas = tareas.filter(tarea => tarea.completado);
    let realizadas = tareasCompletadas.length;
 
    spanTareasRealizadas.innerHTML = realizadas;
}

