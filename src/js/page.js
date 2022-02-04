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

  var filterBtn = $("a[href='#filter-open']");
  filterBtn.click(function () {
    $(this).parent().toggleClass("on");
  });

  var filterRadio = $("input[name='filter']");
  filterRadio.each(function () {
    if ($(this).is(":checked")) {
      $(this).parent().parent().addClass("checked");
    }
  });

  filterRadio.change(function () {
    var filterValue = $(this).attr("id");
    var status = $(".status");
    status.each(function () {
      var statusItem = $(this).parent().parent();
      var statusText = $(this).children().text();
      if (filterValue !== statusText) {
        statusItem.hide();
      } else {
        statusItem.show();
      }

      if (filterValue === "all") {
        statusItem.show();
      }
    });
    var checked = $(this).prop("checked");
    var parentItem = $(this).parent().parent();
    if (checked) {
      parentItem.addClass("checked");
      parentItem.siblings().removeClass("checked");
    }
  });

  var chargeArr = $("p.charge");
  chargeArr.each(function () {
    var chargeText = $(this).text().trim();
    if (chargeText === "") {
      $(this).text("담당자 미정");
    } else {
      $(this).text("담당자 " + chargeText);
    }
  });

  var detailStatus = $(".badge");
  if (detailStatus.length === 1) {
    if (detailStatus.text().trim() === "진행") {
      $(".go-edit").hide();
      $(".go-app-cancel").addClass("request");
    } else if (detailStatus.text().trim() !== "신청") {
      $(".go-edit").hide();
      $(".go-app-cancel").hide();
    }
  }

  $(".detail-row .title").each(function () {
    if ($(this).text().trim() === "담당 근무자") {
      if ($(this).next().text().trim() === "") {
        $(this).parent().hide();
      }
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
  } else if (loca === "/signup.html") {
    $("body").addClass("page-signup");
  } else if (loca === "/mypage.html") {
    $("body").addClass("page-mypage");
  } else if (loca === "/history/apply-history.html") {
    $("body").addClass("page-history");
  } else if (
    loca === "/history/apply-history-detail.html" ||
    loca === "/history/apply-history-detail-ing.html" ||
    loca === "/history/apply-history-detail-cancel.html" ||
    loca === "/history/apply-history-detail-cancel-success.html" ||
    loca === "/history/apply-history-detail-edit.html"
  ) {
    $("body").addClass("page-history page-history-detail");
  }

  if (loca === "/apply/apply-step1.html") {
    $(".go-prev").hide();
  }

  if ($("div[aria-label='로그인버튼']").length > 0) {
    $("body").addClass("page-login");
  }
});
