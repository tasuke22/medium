// アコーディオン
$(function () {
  $(".js-qurstion")
    .on("click", function () {
      $(this).next().slideToggle();
    })
    .eq(0)
    .trigger("click");
});

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 5,
  centeredSlides: true,
  spaceBetween: 20,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  speed: 2000,
  effect: "slide",
  touchStartForcePreventDefault: false,
  passiveListeners: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
