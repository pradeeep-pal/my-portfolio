// Mobile Navbar Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navigation');

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
}

// Typing Text Animation
const words = ["Full-Stack Developer", "Open-Source Contributor", "C++ & DSA Learner"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing-text');

function typeEffect() {
    if (!typingElement) return;
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1800; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}
typeEffect();

// Contact Form Trigger
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name')?.value || '';
        const email = document.getElementById('contact-email')?.value || '';
        const phone = document.getElementById('contact-phone')?.value || '';
        const subject = document.getElementById('contact-subject')?.value || 'Portfolio Message';
        const message = document.getElementById('contact-message')?.value || '';

        const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
        window.location.href = `mailto:ppal39932@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}