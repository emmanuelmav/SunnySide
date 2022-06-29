const hamburger = document.querySelector('.hamburger');

const navMenu = document.querySelector('.nav-menu');

const heading = document.querySelector('.header-heading');

const arrow = document.querySelector('.arrow-down');

hamburger.addEventListener('click', () => {
    heading.classList.toggle('hidden');
    arrow.classList.toggle('hidden');
    navMenu.classList.toggle('block');
})