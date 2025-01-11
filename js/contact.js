// Initialize EmailJS
(function() {
    emailjs.init("PO86932EFddrAebPC");
})();

// Contact Form Handler
const contactForm = document.querySelector('form[data-form="contact"]');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'SENDING...';
        btn.disabled = true;

        emailjs.sendForm('service_ik88t9i', 'template_msdsth8', this)
            .then(() => {
                alert('Message sent successfully!');
                this.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Failed to send message. Please try again.');
            })
            .finally(() => {
                btn.textContent = originalText;
                btn.disabled = false;
            });
    });
} 