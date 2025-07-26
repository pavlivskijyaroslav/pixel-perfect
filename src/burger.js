(() => {
  const refs2 = {
    openBurgerBtn: document.querySelector('[data-burger-open]'),
    closeBurgerBtn: document.querySelector('[data-burger-close]'),
    burger: document.querySelector('[data-burger]'),
  };

  refs2.openBurgerBtn.addEventListener('click', toggleBurger);
  refs2.closeBurgerBtn.addEventListener('click', toggleBurger);

  function toggleBurger() {
    refs2.burger.classList.toggle('is-open');
  }
})();
