const body = document.querySelector('body');

const navbarIcon = document.querySelector('#navbar-icon');
const navbarLinks = document.querySelector('#navbar-links');

navbarIcon.addEventListener('click', e => {
    navbarLinks.classList.toggle('open');
    navbarLinks.classList.toggle('d-sm-none-important');
    body.classList.toggle('overflow-hidden');

    if (navbarLinks.classList.contains('open')) {
        e.target.src = '/img/mark-icon.svg';
        e.target.style.transform = 'translateX(-15px)';
    } else {
        e.target.src = '/img/hamburger-menu-icon.svg';
        e.target.style.transform = 'translateX(0px)';
    }
});