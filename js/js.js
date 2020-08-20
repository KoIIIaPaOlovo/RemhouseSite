$(document).ready(function(){
  $('.works__slider').slick({
      slidesToShow:1,
      slidesToScroll:1,
      draggable:false,
      infinite:true,
      fade:true,
      arrows:true,
      speed:300,
      dots:true
  });
  $('.works__subslider').slick({
    slidesToShow:1,
    slidesToScroll:1,
    draggable:false,
    infinite:true,
    fade:true,
    arrows:false,
    speed:500,
    dots:true,
    autoplay:false,
    pauseOnHover:true,
    asNavFor:'.works__navslider'
});
$('.works__navslider').slick({
  slidesToShow:3,
  slidesToScroll:1,
  draggable:false,
  infinite:true,
  fade:false,
  arrows:false,
  speed:300,
  dots:false,
  variableWidth:true,
  focusOnSelect: true,
  asNavFor:'.works__subslider'
});
     
});  

  $('.header__button').on('click',function(s){
    $('.modal3').addClass('modal--active');
  });

  $('.header__call').on('click',function(s){
    $('.modal3').addClass('modal--active');
  });

  $('.packets__button').on('click',function(s){
    $('.modal3').addClass('modal--active');
  });

  $('.works__button1').on('click',function(s){
    $('.modal3').addClass('modal--active');
  });

  $('.works__button2').on('click',function(s){
    $('.modal3__copy').addClass('modal--active');
  });


  $('.smeta__button').on('click',function(s){
    $('.modal3__copy').addClass('modal--active');
  });

  $('.stages__button').on('click',function(s){
    $('.modal3__copy').addClass('modal--active');
  });

  $('.modal__close').on('click',function(s){
    $('.modal3').removeClass('modal--active');
  });

    
  

  