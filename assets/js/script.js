window.onload = function() {
  luxy.init();
 }

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
