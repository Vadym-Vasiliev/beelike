import $ from "jquery";
import "slick-carousel";

if (window.innerWidth < 768) {
  $(".problems-list").slick({
    dots: true,
  });
}

$(".team__body").slick({
  fade: true,
  cssEase: "linear",
});
