/*jshint esversion: 6 */ 
let btnOpen = null;
let btncClose = null;
let menuMobile = null;
let container = null;

const bindElements = () => {
    btnOpen = document.querySelector('#menu-open');
    btnClose = document.querySelector('#menu-close');
    menuMobile = document.querySelector('#menu-mobile');
    container = document.querySelector('.container');

};


function openMenu(){
    btnOpen.addEventListener('click', event => {
        menuMobile.classList.remove('hidden'); 
        container.classList.add('behind');
    });
};
function closeMenu(){
    btnClose.addEventListener('click', event => {
        menuMobile.classList.add('hidden');
        container.classList.remove('behind');
    });
};
const main = () => {
    bindElements();
    openMenu();
    closeMenu();
};

main();
