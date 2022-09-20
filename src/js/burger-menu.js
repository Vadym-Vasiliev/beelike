const burgerBtn = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".header__menu");
const burgerMenuListItem = document.querySelectorAll(".header-list__item");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("header__burger--open");
  burgerMenu.classList.toggle("header__menu--open");
  document.body.classList.toggle("burger-menu-open");
});

burgerMenuListItem.forEach((item) => {
  item.addEventListener("click", () => {
    burgerBtn.classList.remove("header__burger--open");
    burgerMenu.classList.remove("header__menu--open");
    document.body.classList.remove("burger-menu-open");
  });
});
