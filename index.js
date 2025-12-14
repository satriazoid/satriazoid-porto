/* ===== TYPING EFFECT ===== */
const text = "Hello, I'm Your Name";
const subtitleText = "Data Scientist • Frontend Developer • UI Designer";

let index = 0;
const speed = 90;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    } else {
        // tampilkan subtitle setelah typing selesai
        const subtitle = document.getElementById("subtitle");
        subtitle.textContent = subtitleText;
        subtitle.style.opacity = 1;
    }
}
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.2 });
reveals.forEach(el => observer.observe(el));