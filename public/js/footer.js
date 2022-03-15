import hasScrollbar from './utilities/hasScrollbar.js';

const footer = document.querySelector('footer');

const setFooter = _ => !hasScrollbar() ? footer.classList.add('footer-bottom') : footer.classList.remove('footer-bottom');

window.addEventListener('DOMContentLoaded', e => {
    const rootElement = document.querySelector(':root');
    
    const THEME_STORAGE_KEY = 'theme';

    const themeInStorage = localStorage.getItem(THEME_STORAGE_KEY);

    let theme;

    themeInStorage ? theme = themeInStorage : theme = 'light';

    rootElement.classList.add(theme);

    setFooter();
});

window.addEventListener('resize', setFooter);
window.addEventListener('click', e => setTimeout(setFooter, 1));