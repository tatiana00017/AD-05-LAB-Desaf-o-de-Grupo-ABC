// Asignar el evento onclick a todos los elementos con la clase "display-1" y etiquetas h5
function arrClicks() {
  // Obtener todos los elementos con la clase "display-1"
  const displayElements = document.getElementsByClassName("display-1");

  // Obtener todos los elementos h5
  const h5Elements = document.getElementsByTagName("h5");

  // Obtener todos los elementos h3 con el nombre de la clase personalizado.
  const subtitleElements = document.getElementsByClassName("subtitle");

  // Asignar el evento onclick a cada elemento de la clase "display-1"
  for (let i = 0; i < displayElements.length; i++) {
    displayElements[i].onclick = function () {
      applyRandomColorToElement(displayElements[i]);
    };
  }

  // Asignar el evento onclick a cada elemento h5
  for (let i = 0; i < h5Elements.length; i++) {
    h5Elements[i].onclick = function () {
      applyRandomColorToElement(h5Elements[i]);
    };
  }

  // Asignar el evento onclick a cada elemento de la clase "Subtitle"
  for (let i = 0; i < subtitleElements.length; i++) {
    subtitleElements[i].onclick = function () {
      subtitleElements[i].style.color = "blue";
    };
  }
}

// Funcion que aplica un color aleatorio a un elemento
function applyRandomColorToElement(element) {
  // Lista de colores
  const colors = ["green", "blue", "red"];

  // Seleccionar un color aleatorio
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Aplicar el color al estilo del elemento
  element.style.color = randomColor;
}

// Obtener 1 - h3 para convertirlo a "red"
function subtitleToRed() {
  document.getElementById("subtitleRed").style.color = "red";
}

// Llamar a la funcion arrClicks cuando la página haya cargado
window.onload = arrClicks;
