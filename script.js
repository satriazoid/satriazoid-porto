        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loadingScreen').classList.add('hidden');
            }, 1500);
        });

        // Typing Animation
        const texts = [
            "Fullstack Web Developer",
            "UI/UX Designer",
            "Data Scientist",
            "IT Support Specialist",
            "Digital Hero"
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseTime = 2000;

        function typeText() {
            const currentText = texts[textIndex];
            const typingElement = document.getElementById('typingText');
            
            if (!isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                
                if (charIndex === currentText.length) {
                    isDeleting = true;
                    setTimeout(typeText, pauseTime);
                    return;
                }
            } else {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                
                if (charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                }
            }
            
            setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
        }

        typeText();

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Background Animation
        function createFloatingElements() {
            const bgAnimation = document.getElementById('bgAnimation');
            for (let i = 0; i < 10; i++) {
                const element = document.createElement('div');
                element.className = 'floating-element';
                element.style.width = Math.random() * 100 + 50 + 'px';
                element.style.height = element.style.width;
                element.style.left = Math.random() * 100 + '%';
                element.style.top = Math.random() * 100 + '%';
                element.style.animationDelay = Math.random() * 20 + 's';
                element.style.animationDuration = (Math.random() * 20 + 20) + 's';
                bgAnimation.appendChild(element);
            }
        }

        createFloatingElements();

        // Particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 10 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        createParticles();

        // Power Up Button
        document.getElementById('powerUp').addEventListener('click', function() {
            showToast('Power Up Activated! 💪');
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
            
            // Add special effects
            document.body.style.animation = 'flash 0.5s';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 500);
        });

        // Toast Notification
        function showToast(message) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Contact Form
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            showToast('Mission Started! I\'ll contact you soon! 🚀');
            this.reset();
        });

        // Skill Cards Animation on Scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slideInUp 0.6s ease-out';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.skill-card, .portfolio-card').forEach(card => {
            observer.observe(card);
        });

        // Add slideInUp animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            @keyframes flash {
                0%, 100% { filter: brightness(1); }
                50% { filter: brightness(1.2); }
            }
        `;
        document.head.appendChild(style);

        // Interactive Skill Cards
        document.querySelectorAll('.skill-card').forEach(card => {
            card.addEventListener('click', function() {
                const skillName = this.querySelector('.skill-name').textContent;
                showToast(`${skillName} - Skill Mastered! 🎯`);
            });
        });

        // Portfolio Card Hover Effect
        document.querySelectorAll('.portfolio-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.zIndex = '10';
            });
            card.addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
            });
        });

        // Easter Egg: Konami Code
        let konamiCode = [];
        const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        
        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.key);
            konamiCode = konamiCode.slice(-10);
            
            if (konamiCode.join(',') === konamiPattern.join(',')) {
                document.body.style.animation = 'rainbow 2s linear infinite';
                showToast('🌈 Rainbow Mode Activated!');
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 5000);
            }
        });

        // Add rainbow animation
        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(rainbowStyle);

        // Mouse Trail Effect
        let mouseTrail = [];
        const maxTrailLength = 20;

        document.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.95) { // Only create trail occasionally
                const trail = document.createElement('div');
                trail.style.position = 'fixed';
                trail.style.left = e.clientX + 'px';
                trail.style.top = e.clientY + 'px';
                trail.style.width = '10px';
                trail.style.height = '10px';
                trail.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)';
                trail.style.borderRadius = '50%';
                trail.style.pointerEvents = 'none';
                trail.style.zIndex = '9999';
                trail.style.animation = 'fadeOut 1s ease-out forwards';
                document.body.appendChild(trail);
                
                mouseTrail.push(trail);
                
                if (mouseTrail.length > maxTrailLength) {
                    const oldTrail = mouseTrail.shift();
                    oldTrail.remove();
                }
                
                setTimeout(() => {
                    trail.remove();
                    mouseTrail = mouseTrail.filter(t => t !== trail);
                }, 1000);
            }
        });

        // Add fadeOut animation
        const fadeOutStyle = document.createElement('style');
        fadeOutStyle.textContent = `
            @keyframes fadeOut {
                from {
                    opacity: 1;
                    transform: scale(1);
                }
                to {
                    opacity: 0;
                    transform: scale(0);
                }
            }
        `;
        document.head.appendChild(fadeOutStyle);