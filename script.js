const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close menu on link click (mobile)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});