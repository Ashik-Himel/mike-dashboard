const hamburger = document.querySelector('.hamburger');
const aside = document.querySelector('aside');
const navLink = document.querySelectorAll('.nav-link');

function asideToggle() {
  aside.classList.toggle('active');
}
function asideClose() {
  aside.classList.remove('active');
}
function eAsideClose(e) {
  if(aside.contains(e.target)){

  }
  if(hamburger.contains(e.target)){

  }
  else {
    return asideClose();
  }
}
hamburger.addEventListener('click' , asideToggle);
navLink.forEach(n => n.addEventListener('click', asideClose));
window.addEventListener('click', eAsideClose);