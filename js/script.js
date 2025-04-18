// Hero Section Typing animation
var typed = new Typed("#typed-text", {
    strings: ["a Python Developer", "an AI/ML Enthusiast", "a Web Developer", "a Backend Developer", "a Full Stack Learner", ""],
    typeSpeed: 50,
    backSpeed: 20,
    backDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: " />",
    shuffle: false,
    smartBackspace: true,
    fadeOut: false
});

// Technologies
var typed = new Typed("#technologies", {
    strings: ["HTML", "CSS", "PHP", "PYTHON", "BOOTSTRAP", "TAILWIND", "FLASK", "D-JANGO", "LARAVEL"],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: " />",
    shuffle: false,
    smartBackspace: true,
    fadeOut: false
});

// Smooth Scrolling animation while navigating
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute("href").substring(1); // Get section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                smoothScroll(targetSection.offsetTop - 70, 800); // Adjust 70px for fixed navbar
            }
        });
    });

    function smoothScroll(targetPosition, duration) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const scrollAmount = easeOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, scrollAmount);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        function easeOutQuad(t, b, c, d) {
            t /= d;
            return -c * t * (t - 2) + b;
        }

        requestAnimationFrame(animation);
    }
});

// certificate full view
const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("fullCertificate");
const closeBtn = document.querySelector(".close");

window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("certificateModal").style.display = "none";
});
// Function to open modal on certificate click
document.querySelectorAll(".certificate-card img").forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "flex";  // Show modal
        modalImg.src = this.src;  // Set image source
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});




/* Parallax Effect */
document.addEventListener("mousemove", function (e) {
    const heroImage = document.querySelector(".profile-pic");
    const x = (window.innerWidth - e.pageX) / 90;
    const y = (window.innerHeight - e.pageY) / 90;

    heroImage.style.transform = `translate(${x}px, ${y}px)`;
});

// FOR RESPONSIVE NAVBAR
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.innerHTML = navMenu.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});