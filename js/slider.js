$(document).ready(function(){
    // слайдер галереи
  $('.gallery__big-img-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    cssEase: 'ease-in-out',
    speed: 400,
    accessibility: false,
    arrows: false,
    asNavFor: '.gallery__small-list'
  });
  $('.gallery__small-img-list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.gallery__big-img-list',
    dots: false,
    cssEase: 'ease-in-out',
    speed: 400,
    centerMode: true,
    accessibility: false,
    arrows: false,
    focusOnSelect: true
  });

// слайдер отзывов
  $('.reviews__slider').slick({
     infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     cssEase: 'ease-in-out',
     speed: 400,
     responsive: [
       {
         breakpoint: 768,
         settings: "unslick"
       }
     ]
   });  

   var clicks = 2;
   $('.reviews__btn').on('click', function(e){
     e.preventDefault();
     if( (clicks % 2) == 0 ){
       $('.reviews__slider').slick('unslick'); 
     } else {
       $('.reviews__slider').slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         cssEase: 'ease-in-out',
         speed: 400,
         responsive: [
           {
             breakpoint: 768,
             settings: "unslick"
           }
         ]
       }); 
     }
     ++clicks;
   });

  //слайдер акций
  $('.sale-slider__inner').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      cssEase: 'ease-in-out',
      speed: 400,
      dots: true
    });

  //слайдер single room
  $('.about-room__list').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      cssEase: 'ease-in-out',
      speed: 400,
      arrows: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false
          }
        }
      ]
    });

  //зумер single room
  $('.about-room__list-zoom').on('click', function(e){
      e.preventDefault();
      var zoomedImg = $(".slick-slide[class*='slick-current']").find('img').attr('src');
      $('#zoomed-img img').attr('src', zoomedImg);
      $('#zoomed-img').toggle(400);
      $('.zoomed-img-wrapper').toggle(100);
      $('.about-room__list-zoom').toggle(400);
      $('.slick-arrow').toggle();
    });

    $('.zoomed-img__unzoom').on('click', function(e){
      e.preventDefault();
      $('#zoomed-img').toggle(400);
      $('.zoomed-img-wrapper').toggle(100);
      $('.about-room__list-zoom').toggle(400);
      $('.slick-arrow').toggle();
    });
});