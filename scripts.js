// INFO2180 Project 1 - JavaScript 

document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.querySelector('.newsletter form');
    const emailInput = document.getElementById('email');
    const messageArea = document.querySelector('.message');

    if (newsletterForm && emailInput && messageArea) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const emailAddress = emailInput.value.trim();

            if (emailAddress) {
                const successMessage = `Thank you! Your email address ${emailAddress} has been added to Our Mailing List!`;
                messageArea.textContent = successMessage;
                emailInput.value = '';
            } else {
                const errorMessage = "Please enter a valid email address.";
                messageArea.textContent = errorMessage;
            }
        });
    }
});