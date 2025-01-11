// Initialize EmailJS
(function() {
    emailjs.init("PO86932EFddrAebPC"); // Replace with your actual public key
})();

// Form submission handler
document.getElementById('quote-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading state
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    // Get form data
    const formData = {
        firstName: this.querySelector('input[name="firstName"]').value,
        lastName: this.querySelector('input[name="lastName"]').value,
        email: this.querySelector('input[name="email"]').value,
        phone: this.querySelector('input[name="phone"]').value,
        service: this.querySelector('select[name="service"]').value,
        projectSize: this.querySelector('input[name="projectSize"]').value,
        details: this.querySelector('textarea[name="details"]').value
    };

    // Send email using EmailJS
    emailjs.send('service_ik88t9i', 'template_6zph64n', formData)
        .then(function() {
            alert('Thank you! We will contact you soon.');
            document.getElementById('quote-form').reset();
        })
        .catch(function(error) {
            alert('Oops! Something went wrong. Please try again later.');
            console.error('EmailJS error:', error);
        })
        .finally(function() {
            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        });
});
