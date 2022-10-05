const tarea = document.querySelector('#tarea')
const prioridad = document.querySelector('#prioridad')
const email = document.querySelector('#email')
const tareasContainer = document.querySelector('.tareas-container')
const form = document.querySelector('#form')

function Listener(){
    form.addEventListener('submit', capturarDatos)
}
Listener()//Llamamos a la funcion principal
function capturarDatos(event){
    event.preventDefault()
    console.log(tarea.value),
    console.log(prioridad.value)
    console.log(email.value)
}
