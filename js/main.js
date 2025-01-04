document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    emailjs.init("PO86932EFddrAebPC");

    // Nav scroll handling
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            nav.classList.add('bg-[#121212]', 'shadow-lg');
        } else {
            nav.classList.remove('bg-[#121212]', 'shadow-lg');
        }
    });

    // Form handling
    const forms = {
        contact: document.querySelector('form[data-form="contact"]'),
        quote: document.querySelector('form[data-form="quote"]')
    };

    // Contact Form Handler
    if (forms.contact) {
        forms.contact.addEventListener('submit', function(e) {
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

    // Quote Form Handler
    if (forms.quote) {
        forms.quote.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'SENDING...';
            btn.disabled = true;

            emailjs.sendForm('service_ik88t9i', 'template_6zph64n', this)
                .then(() => {
                    alert('Quote request sent successfully!');
                    this.reset();
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('Failed to send quote request. Please try again.');
                })
                .finally(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                });
        });
    }
}); 