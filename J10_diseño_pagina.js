// Seleccionamos todas las tarjetas con la clase 'tarjeta-volteable
const tarjetasVolteables = document.querySelectorAll('.tarjeta-volteable');

// Iteramos sobre cada tarjeta para agregar los event listeners
tarjetasVolteables.forEach(tarjeta => {
    // Seleccionamos el contenedor interior de la tarjeta
    const tarjetaInterior = tarjeta.querySelector('.tarjeta-volteable-interior');
    
    // Evento cuando el ratón pasa sobre la tarjeta
    tarjeta.addEventListener('mouseenter', () => {
        // Se activa la rotación de la tarjeta al pasar el ratón
        tarjetaInterior.style.transform = 'rotateY(180deg)';
    });

    // Evento cuando el ratón sale de la tarjeta
    tarjeta.addEventListener('mouseleave', () => {
        // Se desactiva la rotación de la tarjeta al quitar el ratón
        tarjetaInterior.style.transform = 'rotateY(0deg)';
    });
});