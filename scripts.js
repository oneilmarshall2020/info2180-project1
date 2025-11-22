document.addEventListener('DOMContentLoaded', () => {
    // 1. Get references to the form, input field, and message area
    const newsletterForm = document.querySelector('form'); // Assuming there's only one form for the newsletter
    const emailInput = document.querySelector('input[type="email"]');
    const messageArea = document.querySelector('.message');

    // Check if elements exist before adding listeners
    if (newsletterForm && emailInput && messageArea) {
        // 2. Add an event listener for the form submission
        newsletterForm.addEventListener('submit', (event) => {
            // Prevent the default form submission behavior (which causes a page reload)
            event.preventDefault();

            const emailAddress = emailInput.value.trim();

            if (emailAddress) {
                // An email address was entered
                // Construct the success message
                const successMessage = `Thank you! Your email address ${emailAddress} has been added to our mailing list!`;
                
                // Display the success message in the message area
                messageArea.textContent = successMessage;

                // Optional: Clear the input field after successful submission
                emailInput.value = '';
            } else {
                // No email address was entered
                const errorMessage = "Please enter a valid email address.";
                
                // Display the error message
                messageArea.textContent = errorMessage;
            }
        });
    }
});