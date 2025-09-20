# Amigo Secreto

Una aplicación web interactiva para realizar sorteos de amigo secreto de manera divertida y sencilla.

## Descripción

Esta aplicación permite a los usuarios crear una lista de amigos y realizar un sorteo aleatorio para determinar quién será el "amigo secreto". Es perfecta para organizar intercambios de regalos, eventos especiales o simplemente para añadir un elemento de sorpresa a cualquier reunión.

## Funcionalidades

### Gestión de Amigos
- **Agregar nombres**: Los usuarios pueden escribir nombres en un campo de texto y añadirlos a la lista
- **Validación inteligente**: El sistema verifica que no se ingresen nombres vacíos
- **Lista dinámica**: Los nombres se muestran automáticamente en una lista organizada

### Sorteo Aleatorio
- **Selección aleatoria**: Utiliza algoritmos de JavaScript para garantizar un sorteo justo
- **Validación previa**: Verifica que haya al menos un amigo antes de realizar el sorteo
- **Resultado destacado**: Muestra claramente el nombre del amigo secreto seleccionado

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño responsive y moderno
- **JavaScript**: Lógica de la aplicación y manipulación del DOM

## Estructura del Proyecto

```
challenge-amigo-secreto_esp-main/
├── index.html          # Página principal
├── style.css           # Estilos de la aplicación
├── app.js              # Lógica de JavaScript
├── assets/             # Recursos multimedia
└── README.md           # Este archivo
```

## Cómo Usar

1. **Agregar amigos**:
   - Escribe el nombre de un amigo en el campo de texto
   - Haz clic en el botón "Añadir"
   - Repite el proceso para todos los participantes

2. **Realizar sorteo**:
   - Una vez que tengas tu lista completa
   - Haz clic en "Sortear amigo"
   - El sistema seleccionará aleatoriamente un nombre

3. **Ver resultado**:
   - El amigo secreto aparecerá destacado en la pantalla
   - Puedes realizar nuevos sorteos cuando lo desees

## Instalación y Ejecución

1. Clona o descarga este repositorio
2. Abre el archivo `index.html` en tu navegador web
3. ¡Comienza a agregar amigos y sortear!

No se requiere instalación de dependencias ni configuración adicional.

## Características Técnicas

### Validaciones Implementadas
- Campo de entrada no puede estar vacío
- Verificación de espacios en blanco
- Validación antes del sorteo

### Algoritmo de Sorteo
```javascript
let indiceAleatorio = Math.floor(Math.random() * amigos.length);
```


## Contribuir

Este proyecto fue desarrollado como parte de un desafío de programación. 