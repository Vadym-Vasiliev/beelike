const burgerBtn = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".header__menu");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("header__burger--open");
  burgerMenu.classList.toggle("header__menu--open");
  document.body.classList.toggle("burger-menu-open");
});
