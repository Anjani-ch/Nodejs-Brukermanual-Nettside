window.addEventListener('DOMContentLoaded', e => {
    const rootElement = document.querySelector(':root');
    
    const THEME_STORAGE_KEY = 'theme';

    const themeInStorage = localStorage.getItem(THEME_STORAGE_KEY);

    let theme;

    themeInStorage ? theme = themeInStorage : theme = 'light';

    rootElement.classList.add(theme);
});