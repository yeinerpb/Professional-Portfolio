// Variable global que almacena el idioma actual
let currentLanguage;

// Función que cambia el idioma actual
function changeLanguage (language) {
  currentLanguage = language;
  localStorage.setItem("selectedLanguage", language);
}

// Función que carga el archivo json correspondiente al idioma actual y reemplaza el contenido de los elementos HTML
function loadLanguage () {
  // Recuperamos el idioma seleccionado del almacenamiento local
  currentLanguage = localStorage.getItem("selectedLanguage");
  
  console.log("Cargando idioma...");
  // Usamos fetch para obtener el archivo json
  fetch (`/json/${currentLanguage}.json`)
    .then (response => response.json ()) // Convertimos la respuesta en un objeto json
    .then (data => { // Usamos los datos del json
      // Obtenemos todos los elementos HTML que tengan el atributo data-translate
      let elements = document.querySelectorAll ("[data-translate]");
      // Recorremos cada elemento
      for (let element of elements) {
        // Obtenemos la clave de traducción del atributo data-translate
        let key = element.dataset.translate;
        // Reemplazamos el contenido del elemento por el valor correspondiente del json
        element.innerHTML = data.translation [key];

        if (element.tagName === "INPUT" && element.placeholder) {
          element.placeholder = data.translation [key];
        }

        if (element.tagName === "INPUT" && element.type === "submit") {
          element.value = data.translation [key];
        }
      }
    })
    .catch (error => console.error (error)); // Manejamos posibles errores
}

// Agregamos un evento click a cada elemento de la clase flags-item
let flags = document.getElementsByClassName ("flags-item");
for (let flag of flags) {
  flag.addEventListener ("click", function () {
    // Obtenemos el idioma del atributo data-language
    let language = this.dataset.language;
    // Cambiamos el idioma actual
    changeLanguage (language);
    // Cargamos el idioma nuevo
    loadLanguage ();
  });
}

// Cargamos el idioma inicial al cargar la página
window.addEventListener ("load", loadLanguage);
