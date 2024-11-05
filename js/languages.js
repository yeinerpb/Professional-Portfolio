let currentLanguage;

function changeLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("selectedLanguage", language);
}

function loadLanguage() {
  currentLanguage = localStorage.getItem("selectedLanguage");

  console.log("Cargando idioma...");
  fetch(`/json/${currentLanguage}.json`)
    .then((response) => response.json())
    .then((data) => {
      let elements = document.querySelectorAll("[data-translate]");
      for (let element of elements) {
        let key = element.dataset.translate;
        element.innerHTML = data.translation[key];

        if (element.tagName === "INPUT" && element.placeholder) {
          element.placeholder = data.translation[key];
        }

        if (element.tagName === "INPUT" && element.type === "submit") {
          element.value = data.translation[key];
        }
      }
    })
    .catch((error) => console.error(error));
}

let flags = document.getElementsByClassName("flags-item");
for (let flag of flags) {
  flag.addEventListener("click", function () {
    let language = this.dataset.language;
    changeLanguage(language);
    loadLanguage();
  });
}

window.addEventListener("load", loadLanguage);
