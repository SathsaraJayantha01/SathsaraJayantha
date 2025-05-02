// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                alert('Please fill out all fields.');
                return;
            }
            
            // You would typically send this data to a server
            // For now, we'll just simulate a successful submission
            
            // Disable the submit button and show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending...';
            
            // Simulate API call with timeout
            setTimeout(function() {
                // Reset the form
                contactForm.reset();
                
                // Restore button state
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
                
                // Show success message
                alert('Message sent successfully! I will get back to you soon.');
            }, 1500);
        });
    }
});