// -----------------------------------------------------------------------
// Fixed Page Top Link
// -----------------------------------------------------------------------
$(function () {
  var topBtn = $(".toTop");
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
    var scrollHeight = $(document).height(); //ページ全体の高さ
    var scrollPos = $(window).height() + $(window).scrollTop(); //現在地
    var footerHeight = $("footer").innerHeight(); //フッタの高さ
    if (scrollHeight - scrollPos <= footerHeight) {
      //ドキュメントの高さと現在地の差がfooterの高さ以下になったら
      topBtn.css({
        position: "absolute",
        bottom: footerHeight,
      });
    } else {
      topBtn.css({
        position: "fixed",
        bottom: "20px",
      });
    }
  });
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});
// -----------------------------------------------------------------------
// In Page Link
// -----------------------------------------------------------------------
function inPageLinkPos(inPageHeaderHeight) {
  $(function () {
    $('a[href^="#"]').click(function () {
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "html" : href);
      var position = target.offset().top - inPageHeaderHeight;
      $("html,body").animate(
        {
          scrollTop: position,
        },
        speed,
        "swing"
      );
      return false;
    });
  });
}

inPageLinkPos(145);

if (window.matchMedia("(max-width: 767px)").matches) {
  inPageLinkPos(100);
}
// -----------------------------------------------------------------------
// Nav
// -----------------------------------------------------------------------
$(function () {
  $(".hamburger").on("click", function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $("nav").css({
        visibility: "visible",
        opacity: 1,
      });
    } else {
      $("nav").css({
        visibility: "hidden",
        opacity: 0,
      });
    }
    return false;
  });
});
// -----------------------------------------------------------------------
// Nav Current
// -----------------------------------------------------------------------
$(function () {
  $(".gNav .current").removeClass("current");
  $(".gNav a")
    .filter(function () {
      return $(this).prop("href") == location.href;
    })
    .addClass("current");
});
// -----------------------------------------------------------------------
// Modal
// -----------------------------------------------------------------------
$(function () {
  $(".modalOpen").each(function () {
    $(this).on("click", function () {
      var id = $(this).attr("modalId");
      var modal = document.getElementById(id);
      $(".modalArea").fadeIn();
      $(modal).fadeIn();
    });
    $(".modalClose").on("click", function () {
      $(".modalArea").fadeOut();
      $(modal).fadeOut();
    });
  });
});
// -----------------------------------------------------------------------
// img Change
// -----------------------------------------------------------------------
$(function () {
  var img = $("img");
  var pc = "_pc.";
  var sp = "_sp.";
  var spWidth = 768;

  function imageSwitch() {
    var windowWidth = parseInt($(window).width());
    img.each(function () {
      var $this = $(this);
      if (windowWidth >= spWidth) {
        $this.attr("src", $this.attr("src").replace(sp, pc));
      } else {
        $this.attr("src", $this.attr("src").replace(pc, sp));
      }
    });
  }
  imageSwitch();
  var resizeTimer;
  $(window).on("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      imageSwitch();
    }, 100);
  });
});

// -----------------------------------------------------------------------
// HideButton
// -----------------------------------------------------------------------
$(function () {
  $(".hide").children().hide();
  $(".hideButton").on("click", function () {
    $(".hide").children().fadeIn();
    $(".hide").contents().unwrap();
    $(".hideButton").fadeOut();
  });
});

// -----------------------------------------------------------------------
// SNS Button Text
// -----------------------------------------------------------------------
$(function () {
  var pageURLTxt = $('meta[property="og:url"]').attr("content");
  var pageTitleTxt = $('meta[property="og:title"]').attr("content");
  //facebook
  $(".fb").attr("href", "http://www.facebook.com/share.php?u=" + pageURLTxt + "&t=" + pageTitleTxt);
  //twitter
  $(".tw").attr("href", "https://twitter.com/intent/tweet?text=" + pageTitleTxt + "&url=" + pageURLTxt);
  //line
  $(".line").attr("href", "http://line.me/R/msg/text/?" + pageTitleTxt + " " + pageURLTxt);
});

// -----------------------------------------------------------------------
// Random
// -----------------------------------------------------------------------
$(function () {
  var random = [];
  $(".random").each(function () {
    random.push($(this).html());
  });
  var r = random.length;
  for (var i = r - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = random[i];
    random[i] = random[j];
    random[j] = tmp;
  }
  $(".random").empty();
  var i = 0;
  $(".random").each(function () {
    $(this).append(random[i]);
    i++;
  });
});

// -----------------------------------------------------------------------
// Slider
// -----------------------------------------------------------------------

$(function () {
  var setImg = $(".slider__inner");
  var fadeSpeed = 500;
  var switchDelay = 5000;
  $(setImg).children("img").css({ opacity: "0" });
  $(setImg + " img:first")
    .stop()
    .animate({ opacity: "1", zIndex: "1" }, fadeSpeed);
  setInterval(function () {
    $(setImg + " :first-child")
      .animate({ opacity: "0" }, fadeSpeed)
      .next("img")
      .animate({ opacity: "1" }, fadeSpeed)
      .end()
      .appendTo(setImg);
  }, switchDelay);
});

// -----------------------------------------------------------------------
//
// -----------------------------------------------------------------------
/*$(function () {
  if (window.matchMedia("(min-width: 767px)").matches) {
    $(window).scroll(function () {
      var positionT = $(".section__inner").offset().top;
      var positionB = $(".section__inner").offset().top + $(".section__inner").height() - $(".shere").height();
      var scroll = $(window).scrollTop();

      if (scroll > positionT && scroll < positionB) {
        $(".shere").css({
          position: "fixed",
          top: "20px",
          left: "auto",
          bottom: "inherit",
        });
      } else if (scroll > positionB) {
        $(".shere").css({
          position: "absolute",
          top: "inherit",
          left: "auto",
          bottom: "0",
        });
      } else {
        $(".shere").css({
          position: "absolute",
          top: "55px",
          left: "0",
          bottom: "inherit",
        });
      }
    });
  } else {
  }
});*/
