const endForm = document.querySelector(".end-form");
const btnClose = document.querySelector(".end-form__cross");

btnClose.addEventListener("click", () => {
  endForm.classList.remove("end-form__visible");
});
