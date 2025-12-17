// Fix GitHub Pages scroll restoration
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Force scroll to top AFTER page really visible
window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
        window.scrollTo(0, 0);
    }
});

window.addEventListener('load', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);
});


document.addEventListener("DOMContentLoaded", () => {

    const text = "Hello, I'm Jejo";
    const subtitleText = "Data Scientist • Frontend Developer • UI Designer • Trader • Tech Enthusiast";

    const typingEl = document.getElementById("typing");
    const subtitleEl = document.getElementById("subtitle");

    let index = 0;
    const speed = 90;

    function typeEffect() {
        if (index < text.length) {
            typingEl.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        } else {
            subtitleEl.textContent = subtitleText;
            subtitleEl.style.opacity = 1;
        }
    }

    typeEffect();
});



document.querySelectorAll('.social a').forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.add('clicked');
        setTimeout(() => btn.classList.remove('clicked'), 150);
    });
});


const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.2 });
reveals.forEach(el => observer.observe(el));


// Mobile navbar toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Auto close menu after click (mobile UX)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
