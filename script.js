// Wait until the DOM is loaded before running scripts
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const contactForm = document.getElementById('contactForm');
  const feedback = document.querySelector('.form-feedback');

  // Toggle mobile navigation menu
  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });

  // Close mobile menu when a navigation link is clicked
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  });

  // Simple form submission handling
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      feedback.textContent = 'Please fill out all fields before sending your message.';
      return;
    }

    feedback.textContent = 'Thank you! Your message has been received.';
    contactForm.reset();
  });
});
