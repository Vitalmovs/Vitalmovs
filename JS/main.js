document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
  
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    
    if (nombre && apellidos && telefono && email && mensaje) {
        alert("¡Formulario enviado correctamente!");
    } else {
        alert("Por favor, completa todos los campos.");
    }
    document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
        
    this.reset();
});
