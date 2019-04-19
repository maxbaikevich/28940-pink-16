var navMain = document.querySelector('.main-nav__wrapper-menu');
var navToggle = document.querySelector('.main-nav__toggle');
var cross = document.querySelector('.main-nav__toggle-menu-cross');
var burger = document.querySelector('.main-nav__toggle-menu-open');

navMain.classList.remove('main-nav__wrapper--nojs');
navToggle.classList.remove('main-nav__toggle--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__wrapper--closed')) {
    navMain.classList.remove('main-nav__wrapper--closed');
    navMain.classList.add('main-nav__wrapper--opened');
    burger.classList.add('main-nav__toggle--closed');
    cross.classList.remove('main-nav__toggle--closed');
  } else {
    navMain.classList.add('main-nav__wrapper--closed');
    navMain.classList.remove('main-nav__wrapper--opened');
    burger.classList.remove('main-nav__toggle--closed');
    cross.classList.add('main-nav__toggle--closed');
  }
});
