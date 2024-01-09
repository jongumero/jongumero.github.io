function toggleMenu() {
    const menu = document.querySelector(".hamburger-menu-links");
    const icon = document.querySelector(".hamburger-menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}