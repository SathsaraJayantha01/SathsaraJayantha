$(document).ready(function() {
    $('#contact-form').submit(function(event) {
        event.preventDefault();
        
        // Show loading state
        var submitBtn = $(this).find('button[type="submit"]');
        var originalText = submitBtn.text();
        submitBtn.prop('disabled', true).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...');
        
        // Get form
        var form = $(this);
        var formData = form.serialize();
        
        // Clear previous messages
        var messageDiv = $('#form-message');
        messageDiv.removeClass('alert-success alert-danger').addClass('d-none').text('');
        
        // Send AJAX request
        $.ajax({
            url: 'handle_contact.php',
            type: 'POST',
            data: formData,
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    // Success message
                    messageDiv.removeClass('d-none alert-danger').addClass('alert-success').text(response.message).show();
                    // Clear form
                    form[0].reset();
                } else {
                    // Error message
                    messageDiv.removeClass('d-none alert-success').addClass('alert-danger').text(response.message).show();
                }
            },
            error: function(xhr, status, error) {
                // Log error details
                console.error("AJAX Error:", status, error, xhr.responseText);
                
                // Show user-friendly error message
                messageDiv.removeClass('d-none alert-success').addClass('alert-danger')
                    .text('An error occurred. Please try again later.').show();
            },
            complete: function() {
                // Restore button state
                submitBtn.prop('disabled', false).html(originalText);
            }
        });
    });
});