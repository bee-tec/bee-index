$(function () {
    // 电梯
    $(".toCompany").click(function () {
      window.scrollTo({
        top: $("#company").offset().top + 1,
        behavior: "smooth",
      });
    });
    $(".toCooperate").click(function () {
      window.scrollTo({
        top: $("#cooperate").offset().top - 500,
        behavior: "smooth",
      });
    });
    $(".toFlow").click(function () {
      window.scrollTo({
        top: $("#flow").offset().top - 100,
        behavior: "smooth",
      });
    });
    $(".toInstance").click(function () {
      window.scrollTo({
        top: $("#instance").offset().top - 300,
        behavior: "smooth",
      });
    });
    $(".toContact").click(function () {
      window.scrollTo({
        top: $("#contact").offset().top,
        behavior: "smooth",
      });
    });
    // 返回顶部
    // var offset = 300,
    //   offset_opacity = 1200,
    //   scroll_top_duration = 700,
    //   $back_to_top = $(".toTop");
    // $(window).scroll(function () {
    //   $(this).scrollTop() > offset
    //     ? $back_to_top.addClass("cd-is-visible")
    //     : $back_to_top.removeClass("cd-is-visible cd-fade-out");
    //   if ($(this).scrollTop() > offset_opacity) {
    //     $back_to_top.addClass("cd-fade-out");
    //   }
    // });
    // $back_to_top.on("click", function (event) {
    //   event.preventDefault();
    //   $("body,html").animate(
    //     {
    //       scrollTop: 0,
    //     },
    //     scroll_top_duration
    //   );
    // });
  });