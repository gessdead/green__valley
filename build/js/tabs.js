$('.promo-slider__tabs-item a').on('click', function(event) {
event.preventDefault();
var $linkHref = $(this).attr('href');

$('.promo-slider .promo-slider__item').removeClass('active');
$('.promo-slider ' + $linkHref).addClass('active');

$('.service-slider .service-slider__descr span').removeClass('active');
$('.service-slider ' + $linkHref).addClass('active');

$('.service-slider .service-slider__list').removeClass('active');
$('.service-slider ' + $linkHref).addClass('active');
});