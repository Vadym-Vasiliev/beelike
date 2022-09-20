import $ from "jquery";
import validator from "jquery-validation";
import { Fancybox } from "@fancyapps/ui";

$.validator.setDefaults({
  debug: true,
  success: "valid",
});

$(".calculate-form").validate({
  rules: {
    position: {
      required: true,
    },
    count: {
      required: true,
    },
    destination: {
      required: true,
    },
  },
});

$(".callback-form").validate({
  rules: {
    name: {
      required: true,
    },
    phone: {
      required: true,
    },
  },
});

$(".popup__form").validate({
  rules: {
    nameForm: {
      required: true,
    },

    phoneForm: {
      required: true,
    },
  },
});

$(".open-form-js").on("click", () => {
  Fancybox.show([{ src: "#form-content", type: "inline" }]);
  if ($(".calculate-form").valid()) {
    Fancybox.show([{ src: "#form-content", type: "inline" }]);
  }
  if ($(".callback-form").valid()) {
    Fancybox.show([{ src: "#form-content", type: "inline" }]);
  }
  if ($(".popup__form").valid()) {
    Fancybox.show([{ src: "#form-content", type: "inline" }]);
  }
});

$(".popup__btn").on("click", (e) => {
  Fancybox.close();
});

// $(".causebox-bottom__form").on("submit", () => {
//   if ($(".causebox-bottom__form").valid()) {
//     Fancybox.show([{ src: "#dialog-content", type: "inline" }]);
//   }
// });
