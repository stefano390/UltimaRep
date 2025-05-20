(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    // Cierra el menú al hacer clic en un enlace del mismo
    const menuLinks = document.querySelectorAll('.nav__link a');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('nav__link--show');
        });
    });
})();
