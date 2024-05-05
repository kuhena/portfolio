$("html").easeScroll({
  frameRate: 60,
  animationTime: 1000,
  stepSize: 120,
  pulseAlgorithm: 1,
  pulseScale: 8,
  pulseNormalize: 1,
  accelerationDelta: 20,
  accelerationMax: 1,
  keyboardSupport: true,
  arrowScroll: 50,
  touchpadSupport: true,
  fixedBackground: true
});

$("header nav a").click(function () {//ナビゲーションのリンクがクリックされたら
  $('#hamburger').click();
});

$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
          }
      });
  });
});
