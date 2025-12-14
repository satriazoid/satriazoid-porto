document.addEventListener("DOMContentLoaded", () => {

    const text = "Hello, I'm Jejo";
    const subtitleText = "Data Scientist • Frontend Developer • UI Designer";

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