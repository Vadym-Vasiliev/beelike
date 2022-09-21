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
    name: {
      required: true,
    },

    phone: {
      required: true,
    },
  },
});

$(".open-form-js").on("click", () => {
  Fancybox.show([{ src: "#form-content", type: "inline" }]);
});

$(".popup__form").on("submit", (e) => {
  $.ajax({
    type: "POST",
    url: "./mail.php",
    data: { name: "John" },
    success: function (data) {
      // ТУТ ЗАКРИВАЄШ МОДАЛКУ
      if ($(".popup__form").valid()) {
        Fancybox.close();
      } else {
        e.preventDefault();
      }
    },
    error: function (xhr, status, error) {
      console.error(xhr);
    },
  });
});

$(".calculate-form").on("submit", (e) => {
  e.preventDefault();
});

$(".callback-form").on("submit", (e) => {
  e.preventDefault();
});
