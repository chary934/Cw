document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const items = document.querySelector(".items");

    mobileMenuIcon.addEventListener("click", function () {
        items.classList.toggle("active");
    });
});
