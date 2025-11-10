const navMenu     = document.querySelector('.header .header__menu');
const menuOverlay = document.querySelector('.header .menu__overlay');
const navLinks    = document.querySelector('.nav__links');

const toggleOverlay = () => {
  menuOverlay?.classList.toggle('hiddenMenu');
  navLinks?.classList.toggle('hideMenu')
};

navMenu?.addEventListener('click', toggleOverlay);


document.querySelector('.nav__links')?.addEventListener('click', function (e) {
    e.preventDefault();
  
    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

