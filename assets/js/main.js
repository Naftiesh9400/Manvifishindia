/* ===================================================================
    
<<<<<<< HEAD
	Author          : Valid Theme
	Template Name   : Agrica - Organic Farm Agriculture Template
	Version         : 1.0
    
* ================================================================= */
(function ($) {
	"use strict";

	$(document).ready(function () {
=======
    Author          : Valid Theme
    Template Name   : Agrica - Organic Farm Agriculture Template
    Version         : 1.0
    
* ================================================================= */
(function($) {
	"use strict";

	$(document).ready(function() {
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2



		/* ==================================================
<<<<<<< HEAD
			# Tooltip Init
=======
		    # Tooltip Init
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		===============================================*/
		$('[data-toggle="tooltip"]').tooltip();


		/* ==================================================
<<<<<<< HEAD
			# Youtube Video Init
=======
		    # Youtube Video Init
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		 ===============================================*/
		$('.player').mb_YTPlayer();



		/* ==================================================
<<<<<<< HEAD
			# Scrolla active
=======
		    # Scrolla active
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		===============================================*/
		$('.animate').scrolla();


		/* ==================================================
<<<<<<< HEAD
			# imagesLoaded active
		===============================================*/
		$('#gallery-masonary,#shop-masonary').imagesLoaded(function () {

			/* Filter menu */
			$('.mix-item-menu').on('click', 'button', function () {
=======
		    # imagesLoaded active
		===============================================*/
		$('#gallery-masonary,#shop-masonary').imagesLoaded(function() {

			/* Filter menu */
			$('.mix-item-menu').on('click', 'button', function() {
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({
					filter: filterValue
				});
			});

			/* filter menu active class  */
<<<<<<< HEAD
			$('.mix-item-menu button').on('click', function (event) {
=======
			$('.mix-item-menu button').on('click', function(event) {
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
				event.preventDefault();
			});

			/* Filter active */
			var $grid = $('#gallery-masonary').isotope({
				itemSelector: '.gallery-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.gallery-item',
				}
			});

			/* Filter active */
			var $grid = $('#shop-masonary').isotope({
				itemSelector: '.product',
				percentPosition: true,
				masonry: {
					columnWidth: '.product',
				}
			});

		});


		/* ==================================================
<<<<<<< HEAD
			# Fun Factor Init
		===============================================*/
		$('.timer').countTo();
		$('.fun-fact').appear(function () {
=======
		    # Fun Factor Init
		===============================================*/
		$('.timer').countTo();
		$('.fun-fact').appear(function() {
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
			$('.timer').countTo();
		}, {
			accY: -100
		});

		/* ==================================================
<<<<<<< HEAD
			# Magnific popup init
=======
		    # Magnific popup init
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		 ===============================================*/
		$(".popup-link").magnificPopup({
			type: 'image',
			// other options
		});

		$(".popup-gallery").magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			// other options
		});

		$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

<<<<<<< HEAD
		$('.magnific-mix-gallery').each(function () {
=======
		$('.magnific-mix-gallery').each(function() {
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
			var $container = $(this);
			var $imageLinks = $container.find('.item');

			var items = [];
<<<<<<< HEAD
			$imageLinks.each(function () {
=======
			$imageLinks.each(function() {
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
				var $item = $(this);
				var type = 'image';
				if ($item.hasClass('magnific-iframe')) {
					type = 'iframe';
				}
				var magItem = {
					src: $item.attr('href'),
					type: type
				};
				magItem.title = $item.data('title');
				items.push(magItem);
			});

			$imageLinks.magnificPopup({
				mainClass: 'mfp-fade',
				items: items,
				gallery: {
					enabled: true,
					tPrev: $(this).data('prev-text'),
					tNext: $(this).data('next-text')
				},
				type: 'image',
				callbacks: {
<<<<<<< HEAD
					beforeOpen: function () {
=======
					beforeOpen: function() {
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
						var index = $imageLinks.index(this.st.el);
						if (-1 !== index) {
							this.goTo(index);
						}
					}
				}
			});
		});


		/* ==================================================
<<<<<<< HEAD
			_Progressbar Init
		 ===============================================*/
		function animateElements() {
			$('.progressbar').each(function () {
=======
		    _Progressbar Init
		 ===============================================*/
		function animateElements() {
			$('.progressbar').each(function() {
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
				var elementPos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				var percent = $(this).find('.circle').attr('data-percent');
				var animate = $(this).data('animate');
				if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
					$(this).data('animate', true);
					$(this).find('.circle').circleProgress({
						// startAngle: -Math.PI / 2,
						value: percent / 100,
						size: 130,
						thickness: 3,
						lineCap: 'round',
						emptyFill: '#f1f1f1',
						fill: {
							gradient: ['#49a760', '#49a760']
						}
<<<<<<< HEAD
					}).on('circle-animation-progress', function (event, progress, stepValue) {
=======
					}).on('circle-animation-progress', function(event, progress, stepValue) {
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
						$(this).find('strong').text((stepValue * 100).toFixed(0) + "%");
					}).stop();
				}
			});

		}

		animateElements();
		$(window).scroll(animateElements);


		/* ==================================================
<<<<<<< HEAD
			# Banner Carousel
		 ===============================================*/
=======
            # Banner Carousel
         ===============================================*/
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		const bannerFade = new Swiper(".banner-fade", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: false,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},

			// If we need pagination
			pagination: {
				el: '.banner-pagination',
				type: 'bullets',
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}

			// And if we need scrollbar
			/*scrollbar: {
<<<<<<< HEAD
			el: '.swiper-scrollbar',
		  },*/
=======
            el: '.swiper-scrollbar',
          },*/
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		});


		/* ==================================================
<<<<<<< HEAD
			# Testimonials Carousel
		 ===============================================*/
=======
            # Testimonials Carousel
         ===============================================*/
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		const testimonialCarousel = new Swiper(".testimonial-carousel", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},

			// And if we need scrollbar
			/*scrollbar: {
<<<<<<< HEAD
			el: '.swiper-scrollbar',
		  },*/
=======
            el: '.swiper-scrollbar',
          },*/
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		});


		/* ==================================================
<<<<<<< HEAD
			# Testimonials Carousel
		 ===============================================*/
=======
            # Testimonials Carousel
         ===============================================*/
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		const testimonialTwoCarousel = new Swiper(".testimonial-style-two-carousel", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},

			// And if we need scrollbar
			/*scrollbar: {
<<<<<<< HEAD
			el: '.swiper-scrollbar',
		  },*/
=======
            el: '.swiper-scrollbar',
          },*/
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		});


		/* ==================================================
<<<<<<< HEAD
			# Gallery Style One Carousel
		 ===============================================*/
=======
            # Gallery Style One Carousel
         ===============================================*/
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		const galleryOne = new Swiper(".gallery-style-one-carousel", {
			// Optional parameters
			loop: true,
			freeMode: true,
			grabCursor: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: false,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			breakpoints: {
				991: {
					slidesPerView: 2,
				},
				1400: {
					slidesPerView: 3,
				}
			},
		});


		/* ==================================================
<<<<<<< HEAD
			# Service Carousel
		 ===============================================*/
=======
            # Service Carousel
         ===============================================*/
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		const serviceOneCarousel = new Swiper(".service-style-two-carousel", {
			// Optional parameters
			loop: true,
			freeMode: true,
			grabCursor: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				1400: {
					slidesPerView: 3,
					spaceBetween: 60,
				}
			},
		});


		/* ==================================================
<<<<<<< HEAD
			# Team Carousel
		 ===============================================*/
=======
            # Team Carousel
         ===============================================*/
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		const teamCarousel = new Swiper(".team-style-one-carousel", {
			// Optional parameters
			loop: true,
			freeMode: true,
			grabCursor: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				}
			},
		});


		/* ==================================================
<<<<<<< HEAD
			# Clients Carousel
		 ===============================================*/
=======
            # Clients Carousel
         ===============================================*/
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		const brandOneCarousel = new Swiper(".brand-style-one-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 2,
			spaceBetween: 15,
			autoplay: true,
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
				}
			},
		});


		/* ==================================================
<<<<<<< HEAD
			# Product Cateogry Carousel
		 ===============================================*/
=======
            # Product Cateogry Carousel
         ===============================================*/
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		const proCatCarousel = new Swiper(".pro-cat-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			pagination: {
				el: ".product-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".product-button-next",
				prevEl: ".product-button-prev"
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 55,
				}
			},
		});


		/* ==================================================
<<<<<<< HEAD
			# Brand Carousel
=======
		    # Brand Carousel
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		 ===============================================*/
		const brand6col = new Swiper(".brand5col", {
			// Optional parameters
			loop: true,
			slidesPerView: 2,
			spaceBetween: 30,
			autoplay: false,
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 60,
				},
				1199: {
					slidesPerView: 5,
					spaceBetween: 60,
				}
			},
		});


		/* ==================================================
<<<<<<< HEAD
			# Product Gallery Carousel
		 ===============================================*/
