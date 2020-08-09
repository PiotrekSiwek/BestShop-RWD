const btn = document.querySelector(".menu-button");
const menu = document.querySelector(".page-menu-list");

btn.addEventListener("click", function (){
    menu.classList.toggle("show");
})