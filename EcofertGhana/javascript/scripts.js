document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Normalize the path for comparison
        const normalizedCurrentPath = currentPath === '/' ? 'index.html' : currentPath;
        const normalizedLinkPath = linkPath.startsWith('/') ? linkPath.substring(1) : linkPath;

        // Check if the link's href matches the current path
        if (normalizedCurrentPath === normalizedLinkPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    const learnMoreButton = document.getElementById('learn-more');
    learnMoreButton.addEventListener('click', function() {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted successfully!');
        // Add form submission logic here
    });
});




