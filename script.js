function toggleMenu() {
    const menu = document.querySelector(".hamburger-menu-links");
    const icon = document.querySelector(".hamburger-menu-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.querySelectorAll('.show-more-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        // Prevent default anchor action
        event.preventDefault();

        // The .description element is now the next sibling of the clicked button
        var description = this.nextElementSibling;

        if(description.style.display === "none" || description.style.display === '') {
            description.style.display = "flex";
            this.textContent = "Show less <";
        } else {
            description.style.display = "none";
            this.textContent = "Show more >";
        }
    });
});