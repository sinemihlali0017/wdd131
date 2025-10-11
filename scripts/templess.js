
// Set current year in footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Set last modified date
document.getElementById('lastmodified').textContent = document.lastModified;

// Hamburger menu functionality
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', function() {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    navMenu.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    
    // Change menu icon
    if (navMenu.classList.contains('show')) {
        menuToggle.textContent = '✕';
        menuToggle.style.fontSize = '1.8rem';
    } else {
        menuToggle.textContent = '☰';
        menuToggle.style.fontSize = '1.5rem';
    }
});

// Close menu when clicking on a link (mobile)
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth < 768) {
            navMenu.classList.remove('show');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.textContent = '☰';
            menuToggle.style.fontSize = '1.5rem';
            
            // Update active class
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Close menu when clicking outside (mobile)
document.addEventListener('click', function(event) {
    if (window.innerWidth < 768) {
        const header = document.querySelector('header');
        const isClickInsideHeader = header.contains(event.target);
        if (!isClickInsideHeader && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.textContent = '☰';
            menuToggle.style.fontSize = '1.5rem';
        }
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
        navMenu.classList.remove('show');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
        menuToggle.style.fontSize = '1.5rem';
    }
});


