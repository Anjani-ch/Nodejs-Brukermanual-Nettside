const root = document.querySelector(':root');
const themeToggler = document.querySelector('#theme-toggler');

const THEME_STORAGE_KEY = 'theme';

const getStorage = key => localStorage.getItem(key);

const updateStorage = (key, value) => {
    let result;

    typeof value !== 'string' ? result = JSON.stringify(value) : result = value;

    localStorage.setItem(key, result);
}

const updateThemeIcon = theme => {
    if (theme === 'light' || !theme) themeToggler.src = '/img/sun-icon.svg';
    else if (theme === 'dark') themeToggler.src = '/img/moon-icon.svg';
}

const setTheme = _ => {
    const themeInStorage = getStorage(THEME_STORAGE_KEY);

    if (themeInStorage)

    updateThemeIcon(themeInStorage);

    root.className = themeInStorage ? themeInStorage : 'light';
}

themeToggler.addEventListener('click', e => {
    const themeInStorage = getStorage(THEME_STORAGE_KEY);
    let result;

    if (themeInStorage === 'light' || !themeInStorage) result = 'dark';
    else if (themeInStorage === 'dark') result = 'light';

    updateStorage(THEME_STORAGE_KEY, result);
    setTheme();
});

window.addEventListener('DOMContentLoaded', setTheme);