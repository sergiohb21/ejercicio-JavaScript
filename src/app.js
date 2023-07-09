// Selección de elementos
const botones = document.querySelectorAll('.colores input'); // Selección de todos los elementos input dentro de elementos con la clase "colores"
const valoresRgb = document.querySelectorAll('.rango-rgb'); // Selección de todos los elementos con la clase "rango-rgb"

// Función para cambiar el color de fondo
const cambiarColor = () => {
  let colorActual = `rgb(${botones[0].value},${botones[1].value},${botones[2].value})`; // Obtener los valores de los inputs y construir la cadena rgb
  document.body.style.backgroundColor = colorActual; // Establecer el color de fondo de la página
};

// Función para actualizar los valores mostrados
const actualizarValores = () => {
  valoresRgb[0].innerHTML = `# ${botones[0].value}`; // Actualizar el valor mostrado para el rango rojo
  valoresRgb[1].innerHTML = `# ${botones[1].value}`; // Actualizar el valor mostrado para el rango verde
  valoresRgb[2].innerHTML = `# ${botones[2].value}`; // Actualizar el valor mostrado para el rango azul
};

// Agregar listeners de eventos a los botones
botones.forEach((boton) => {
  boton.addEventListener('input', () => {
    cambiarColor(); // Llamar a la función cambiarColor cuando se active el evento "input" en cualquier botón
    actualizarValores(); // Llamar a la función actualizarValores cuando se active el evento "input" en cualquier botón
  });
});


cambiarColor();