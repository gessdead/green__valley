var linkHref;

$('.promo-slider__tabs-item a').on('click', function(event) {
  event.preventDefault();
  $(this).closest('.promo-slider').find('.promo-slider__item.active').removeClass('active')
  $(this).closest('.promo-slider__item').addClass('active');

  $(this).closest('.promo-slider').find('.promo-slider__item.active').removeClass('active');
  linkHref = $(this).attr('href');
  $(linkHref).addClass('active');
});