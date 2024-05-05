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

$(function(){
  $('a[href^="#"]').click(function(){//href属性に#を含むaタグをクリックした時
    var href= $(this).attr("href");//クリックした要素のhref属性を取得
    var target = $(href == "#" || href == "" ? 'html' : href);//リンク先を取得
    var position = target.offset().top-50;//リンク先までの距離を取得
    $("html, body").animate({scrollTop:position}, 300);//スムーススクロール
    return false;
  });
});
