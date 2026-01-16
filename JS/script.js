// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Animate on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// EmailJS integration for contact form

(function () {
    emailjs.init("service_h8cer88"); // 🔴 replace this
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_h8cer88",   // 🔴 replace this
            "template_ozdg4we",  // 🔴 replace this
            this
        )
        .then(
            function () {
                alert("Email sent successfully!");
            },
            function (error) {
                console.error("FAILED...", error);
                alert("Failed to send email");
            }
        );
});
