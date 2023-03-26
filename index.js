const mobileMenu = document.querySelector(".nav-menu-icon")
const menu = document.querySelector(".nav-links")

mobileMenu.addEventListener("click",() => {
    mobileMenu.classList.toggle("active")
    menu.classList.toggle("active")
})

