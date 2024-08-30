document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('navbar-hamburger');
    const navbarLinks = document.querySelector('.navbar-links');

    hamburger.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
    });

    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.navbar-links a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            sections.forEach(section => {
                section.style.display = 'none';
            });

            target.style.display = 'block';
        });
    });

    // By default, show the home section
    document.querySelector('#home').style.display = 'block';
});
