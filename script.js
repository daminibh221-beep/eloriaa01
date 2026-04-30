// Navbar Scrolled Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for Fade-In Animations
const fadeElements = document.querySelectorAll('.fade-in');

const fadeOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const fadeObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, fadeOptions);

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

// Subtle Parallax for Hero Background
const heroBg = document.querySelector('.hero-bg');

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    if (heroBg) {
        // Move the background down slightly as we scroll down
        heroBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    }
});
