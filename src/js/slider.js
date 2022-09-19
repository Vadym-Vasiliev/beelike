import $ from "jquery";
import "slick-carousel";

$(".team__body").slick({
  fade: true,
});

if (window.innerWidth < 768) {
  $(".problems-list").slick();
}
