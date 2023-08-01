const navIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const registerBtn = document.querySelector('.register-btn');

navIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  registerBtn.classList.toggle('show');

  if (navLinks.classList.contains('show')) {
    // Show the navigation links and "Register Now" button
    navLinks.style.maxHeight = navLinks.scrollHeight + 'px';
    registerBtn.style.display = 'inline-block';
    setTimeout(() => {
      registerBtn.style.opacity = 1;
      registerBtn.style.transform = 'translateY(0)';
    }, 10); // A slight delay to allow smooth transition of the "Register Now" button
  } else {
    // Hide the navigation links first
    navLinks.style.maxHeight = '0';

    // Delay hiding the "Register Now" button to synchronize with the transition of navigation links
    setTimeout(() => {
      registerBtn.style.opacity = 0;
      registerBtn.style.transform = 'translateY(-20px)';
    }, 300); // Use a delay of 300 milliseconds to wait for the navigation links to hide

    // Hide the "Register Now" button smoothly after the delay
    setTimeout(() => {
      registerBtn.style.display = 'none';
    }, 700); // Use the same duration as the max-height transition (0.7s)
  }

  navIcon.classList.toggle('rotate');
});
