// Fix GitHub Pages scroll restoration
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

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

  const textTarget = document.getElementById("hello-typing");
  const subtitle = document.getElementById("subtitle");

  if (!textTarget || !subtitle) {
    console.error("Element for typing animation not found.");
    return;
  }

  const words = [
    "Hello",
    "こんにちは", // Jepang
    "Hola",       // Spanyol
    "Bonjour",    // Prancis
    "안녕하세요"  // Korea
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pause = 800;

  subtitle.style.opacity = 1; // jadi muncul setelah typing selesai

  function typeLoop() {
    const word = words[wordIndex];

    if (!isDeleting && charIndex < word.length) {
      textTarget.textContent = word.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeLoop, typingSpeed);

    } else if (isDeleting && charIndex > 0) {
      textTarget.textContent = word.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeLoop, deletingSpeed);

    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeLoop, pause);
      } else {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeLoop, typingSpeed);
      }
    }

    if (wordIndex === words.length - 1 && charIndex === 0 && isDeleting) {
      subtitle.style.opacity = 1;
      return; // stop animasi
    }
  }

  typeLoop();
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
