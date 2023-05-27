/*======= scroll section active ========*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    /*======= sticky navbar ========*/
    let header = document.querySelector(".header");

    header.classList.toggle("sticky", window.scrollY > 100);

    /*======= menu icon navbar ========*/
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};