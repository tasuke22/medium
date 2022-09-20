AOS.init({
  offset: 300,
  delay: 150,
  duration: 500,
  easing: "ease-in",
  once: true,
});

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
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
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
