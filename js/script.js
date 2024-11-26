
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

//Estilizando os efeitos de animaçôes  
ScrollReveal().reveal('.txt-topo-site', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});
ScrollReveal().reveal('.especialidades-box', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});
ScrollReveal().reveal('.txt-sobre', {
    origin: 'right',
    duration: 2000,
    distance: '20%'
});
ScrollReveal().reveal('.overlay', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});
ScrollReveal().reveal('.form', {
    origin: 'top',
    duration: 2000,
    distance: '20%'
});