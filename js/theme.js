/*======= Dark Mode ========*/
let darkModeIcon = document.querySelector("#darkMode-icon");
let darkMode = localStorage.getItem("darkMode");

if (darkMode === "true") {
  darkModeIcon.classList.add("bx-sun");
  document.body.classList.add("dark-mode");
}

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "darkMode",
    document.body.classList.contains("dark-mode")
  );
};
