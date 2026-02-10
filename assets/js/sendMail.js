document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get current time in a readable format
            const timeNow = new Date().toLocaleString();

            // Send the form data with EmailJS
            emailjs.sendForm(
                "service_jpgmlga",     // Your Service ID
                "template_abc123",      // Your Template ID
                this,                  // Form reference
                "t-zstHDmo1AmS6UO1"    // Your Public Key
            ).then(function () {
                alert("✅ Email sent successfully!");
                form.reset();
            }, function (error) {
                alert("❌ Failed to send: " + JSON.stringify(error));
            });
        });
    }
});
