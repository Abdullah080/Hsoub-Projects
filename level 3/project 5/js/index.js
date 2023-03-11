$(window).scroll(function () {
  if ($(this).scrollTop() >= 200) {
    $("nav").addClass("noTransparent");
  } else {
    $("nav").removeClass("noTransparent");
  }
});

$(document).ready(function () {
  $(".circle")
    .circleProgress({
      startAngle: -Math.PI / 2,
      fill: "#0575e6",
    })
    .on("circle-animation-progress", function (even, progress, stepValue) {
      $(this)
        .find("span")
        .html(Math.round(stepValue * 100) + "%");
    });
});
