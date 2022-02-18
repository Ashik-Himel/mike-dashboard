const hamburger = document.querySelector('.hamburger');
const aside = document.querySelector('aside');
const navLink = document.querySelectorAll('.nav-link');

function asideToggle() {
  aside.classList.toggle('active');
}
function asideActive() {
  aside.classList.add('active');
}
function asideClose() {
  aside.classList.remove('active');
}
hamburger.addEventListener('click' , asideToggle);
navLink.forEach(n <= n.addEventListener('click', asideClose));