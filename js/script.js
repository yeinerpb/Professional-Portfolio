/*======= menu icon navbar ========*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

/*======= scroll section active ========*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.pageYOffset;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                    .querySelector("header nav a[href*=" + id + "]")
                    .classList.add("active");
            });
        }
    });

    /*======= sticky navbar ========*/
    let header = document.querySelector(".header");

    header.classList.toggle("sticky", window.scrollY > 100);

    /*======= menu icon navbar ========*/
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};


/*======= bottom top ========*/
window.addEventListener('load', function () {
    let scrollToTop = document.getElementById('scrollToTop');
    if (window.pageYOffset === 0) {
        scrollToTop.style.display = 'none';
    }
});

window.addEventListener('scroll', function () {
    let scrollToTop = document.getElementById('scrollToTop');
    if (window.pageYOffset > 0) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
});

/*======= CV ========*/
function selectCV() {
    Swal.fire({
        title: 'Selecciona el idioma del CV',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Español',
        denyButtonText: 'English',
        cancelButtonText: 'Português',
    }).then((result) => {
        var cvPath;
        if (result.isConfirmed) {
            cvPath = "CVYeinerParraEspanol.pdf";
        } else if (result.isDenied) {
            cvPath = "CVYeinerParraEnglish.pdf";
        } else if (result.isDismissed && result.dismiss !== Swal.DismissReason.backdrop) {
            cvPath = "CVYeinerParraPortugues.pdf";
        }
        if (cvPath) {
            window.open(cvPath, '_blank');
        }
    })
    event.preventDefault();
}


