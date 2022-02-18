const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.fa-bars');
const aside = document.querySelector('aside');
const navLink = document.querySelectorAll('.nav-link');

function asideToggle() {
  aside.classList.toggle('active');
  hamburgerIcon.classList.toggle('fa-times');
}
function asideClose() {
  aside.classList.remove('active');
  hamburgerIcon.classList.remove('fa-times');
}
hamburger.addEventListener('click' , asideToggle);
navLink.forEach(n => n.addEventListener('click', asideClose));