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

  if ($(".box-body").length > 1) {
    $(".box-body").each(function (i, item) {
      var numText = String(i + 1);
      $(this).addClass("box-body" + "-" + numText);
    });
  }

  $("label").each(function () {
    var radioBtn = $(this).children("input[type='radio']");
    if (radioBtn.is(":checked")) {
      $(this).addClass("check");
    }

    radioBtn.change(function () {
      $(this).parent().addClass("check").siblings().removeClass("check");
    });
  });

  $("input[type='checkbox']")
    .each(function () {
      $(this).parent().addClass("checkbox-label");
    })
    .change(function () {
      if ($(this).is(":checked")) {
        $(this).parent().addClass("check");
      } else {
        $(this).parent().removeClass("check");
      }
    });

  $(".signup-content .btn-success").click(function () {
    location.href = "./main.html";
  });

  var loca = location.pathname;
  var cateBtn = $(".btn-default");
  cateBtn.each(function () {
    $(this).click(function (e) {
      e.preventDefault();
      $(this).toggleClass("on");
      $(this).parent().siblings().children().removeClass("on");
    });
  });

  var userName = $(".l-info .name").text().trim();
  $(".l-info .name").text(userName + " 님");

  var agreeCheckbox = $(".agree input[type='checkbox']");
  if (agreeCheckbox.is(":checked")) {
    agreeCheckbox.parent().addClass("on");
  }

  var agreeLabel = $(".agree label");
  agreeLabel.click(function (e) {
    e.preventDefault();
    if (!$(this).children().is(":checked")) {
      $(this).children().prop("checked", true);
      $(this).addClass("on");
    } else {
      $(this).children().prop("checked", false);
      $(this).removeClass("on");
    }
  });

  if (
    loca === "/apply/apply-step1.html" ||
    loca === "/apply/apply-step1-detail.html"
  ) {
    $("body").addClass("page-apply");
  } else if (loca === "/apply/apply-step2.html") {
    $("body").addClass("page-apply page-apply-detail");
  } else if (loca === "/apply/apply-final.html") {
    $("body").addClass("page-apply page-apply-final");
  } else if (loca === "/history/apply-history.html") {
    $("body").addClass("page-history");
  }

  if (loca === "/apply/apply-step1.html") {
    $(".go-prev").hide();
  }

  if ($("div[aria-label='로그인버튼']").length > 0) {
    $("body").addClass("page-login");
  }

  if ($(".summary .title").text().trim() === "회원가입") {
    $("body").addClass("page-signup");
  } else if ($(".summary .title").text().trim() === "내정보") {
    $("body").addClass("page-mypage");
  }
});
