// Nav toggles
const nav = document.getElementById('nav');
const hamburger = document.querySelector('.hamburger');
const navListList = document.querySelector('.nav-links');
const navLink = document.querySelector('.nav-links li a');

function isMobile() {
    if (window.innerWidth <= 768) {
        nav.classList.add('mobile-nav');
        nav.classList.remove('desktop-nav');
        navListList.classList.add('nav-links__hidden');
        hamburger.classList.remove('hamburger__rotated');
    } else {
        nav.classList.add('desktop-nav');
        nav.classList.remove('mobile-nav');
        navListList.classList.remove('nav-links__hidden');
    }
}
window.addEventListener('resize', isMobile);

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger__rotated');
    navListList.classList.toggle('nav-links__hidden');
});

navListList.addEventListener('click',() => {
    if (!navListList.classList.contains('nav-links__hidden') && nav.classList.contains('mobile-nav')) {
        navListList.classList.add('nav-links__hidden');
        hamburger.classList.remove('hamburger__rotated');
    }
});

// Smooth scroll on desktop
const anchorList = document.querySelectorAll('a[href^="#"]');
anchorList.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (window.innerWidth > 768) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        };
    });
});

// Run //
// Nav added
window.addEventListener('load', isMobile);



















