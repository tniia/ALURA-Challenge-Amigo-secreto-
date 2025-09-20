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

function mostrarAmigos(){
}
