AOS.init({
  offset: 300,
  delay: 150,
  duration: 500,
  easing: "ease-in",
  once: true,
});

// アコーディオン
$(function () {
  $(".js-question")
    .on("click", function () {
      $(this).next().slideToggle();
    })
    .eq(0)
    .trigger("click");
});

$(function () {
  // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
  $('a[href^="#"]').click(function () {
    var speed = 400;
    var adjust = -100;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href = $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? "html" : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
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

$(document).ready(function () {
  const $submitBtn = $(".js-submit");
  $("#form input,#form textarea").on("change", function () {
    if (
      $('#form input[type="name"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $("#form #privacy-check").prop("checked") === true
    ) {
      $submitBtn.prop("disabled", false);
    } else {
      $submitBtn.prop("disabled", true);
    }
  });
});
