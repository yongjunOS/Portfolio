$(document).ready(function () {
  // Trigger
  console.log("jQuery 로드됨!"); // 이것도 추가해서 테스트
  $(".trigger").click(function () {
    console.log("클릭됨!");
    $(this).toggleClass("active");
    $(".gnb").toggleClass("active");
  });
  $("section, .menu a").click(function () {
    $(".gnb").removeClass("active");
    $(".trigger").removeClass("active");
  });

  //   Smooth Scrolling
  $(".menu a, .gototop").click(function (e) {
    $.scrollTo(this.hash || 0, 900);
  });

  //  Change CSS with Scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header, .gototop").addClass("active");
    } else {
      $(window).scrollTop() < 50;
      $("header, .gototop").removeClass("active");
    }
  });

  //Slick.js :  history
  $(".history-slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
  });

  //Slick.js :  Project photo
  $(".project-photo").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplayspeed: 2000,
    cssEase: "linear"
  });
});
