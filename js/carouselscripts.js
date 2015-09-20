
$('.opers-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	cssEase: 'linear',
	asNavFor: '.opers-slider-nav',
	dots: true,
	autoplay: false,
  	autoplaySpeed: 4000
});

$('.opers-slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.opers-slider',
	centerMode: true,
	focusOnSelect: true,
	arrows: false
});

