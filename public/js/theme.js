const root = document.querySelector(':root');

window.addEventListener('DOMContentLoaded', e => {
    const THEME_STORAGE_KEY = 'theme';
    const themeInStorage = localStorage.getItem(THEME_STORAGE_KEY);



    root.classList.add(themeInStorage ? themeInStorage : 'light');
});