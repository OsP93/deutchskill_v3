// --- Check initialization ---
console.log('Hello! Mobile menu scripts are connected.');

// --- Constants ---
const burgerNavbar = document.querySelector('.navigation-navbar-mobile');
const burgerMenuButtton = document.querySelector('.burgerpill');
const burgerCrossButtton = document.querySelector('.burgerpill-cross');
//const langButton = document.querySelector('.mobilelang');
const navPills = document.querySelectorAll('.navigation-navbar--pill'); // Collection of elements navigation pills

// --- Event handler for burger menu buttons ---
burgerMenuButtton.addEventListener('click', function () {
    burgerMenuButtton.classList.add('hidden-d');
    //langButton.classList.add('hidden-d');
    burgerCrossButtton.classList.remove('hidden-d');
    burgerNavbar.classList.remove('hidden-d');
    burgerNavbar.classList.add('activemenu');
});

burgerCrossButtton.addEventListener('click', function () {
    burgerCrossButtton.classList.add('hidden-d');
    burgerMenuButtton.classList.remove('hidden-d');
    //langButton.classList.remove('hidden-d');
    burgerNavbar.classList.remove('activemenu');
    burgerNavbar.classList.add('hidden-d');
});

// Event handler for collection of elements
navPills.forEach((navPill) => navPill.addEventListener('click', function () {
    burgerCrossButtton.classList.add('hidden-d');
    burgerMenuButtton.classList.remove('hidden-d');
    //langButton.classList.remove('hidden-d');
    burgerNavbar.classList.remove('activemenu');
    burgerNavbar.classList.add('hidden-d');
}));
