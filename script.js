async function buscarPokemon() {
    const name = document.getElementById('pokeName').value.toLowerCase();
    const contenedor = document.getElementById('resultado');
    
    if(!name) return alert("Escribe un nombre");

    try {
        // LLAMADA AL SERVIDOR (localhost)
        const response = await fetch(`http://localhost:3000/api/pokemon-price/${name}`);
        const data = await response.json();

        if(data.error) throw new Error(data.error);

        contenedor.innerHTML = `
            <div class="card">
                <img src="${data.foto}" alt="${data.nombre}">
                <h2>${data.nombre.toUpperCase()}</h2>
                <p><strong>Habilidad:</strong> ${data.habilidad}</p>
            </div>
        `;
    } catch (error) {
        contenedor.innerHTML = `<p style="color:red;">No se encontró ese Pokémon o el servidor está apagado.</p>`;
    }
}