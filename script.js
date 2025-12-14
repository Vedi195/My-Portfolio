document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling function
    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Button click scrolling
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.textContent === 'View My Work' ? 'work' : 'about';
            scrollToSection(targetSection);
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        // keep your other JS code here
    });


    // Menu item click scrolling
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            let targetSection;
            if (this.textContent === 'Welcome') targetSection = 'home';
            else if (this.textContent === 'Portefoli') targetSection = 'home';
            else if (this.textContent === 'About Me') targetSection = 'about';
            if (targetSection) scrollToSection(targetSection);
        });
    });

    // Link click actions
    document.querySelectorAll('.link').forEach(link => {
        link.addEventListener('click', function() {
            if (this.textContent === 'Resume') alert('Resume link clicked.');
            else if (this.textContent === 'LinkedIn') alert('LinkedIn link clicked.');
        });
    });

    // Project buttons & images
    const projectButtons = document.querySelectorAll('.project-btn');
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectTitle = this.parentElement.querySelector('.project-title').textContent;
            console.log(`Viewing project: ${projectTitle}`);
        });
    });

    document.getElementById('ecommerce-img').src = 'images/po3.jpg';
    document.getElementById('portfolio-img').src = 'images/self.jpeg';
    document.getElementById('taskapp-img').src = 'images/mazegame.webp';

    // Contact card scroll animation
    const contactCards = document.querySelectorAll('.contact-card');
    function checkScroll() {
        contactCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight - 100) card.style.opacity = '1';
        });
    }
    window.addEventListener('scroll', checkScroll);
    checkScroll();

    // Back to top button
    const backToTopBtn = document.getElementById('backToTopBtn');
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', function() {
        backToTopBtn.style.opacity = window.pageYOffset > 300 ? '1' : '0.8';
    });



    // -------------------------------
    // SCROLL REVEAL ANIMATION
    // -------------------------------
    const animatedElements = document.querySelectorAll(
        ".fade-up, .fade-left, .fade-right, .zoom-in"
    );

    function revealOnScroll() {
        animatedElements.forEach(el => {
            const position = el.getBoundingClientRect().top;

            if (position < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // Header fade-in on load
    window.addEventListener("load", () => {
    document.getElementById("header").classList.add("show");
    });

    const mobileMenu = document.getElementById("mobileMenu");
    const mobileNav = document.getElementById("mobileNav");

    mobileMenu.addEventListener("click", () => {
    mobileNav.style.display =
        mobileNav.style.display === "flex" ? "none" : "flex";
    });

});

