$(function() {

  //scroll_bg

  $(document).ready(function(){
    $('.drop-box').css('background-attachment', 'initial');
    function croll_bg(){
      var win_h = $(window).height();
      var scroll = $(this).scrollTop();
      var d_x = 250;  $('.drop-box').each(function(){      var off = $(this).offset();
        barr = off.top;
        var x = scroll + d_x - barr;
        $(this).css('background-position','center top ' + x + 'px');
      });
    }
    croll_bg();
    $(window).scroll(function(){
      croll_bg();
    });
  });


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


	 $('.navigation nav a').click(function () {
    	$.scrollTo($(this.getAttribute("data-scroll-to")), 1000, {
            offset: -120
		});
    });

	jVForms.initialize();

	if($(window).width() <= 992){
	    if($(window).width() <= 480){
    	    /*if($(window).width() <= 458){
        	    $(".navigation").sticky({ topSpacing: 172 });
    	    }else{
    	        $(".navigation").sticky({ topSpacing: 130 });
    	    }*/
    	   $(".navigation").sticky({ topSpacing: 0 });
	    }else{
	        $(".navigation").sticky({ topSpacing: 123 });
	    }
	}else
    	$(".navigation").sticky({ topSpacing: 45 });

	
	
	if($(window).width() > 480)
	    $("header").sticky({ topSpacing: 0 });
	
	$(".popup-form").animated("bounceInDown", "fadeInDown");

	$(".description-box").animated("bounceInDown", "fadeInDown");


	$(".accordeon dd").hide().prev().click(function() {
		$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");
	});


	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$('.popup-gallery').magnificPopup({
						delegate: 'a',
						type: 'image',
						tLoading: 'Загрузка изображения #%curr%...',
						mainClass: 'mfp-fade mfp-img-mobile',
						gallery: {
							enabled: true,
							navigateByImgClick: true,
							preload: [0,1] // Will preload 0 - before current, and 1 after the current image
						},
						image: {
							tError: '<a href="%url%">Изображение #%curr%</a> не загружено.',
							titleSrc: function(item) {
								return '';
							}
						}
					});

	$('.popup-gallery2').magnificPopup({
						delegate: 'a',
						type: 'image',
						tLoading: 'Загрузка изображения #%curr%...',
						mainClass: 'mfp-fade mfp-img-mobile',
						gallery: {
							enabled: true,
							navigateByImgClick: true,
							preload: [0,1] // Will preload 0 - before current, and 1 after the current image
						},
						image: {
						  markup: '<div class="mfp-figure">'+
						            '<div class="mfp-close"></div>'+
						            '<div class="mfp-img"></div>'+
						            '<div class="mfp-bottom-bar">'+
						              '<div class="mfp-title"></div>'+
						              '<div class="mfp-counter"></div>'+
						            '</div>'+
						          '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

						  cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.

						  titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
						  // Or the function that should return the title. For example:
						  // titleSrc: function(item) {
						  //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
						  // }

						  verticalFit: true, // Fits image in area vertically

						  tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
						}
					});





	$(".main_mnu_button").click(function() {
			$("nav > ul").slideToggle();
		});


	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		mainClass: 'mfp-fade',
		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});



	$('.popup').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			mainClass: 'mfp-fade mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});


	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:5000,
	    nav:true,
	    navText:['<span><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></span>','<span><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></span>'],

	    pagination: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})

	//Документация: http://owlgraphic.com/owlcarousel/
	$('.owl-carousel5').owlCarousel({
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:5000,
	    nav:true,
	    navText:['<span><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></span>','<span><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></span>'],
	    pagination: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:4
	        }
	    }
	})

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	$('.owl-carousel2').owlCarousel({
	    loop:true,
	    margin:0,
	    autoplay:true,
	    autoplayTimeout:4000,
	    pagination: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	})

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	$('.owl-carousel3').owlCarousel({
	    loop:true,
	    margin:10,
	    autoplay:true,
	     nav:true,
	    navText:['<span><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></span>','<span><i class="fa fa-chevron-circle-right" aria-hidden="true"></i></span>'],

	    autoplayTimeout:4000,
	    pagination: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});



	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		
		    var m_method=$(this).attr('method');
            var m_action=$(this).attr('action');
            var m_data=$(this).serialize();
		$.ajax({
		  type: m_method,
                url: m_action,
                data: m_data,
		}).done(function() {
			$(".done-w").fadeIn();
			setTimeout(function() {
				// Done Functions
				$(".done-w").fadeOut();
				$.magnificPopup.close();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });






    jQuery(window).scroll(function(){
         var $sections = $('section');
			$sections.each(function(i,el){
		        var top  = $(el).offset().top-100;
		        var bottom = top +$(el).height();
		        var scroll = $(window).scrollTop();
		        var id = $(el).attr('id');
		    	if( scroll > top && scroll < bottom){
		            $('a.active').removeClass('active');
					$('a[data-scroll-to="#'+id+'"]').addClass('active');

		        }
		    })
		 });

	$("nav").on("click","a", function (event) {
	        // исключаем стандартную реакцию браузера
	        event.preventDefault();

	        // получем идентификатор блока из атрибута href
	        var id  = $(this).attr('data-scroll-to'),

	        // находим высоту, на которой расположен блок
	            top = $(id).offset().top;

	        // анимируем переход к блоку, время: 800 мс
	        $('body,html').animate({scrollTop: top}, 800);
	    });

});

