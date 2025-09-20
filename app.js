// Arreglo que almacena el numero de amigos
let amigos = [];

// implemento la funcion para agregar amigos
function agregarAmigo() {
    // 1. Capturar el valor del campo de entrada
    let campoEntrada = document.getElementById("amigo");
    let nombreAmigo = campoEntrada.value.trim(); // Obtener el valor y eliminar espacios
    
    // 2. Validar la entrada
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; // Salir de la función si está vacío
    }
    
    // 3. Actualizar el array de amigos
    amigos.push(nombreAmigo);
    
    // 4. Limpiar el campo de entrada
    campoEntrada.value = "";
    
    // 5. Actualizar la visualización de la lista
    mostrarAmigos();
}

function mostrarAmigos() {
    // 1. Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");
    
    // 2. Limpiar la lista actual
    lista.innerHTML = "";
    
    // 3. Recorrer el array de amigos y crear elementos li
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigos[i];
        lista.appendChild(itemLista);
    }
}

function sortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agregue al menos un amigo.");
        return;
    }
    // 2. Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // 3. Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    
    // 4. Mostrar el resultado
    let elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
}
