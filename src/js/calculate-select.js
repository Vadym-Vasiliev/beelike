// поліфіл для метода форіч для нодліст, щоб браезери які не знають форіч почали бачити форіч
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
// dropDownWrapper для того щоб працювала подібна форма теж
document
  .querySelectorAll(".calculate-form__dropdown")
  .forEach(function (dropDownWrapper) {
    //знаходимо елементи
    const dropDownBtn = dropDownWrapper.querySelector(
      ".calculate-form__dropbtn"
    );
    const dropDownList = dropDownWrapper.querySelector(".calculate-form__list");
    const dropDownListItems = dropDownList.querySelectorAll(
      ".calculate-form__item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".calculate-form__input-hidden"
    );

    // клік по кнопці
    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("calculate-form__list--visible");
    });

    //вибір елемента
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove("calculate-form__list--visible");
      });
    });

    // клік не в ліст
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownList.classList.remove("calculate-form__list--visible");
      }
    });

    // клік по кнопці
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        dropDownList.classList.remove("calculate-form__list--visible");
      }
    });
  });
