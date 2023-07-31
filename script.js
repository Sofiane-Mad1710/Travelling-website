const navIcon = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav-links');
const registerBtn = document.querySelector('.register-btn');

navIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
	registerBtn.classList.toggle('hide');
	navIcon.classList.toggle('rotate'); 
});
