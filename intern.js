document.addEventListener("DOMContentLoaded", function () {
    // Dropdown Menu
    const dropdownBtn = document.getElementById("dropdown-btn");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdownBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent closing when clicking on the button
        dropdownMenu.classList.toggle("show");
    });

    document.addEventListener("click", function () {
        dropdownMenu.classList.remove("show"); // Hide dropdown when clicking elsewhere
    });

    // Smooth Scrolling for Navigation
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Sticky Navbar Effect on Scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});