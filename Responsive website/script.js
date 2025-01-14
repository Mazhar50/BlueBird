const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Here you can add your form submission logic, e.g., sending data to a server

    alert('Form submitted successfully!');
});