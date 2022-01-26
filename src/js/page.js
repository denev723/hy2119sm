$(document).ready(function () {
  // 프로필 드롭박스 열고 닫기
  $(".ico-my[href$='#open']").click(function () {
    $(".mypage-box").addClass("on");
  });

  $(".btn-close[href$='#close']").click(function () {
    $(".mypage-box").removeClass("on");
  });

  // copyright
  var year = String(new Date().getFullYear());
  $(".copyright .year").text(year);

  // 메인페이지 비주얼
  $(".control-slider").bxSlider({
    mode: "horizontal",
    auto: true,
    controls: false,
    pause: 5000,
    speed: 1100,
    pager: true,
    pagerCustom: "#bx-pager"
  });

  // 메인페이지 서브 슬라이더
  $(".text-slider").slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    centerMode: true,
    arrows: false
  });
});
