/*jshint esversion: 6 */ 
let open = null;
let close = null;

const bindElements = () => {
     open = document.querySelector('#menu-open');
     close = document.querySelector('#menu-close');
};


function openMenu(){
    open.addEventListener('click', event => {
        const menuMobile = document.querySelector('#menu-mobile');
        menuMobile.classList.remove('hidden');  
    });
};
function closeMenu(){
    close.addEventListener('click', event => {
        const menuMobile = document.querySelector('#menu-mobile');
        menuMobile.classList.add('hidden');
    });
};
const main = () => {
    bindElements();
    openMenu();
    closeMenu();
};

main();
