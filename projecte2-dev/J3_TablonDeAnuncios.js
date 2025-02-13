document.getElementById('P3_form').addEventListener('submit', function(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const fecha = document.getElementById('fecha').value;
    const descripcion = document.getElementById('descripcion').value;

    const post = document.createElement('div');
    post.className = 'P3_post';
    post.innerHTML = `
        <h2>${titulo}</h2>
        <p>Fecha de lanzamiento: ${fecha}</p>
        <p>${descripcion}</p>
    `;

    document.querySelector('.P3_board').appendChild(post);

    document.getElementById('P3_form').reset();
});