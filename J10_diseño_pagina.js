// Seleccionamos todas las tarjetas que sean de cualquiera de las dos clases
const tarjetasVolteables = document.querySelectorAll('.P10_flip-card, .P10_2_flip-card');

// Iteramos sobre cada tarjeta para agregar eventos
tarjetasVolteables.forEach(tarjeta => {
    // Seleccionamos el contenedor interno de la tarjeta
    const tarjetaInterior = tarjeta.querySelector('.P10_flip-card-inner, .P10_2_flip-card-inner');

    tarjeta.addEventListener('mouseenter', () => {
        tarjetaInterior.style.transform = 'rotateY(180deg)';
    });

    tarjeta.addEventListener('mouseleave', () => {
        tarjetaInterior.style.transform = 'rotateY(0deg)';
    });
});
