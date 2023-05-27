/*======= Dark Mode ========*/
let darkModeIcon = document.querySelector("#darkMode-icon");
let darkMode = localStorage.getItem("darkMode"); // obtener el estado del tema del almacenamiento local

if (darkMode === "true") {
    // si el tema es oscuro, aplicar las clases correspondientes
    darkModeIcon.classList.add("bx-sun");
    document.body.classList.add("dark-mode");
}

darkModeIcon.onclick = () => {
    // al hacer clic en el icono, cambiar el tema y guardar el estado
    darkModeIcon.classList.toggle("bx-sun");
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
        "darkMode",
        document.body.classList.contains("dark-mode")
    ); // guardar el estado del tema como un valor booleano
};