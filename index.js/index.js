let menu = document.querySelector("#menu-bar");
let navber = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navber.classList.toggle("active");
}