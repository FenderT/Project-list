$(document).ready(function(){
 $('.header-contacts__button, .products-blocks__buttons, .contacts-block__btn').on("click",function(){
  $('.background').show()
 });
 $('.popup-close').on("click",function(){
   $('.background').hide()
  });
});




/*production slick slider*/
$('.production-slider__top').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  asNavFor: '.production-slider__bottom',
	  responsive: [
	      {
	          breakpoint: 768,
	          settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	          prevArrow: '<div class="slider-arrow_main slider-arrow_main-slide slider-arrow_main_right"><div>',
	         nextArrow: '<div class="slider-arrow_main slider-arrow_main-slide slider-arrow_main_left"><div>',
	        }
	       },
	      {
	          breakpoint: 576,
	          settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	          arrows: true,
	          prevArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_prod_right"><div>',
	          nextArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_prod_left"><div>',
	        }
	      },
	    ],
  });
$('.production-slider__bottom').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.production-slider__top',
	  centerMode: true,
	  focusOnSelect: true,
	  prevArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_prod_right"><div>',
	  nextArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_prod_left"><div>',
  });

$('.feedback-slider').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  prevArrow: '<div class="slider-arrow_feedb slider-arrow_feedback slider-arrow_feedb_right"><div>',
	  nextArrow: '<div class="slider-arrow_feedb slider-arrow_feedback slider-arrow_feedb_left"><div>',
	  responsive: [
	      {
	          breakpoint: 768,
	          settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	          prevArrow: '<div class="slider-arrow_main slider-arrow_main-slide slider-arrow_main_right"><div>',
	          nextArrow: '<div class="slider-arrow_main slider-arrow_main-slide slider-arrow_main_left"><div>',
	        }
	       },
	      {
	          breakpoint: 576,
	          settings: {
	           slidesToShow: 1,
	           slidesToScroll: 1,
	           prevArrow: '<div class="slider-arrow_feedb slider-arrow_feedback slider-arrow_feedb_right"><div>',
	           nextArrow: '<div class="slider-arrow_feedb slider-arrow_feedback slider-arrow_feedb_left"><div>',
	        }
	      },
	    ]
  });

$('.main').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  prevArrow: '<div class="slider-arrow_main slider-arrow_main-slide slider-arrow_main_right"><div>',
	  nextArrow: '<div class="slider-arrow_main slider-arrow_main-slide slider-arrow_main_left"><div>',
	  responsive: [
	      {
	          breakpoint: 768,
	          settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	          prevArrow: '<div class="slider-arrow_main slider-arrow_main-slide slider-arrow_main_right"><div>',
	          nextArrow: '<div class="slider-arrow_main slider-arrow_main-slide slider-arrow_main_left"><div>',
	        }
	      },
	      {
	          breakpoint: 576,
	          settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	          prevArrow: '<div class="slider-arrow_main slider-arrow_main-slide slider-arrow_main_right"><div>',
	          nextArrow: '<div class="slider-arrow_main slider-arrow_main-slide slider-arrow_main_left"><div>',
	        }
	      }
	    ],
  });

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.752656, 56.002053],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),
        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Эта метка Доброго картона'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/map-marker/maps.png',
            // Размеры метки.
            iconImageSize: [64, 64],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-36, -66]
        
        });

    myMap.geoObjects
        .add(myPlacemark);

    myMap.behaviors
    .disable('scrollZoom');
    
});

$(document).ready(function() {
		$(".fixed-menu_link").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
		return false;
		});
});

jQuery(function($){
   $(".form__input").mask("+7(999) 999-99-99");
   $(".popup-form__input").mask("+7(999) 999-99-99");
   $(".offering-form__input").mask("+7(999) 999-99-99");
});
$(document).ready(function(){
	var link        = $('.mobile-menu__link');
	var link_active = $('.mobile-menu_active');
	var menu        = $('.mobile-menu__list');

	link.click(function(){
		link.toggleClass('mobile-menu_active');
		menu.toggleClass('mobile-menu_none');
	});

	link_active.click(function(){
		link_active.removeClass('mobile-menu_active')
	});
});