=======
            # Product Gallery Carousel
         ===============================================*/
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		const productGallery = new Swiper(".product-gallery-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 2,
			spaceBetween: 30,
			autoplay: true,
			breakpoints: {
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
			},
		});


		/* ==================================================
<<<<<<< HEAD
			# Related Product Carousel
		 ===============================================*/
=======
            # Related Product Carousel
         ===============================================*/
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		const relatedProduct = new Swiper(".related-product-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 4,
				},
			},
		});


		/* ==================================================
<<<<<<< HEAD
			Contact Form Handling (FormSubmit)
		================================================== */
		/* ==================================================
			Contact Form Handling (FormSubmit)
		================================================== */
		$(document).on('submit', '#contact-page-form, #newsletter-form', function (e) {
			e.preventDefault();
			var form = this;
			var $form = $(this);
			var $btn = $form.find('button[type="submit"]');
			var originalText = $btn.html();

			$btn.prop('disabled', true).html('<i class="fa fa-spinner fa-spin"></i> Sending...');

			var formData = new FormData(form);

			fetch(form.action, {
				method: 'POST',
				body: formData,
				headers: {
					'Accept': 'application/json'
				}
			})
				.then(response => {
					if (response.ok) {
						$('#success-popup').fadeIn();
						$('#success-popup p').text($form.attr('id') === 'newsletter-form' ?
							'Thank you for subscribing!' :
							'Your message has been sent successfully. We will get back to you soon!');
						form.reset();
					} else {
						// Fallback for non-JSON responses or errors
						alert('Oops! There was a problem submitting your form. Please try again.');
					}
				})
				.catch(error => {
					console.error('Error:', error);
					alert('Oops! There was a problem submitting your form. Please check your internet connection.');
				})
				.finally(() => {
					$btn.prop('disabled', false).html(originalText);
				});
		});

		// Close popup logic
		$(document).on('click', '.close-popup, #success-popup', function (e) {
			if (e.target === this || $(e.target).hasClass('close-popup')) {
				$('#success-popup').fadeOut();
			}
=======
		    Contact Form Validations
		================================================== */
		$('.contact-form').each(function() {
			var formInstance = $(this);
			formInstance.submit(function() {

				var action = $(this).attr('action');

				$("#message").slideUp(750, function() {
					$('#message').hide();

					$('#submit')
						.after('<img src="assets/img/ajax-loader.gif" class="loader" />')
						.attr('disabled', 'disabled');

					$.post(action, {
							name: $('#name').val(),
							email: $('#email').val(),
							phone: $('#phone').val(),
							comments: $('#comments').val()
						},
						function(data) {
							document.getElementById('message').innerHTML = data;
							$('#message').slideDown('slow');
							$('.contact-form img.loader').fadeOut('slow', function() {
								$(this).remove()
							});
							$('#submit').removeAttr('disabled');
						}
					);
				});
				return false;
			});
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		});


		/* ==================================================
<<<<<<< HEAD
			GSAP animation
=======
		    GSAP animation
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
		================================================== */

		gsap.set(".animation-shape", {
			yPercent: 10
		});

		gsap.to(".animation-shape", {
			yPercent: -100,
			ease: "none",
			scrollTrigger: {
				trigger: ".animation-shape",
				scrub: 1
			},
		});


	}); // end document ready function


	/* ==================================================
<<<<<<< HEAD
		Preloader Init
	 ===============================================*/
	function loader() {
		$(window).on('load', function () {
=======
        Preloader Init
     ===============================================*/
	function loader() {
		$(window).on('load', function() {
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
			$('#agrica-preloader').addClass('loaded');
			$("#loading").fadeOut(500);
			// Una vez haya terminado el preloader aparezca el scroll

			if ($('#agrica-preloader').hasClass('loaded')) {
				// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
<<<<<<< HEAD
				$('#preloader').delay(900).queue(function () {
=======
				$('#preloader').delay(900).queue(function() {
>>>>>>> bc7449aeed1bc186326cc6685a791aedc22723b2
					$(this).remove();
				});
			}
		});
	}
	loader();

})(jQuery); // End jQuery