document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMenuButton = document.getElementById('close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    function toggleMenu(show) {
        if (show) {
            mobileMenu.classList.remove('hidden');
            body.style.overflow = 'hidden';
            setTimeout(() => {
                mobileMenu.style.opacity = '1';
            }, 10);
        } else {
            mobileMenu.style.opacity = '0';
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                body.style.overflow = 'auto';
            }, 300);
        }
    }

    if (mobileMenuButton && closeMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => toggleMenu(true));
        closeMenuButton.addEventListener('click', () => toggleMenu(false));
    }

    // Nav scroll handling
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            nav.classList.add('bg-[#121212]', 'shadow-lg');
        } else {
            nav.classList.remove('bg-[#121212]', 'shadow-lg');
        }
    });

    // Email functionality - only initialize if emailjs is loaded
    if (typeof emailjs !== 'undefined') {
        emailjs.init("PO86932EFddrAebPC");
        
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
    }
}); 