document.addEventListener('DOMContentLoaded', function() {
    // Nav scroll handling
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            nav.classList.add('bg-[#121212]', 'shadow-lg');
        } else {
            nav.classList.remove('bg-[#121212]', 'shadow-lg');
        }
    });

    // Form submission handling
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}); 