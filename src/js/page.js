$(document).ready(function () {
  // 프로필 드롭박스 열고 닫기
  $(".ico-my[href$='#open']").click(function () {
    $(".mypage-box").addClass("on");
  });

  $(".btn-close[href='#close']").each(function () {
    $(this).click(function () {
      $(this).parent().parent().parent().removeClass("on");
    });
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
    pagerCustom: "#bx-pager",
    touchEnabled: navigator.maxTouchPoints > 0
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

  var footerHeight = Math.round(
    $(".site-footer").outerHeight() +
      $(".bottom-wrapper .employee-btn-wrapper").outerHeight()
  );
  var bottomResult = footerHeight - 50 + "px";
  $(".top-btn").css({ bottom: bottomResult });

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

  $("a[href='#nothing']").click(function () {
    alert("준비중입니다.");
    location.reload();
  });

  var listArray = $(".list-group-item");

  listArray.each(function () {
    var status = $(this).children(".left").children(".status").text().trim();
    if (status === "cancel") {
      $(this).css({ color: "#aaaaaa" });
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

  if (
    $(".badge").text().trim() === "진행" &&
    $(".employee .form-control-static").text().trim() !== ""
  ) {
    $(".employee").show();
    $(".finish-date, .finish-content, .rating").hide();
  } else if ($(".badge").text().trim() === "완료") {
    $(".employee, .finish-date, .finish-content, .rating").show();
  } else {
    $(".employee, .finish-date, .finish-content, .rating").hide();
  }

  var time = 0;
  var hour = 0;
  var min = 0;
  var sec = 0;
  var timer;
  var confirm = false;

  $("#workTime").click(function () {
    if (confirm === false) {
      $("#workTime .text").html("근무종료&nbsp;&nbsp;");
      $("#workTime .timestamp").addClass("start");
      timer = setInterval(function () {
        time++;
        hour = Math.floor(min / 60);
        min = Math.floor(time / 60);
        sec = time % 60;

        var th = hour < 10 ? "0" + hour : hour;
        var tm = min < 10 ? "0" + min : min;
        var ts = sec < 10 ? "0" + sec : sec;

        $("#workTime .timestamp")
          .text(th + ":" + tm + ":" + ts)
          .addClass("start");
      }, 1000);
      confirm = true;
    } else {
      clearInterval(timer);
      confirm = false;
      $("#workTime .timestamp").removeClass("start");
      $("#workTime .text").html("근무시작&nbsp;&nbsp;");
    }
  });

  var sScore = Number($(".r-score").text().trim());
  var star = $(".star-logo");
  star.each(function (index, item) {
    if (index < sScore) {
      $(this).addClass("on");
    }
  });

  $(".box-type1 p").each(function () {
    var pText = $(this).text().trim();
    if (pText.includes("관리자")) {
      $(this).addClass("gray");
    }
  });

  $("#message").click(function (e) {
    e.preventDefault();
    var text = $("input[name='content']");
    if (text.length > 0) {
      var textEl = "<p>" + "[이민석] " + text.val() + "</p>";
      $(".box-type1").append(textEl);
    }
    text.val("");
  });

  $("a[href='#hide']").click(function () {
    $(".chatting-box").toggleClass("nochat");
    $(".reload-btn").toggleClass("disabled");
  });

  $("a[href='#reload']").click(function () {
    location.reload();
  });

  $("a[href='#completebox-on']").click(function () {
    $(".complete-box").addClass("on");
    $(window).scrollTop(0);
  });

  var body = $("body");
  var loca = location.pathname;
  var classification = loca.split("/");
  var pageNameSplit = classification[classification.length - 1];
  var result;

  $(".navbar .nav-item a").each(function () {
    var href = $(this).attr("href").split("/");
    if (pageNameSplit.includes("-")) {
      if (href[1] === pageNameSplit.split("-")[0]) {
        $(this).parent().addClass("on").siblings().removeClass("on");
      }
    } else {
      if (href[1] === pageNameSplit.split(".")[0]) {
        $(this).parent().addClass("on").siblings().removeClass("on");
      }
    }
  });

  if (pageNameSplit.split(".")[0] === "signup") {
    body.addClass("page-" + pageNameSplit.split(".")[0]);
  } else if (pageNameSplit && !pageNameSplit.includes("index.html")) {
    if (!classification[2].includes(".")) {
      result = classification[2];
      body.addClass("page-" + result);
    }
    if (pageNameSplit.includes(".") && !pageNameSplit.includes("-")) {
      result = pageNameSplit.split(".")[0];
      body.addClass("page-" + result);
    } else {
      var removeDot = pageNameSplit.split(".")[0];
      result = removeDot.split("-");
      if (result[result.length - 1] === "1") {
        body.addClass("page-apply-second");
      } else if (result[result.length - 1] === "2") {
        body.addClass("page-apply-middle");
      } else if (result[result.length - 1] === "final") {
        body.addClass("page-apply-final");
      } else if (result.length >= 3 || result[1] === "detail") {
        console.log(result);
        body.addClass("page-" + result[0] + "-detail");
        $(".page-title .desc").hide();
      }

      if (result[1] === "step") {
        $(".page-title .desc").show();
      }
    }
  }

  if (classification[1] !== "employee") {
    $(".navbar-employee, .bottom-wrapper").hide();
    $(".site-footer").css({ "margin-bottom": "0" });
  } else {
    $(".navbar-client").hide();
  }

  if (classification[1] === "employee") {
    $(".rating").hide();
  }

  if (loca === "/client/apply/apply-step1.html") {
    $(".go-prev").hide();
  }

  if ($("div[aria-label='로그인버튼']").length > 0) {
    $("body").addClass("page-login");
  }

  if (!$(body).hasClass("page-doing-detail")) {
    $(".chatting-box").hide();
    $(".bottom-wrapper").css({ "border-top": "none" });
  }
});
