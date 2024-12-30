document.getElementById('btnAgregar').addEventListener('click', function () {
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = `Tarea ${document.querySelectorAll('#listaTareas li').length + 1}`;
    document.getElementById('listaTareas').appendChild(nuevaTarea);
});

document.getElementById('miFormulario').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Formulario enviado');
});
