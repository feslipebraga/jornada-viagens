const btnMenu = document.getElementById('btn-menu');
const navMenu = document.getElementById('header-menu');

btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
