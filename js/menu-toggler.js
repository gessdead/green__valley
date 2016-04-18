$(document).ready(function(){
  $('#toggler').on('click', function(e){
    e.preventDefault();
    $('#hidden').slideToggle('slow');
  });

  $('.gallery__big-img-item').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.gallery__small-img-item'
  });
  $('.gallery__small-img-item').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.gallery__big-img-item',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
});