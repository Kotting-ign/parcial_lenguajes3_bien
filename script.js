document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valido = true;

    // apellido
    const apellido = document.getElementById('apellido');
    if (/\d/.test(apellido.value.trim()) || apellido.value.trim() === "") {
        apellido.classList.add('is-invalid');
        valido = false;
    } else {
        apellido.classList.remove('is-invalid');
    }

    // nombre
    const nombre = document.getElementById('nombre');
    if (/\d/.test(nombre.value.trim()) || nombre.value.trim() === "") {
        nombre.classList.add('is-invalid');
        valido = false;
    } else {
        nombre.classList.remove('is-invalid');
    }

    // DNI
    const dni = document.getElementById('dni');
const dniValor = dni.value.trim();
if (
    dniValor.length !== 8 ||
    isNaN(dniValor)
) {
    dni.classList.add('is-invalid');
    valido = false;
} else {
    dni.classList.remove('is-invalid');
}

    // fecha 
    const fecha = document.getElementById('fecha');
    const fechaValor = fecha.value;
    if (!fechaValor || new Date(fechaValor).getFullYear() <= 2006) {
        fecha.classList.add('is-invalid');
        valido = false;
    } else {
        fecha.classList.remove('is-invalid');
    }

    //validaciones
    const email = document.getElementById('email');
    const emailValue = email.value.trim();
    const atIndex = emailValue.indexOf('@');
    const dotIndex = emailValue.lastIndexOf('.');
    if (
        emailValue === "" ||
        atIndex < 1 ||
        dotIndex < atIndex + 2 ||
        dotIndex === emailValue.length - 1
    ) {
        email.classList.add('is-invalid');
        valido = false;
    } else {
        email.classList.remove('is-invalid');
    }

    if (valido) {
        alert('¡su formalario es valido y ya a sido enviado!');
    }
});

// Botón de preguntas progresivas
document.getElementById('preguntasBtn').addEventListener('click', function() {
    const respuestas = [];
    const preguntas = [
        "¿Cual es tu nacionalidad?",
        "¿Cual es tu color favorito?",
        "¿Como se llama tu mascota?"
    ];
    for (let i = 0; i < preguntas.length; i++) {
        let respuesta = prompt(preguntas[i]);
        if (respuesta === null) respuesta = "";
        respuestas.push(respuesta.trim().replaceAll('-', ''));
    }
    document.getElementById('respuestas').value = respuestas.join('-');
});