ymaps.ready(function () {
        var map = new ymaps.Map("map", {
            center: [0, 0],
            zoom: 17,
            controls: ["zoomControl"]
        }, {
            maxZoom: 17,
        });
        var markers = new ymaps.GeoObjectCollection({}, {});
        map.behaviors.disable('scrollZoom');

        function create_office_placemark(office) {
            var coordinates = office.coord.split(',');

            coordinates[0] = parseFloat(coordinates[0]);
            coordinates[1] = parseFloat(coordinates[1]);

            return new ymaps.Placemark(coordinates, { balloonContent: office.text })
        }

        function update_markers() {
            map.geoObjects.remove(markers);
            markers = new ymaps.GeoObjectCollection({}, {});

            $('.block-contacts .text-description').hide();

            if ($('.block-contacts .countries .country.selected').length > 0) {
                var country_id = $('.block-contacts .countries .country.selected').first().data('id');
                var country = countries[country_id];

                if (country && country.text && country.text.length && country.text.length > 0) {
                    $('.block-contacts .text-description').show().html(country.text);
                }

                if ($('.block-contacts .cities .city.selected').length > 0) {
                    var city_id = $('.block-contacts .cities .city.selected').first().data('id');
                    var city = country.cities[city_id];

                    if (city && city.text && city.text.length && city.text.length > 0) {
                        $('.block-contacts .text-description').show().html(city.text);
                    }

                    for (var office_id in city.offices) {
                        var office = city.offices[office_id];
                        if (office.coord.length > 0) {
                            markers.add(create_office_placemark(office));
                        }
                    }
                } else {
                    for (var city_id in country.cities) {
                        var city = country.cities[city_id];
                        for (var office_id in city.offices) {
                            var office = city.offices[office_id];

                            if (office.coord.length > 0) {
                                markers.add(create_office_placemark(office));
                            }
                        }
                    }
                }
            } else {
                for (var country_id in countries) {
                    var country = countries[country_id];
                    for (var city_id in country.cities) {
                        var city = country.cities[city_id];
                        for (var office_id in city.offices) {
                            var office = city.offices[office_id];

                            if (office.coord.length > 0) {
                                markers.add(create_office_placemark(office));
                            }
                        }
                    }
                }
            }

            map.geoObjects.add(markers);
            map.setBounds(markers.getBounds());
        }

        update_markers();

        $('.block-contacts .countries .country').click(function () {
            var id = $(this).data('id');

            $('.block-contacts .countries .country').removeClass('selected');
            $(this).addClass('selected');

            $('.block-contacts .cities').show();
            $('.block-contacts .cities .city').hide();
            $('.block-contacts .cities .city-country-' + id).show();

            $('.block-contacts .cities .city').not(':visible').removeClass('selected');

            update_markers();
        });

        $('.block-contacts .cities .city').click(function () {
            $('.block-contacts .cities .city').removeClass('selected');
            $(this).addClass('selected');

            update_markers();
        });
    });
