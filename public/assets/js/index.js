new Splide(".splide", {
  type: "fade", // フェード
}).mount();

$('.submit-btn--deco').click(() => {
  $('.submit-btn--btn').click();
})

//クリックでアニメーション
var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },500);
};

var bubblyButtons = document.getElementsByClassName("works--window--head--btn");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}


$(function() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    //画面横幅が768px以下のときの処理
    $(".splide__arrow--next").click(function(){
      if($(".profile--list--item01").hasClass("is-visible")){
        $(".profile--list").css("background-position","top 50% left 50.0%");
      } else if($(".profile--list--item02").hasClass("is-visible")){
        $(".profile--list").css("background-position","top 50% left 88.9%");
      }
    });
    $(".splide__arrow--prev").click(function(){
      if($(".profile--list--item03").hasClass("is-visible")){
        $(".profile--list").css("background-position","top 50% left 50.0%");
      } else if($(".profile--list--item02").hasClass("is-visible")){
        $(".profile--list").css("background-position","top 50% left 10.8%");
      }
    });
  } else {
    //画面横幅が769px以上のときの処理
    $(".splide__arrow--next").click(function(){
      if($(".profile--list--item01").hasClass("is-visible")){
        $(".profile--list").css("background-position","top 50% left 53.7%");
      } else if($(".profile--list--item02").hasClass("is-visible")){
        $(".profile--list").css("background-position","top 50% right 0");
      }
    });
    $(".splide__arrow--prev").click(function(){
      if($(".profile--list--item03").hasClass("is-visible")){
        $(".profile--list").css("background-position","top 50% left 53.7%");
      } else if($(".profile--list--item02").hasClass("is-visible")){
        $(".profile--list").css("background-position","top 50% left 7.3%");
      }
    });
  };
});
