import menuTemplate from './templates/menu.hbs';
import menuData from './menu.json';

const refs = {
    body: document.querySelector('body'),
    menu: document.querySelector('.js-menu'),
    checkbox: document.querySelector('#theme-switch-toggle')
}


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const menuItems = menuData.map(menuTemplate).join(' ');



refs.menu.insertAdjacentHTML('afterbegin', menuItems);

refs.checkbox.addEventListener('change', onCheckboxChange);

document.addEventListener('DOMContentLoaded', onLoad);

function onCheckboxChange() {
    if (refs.checkbox.checked) {
        localStorage.setItem('theme', Theme.DARK);
        setDarkTheme();
    } else {
        localStorage.setItem('theme', Theme.LIGHT);
        setLightTheme();
    }
       
}


function onLoad() {
    const theme = localStorage.getItem('theme');
    if (theme === Theme.LIGHT) return;
    refs.checkbox.checked = true;
    setDarkTheme();
    }

function setDarkTheme() {
        refs.body.classList.add(Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);
}

function setLightTheme() {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
}
