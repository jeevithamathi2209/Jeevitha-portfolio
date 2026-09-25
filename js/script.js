// ===============================
// Smooth Navigation
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ===============================
// Navbar Shadow on Scroll
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {
        navbar.style.boxShadow = "0 4px 20px rgba(15, 23, 42, 0.06)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


// ===============================
// Current Year in Footer
// ===============================

const currentYear = new Date().getFullYear();

const footerYear = document.querySelector(".footer p");

if (footerYear) {
    footerYear.textContent =
        `© ${currentYear} Jeevitha. All rights reserved.`;
}