// Hamburger Menu opening
// ----------------------
var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
	$hamburger.toggleClass("is-active");
	$('.panel').toggleClass('isOpen');
	$('.bodyWrapper').toggleClass('pushed');
});

var $closePanel = $(".closePanel");
$closePanel.on("click", function (e) {
	$hamburger.toggleClass("is-active");
	$('.panel').toggleClass('isOpen');
	$('.bodyWrapper').toggleClass('pushed');
});

$('.openSubPanel').click(function () {
	$(this).next('.subPanel').addClass('isOpen');
});

$('.closeSubPanel').click(function () {
	$('.subPanel').removeClass('isOpen');
});

$('.closePanel').click(function () {
	$('.panel').removeClass('isOpen');
	$('.bodyWrapper').removeClass('pushed');
});


// Share Icon Menu opening
var $shareIcon = $(".shareIcon");
$shareIcon.on("click", function (e) {
	$(".panelR").toggleClass("isOpenR");
	$('.bodyWrapper').toggleClass('pushedR');
});

$('.closePanelR').click(function () {
	$('.panelR').removeClass('isOpenR');
	$('.bodyWrapper').removeClass('pushedR');
});

$('.clickedIcon').click(function () {
	$('.panelR').removeClass('isOpenR');
	$('.bodyWrapper').removeClass('pushedR');
});


// Slick Slider
//-------------
$(document).ready(function () {

	// Slider Accroches
	$('.sliderAccroches').on('init', function (event, slick) {
		$('.accroche01_01').addClass('anim-accroche01_01');
		$('.accroche01_02').addClass('anim-accroche01_02');
		console.log("SliderAccroches OK");
	});

	$('.sliderAccroches').slick({
		autoplay: true,
		autoplaySpeed: 4500,
		arrows: true,
		dots: true,
	});

	$('.sliderAccroches').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		if (currentSlide != 0) { $('.accroche01_01').removeClass('anim-accroche01_01'); }
		if (currentSlide != 0) { $('.accroche01_02').removeClass('anim-accroche01_02'); }

	});

	$('.sliderAccroches').on('afterChange', function (event, slick, currentSlide, nextSlide) {
		if (currentSlide == 0) { $('.accroche01_01').addClass('anim-accroche01_01'); }
		if (currentSlide == 0) { $('.accroche01_02').addClass('anim-accroche01_02'); }
	});

	$('.sliderAccroches').on('afterChange', function (event, slick, currentSlide, nextSlide) {
		if (currentSlide != 1) { $('.accroche02_01').removeClass('anim-accroche02_01'); }
		if (currentSlide == 1) { $('.accroche02_01').addClass('anim-accroche02_01'); }
		if (currentSlide != 1) { $('.accroche02_02').removeClass('anim-accroche02_02'); }
		if (currentSlide == 1) { $('.accroche02_02').addClass('anim-accroche02_02'); }
	});

	$('.sliderAccroches').on('afterChange', function (event, slick, currentSlide, nextSlide) {
		if (currentSlide != 2) { $('.accroche03_01').removeClass('anim-accroche03_01'); }
		if (currentSlide == 2) { $('.accroche03_01').addClass('anim-accroche03_01'); }
		if (currentSlide != 2) { $('.accroche03_02').removeClass('anim-accroche03_02'); }
		if (currentSlide == 2) { $('.accroche03_02').addClass('anim-accroche03_02'); }
	});


	// Slider Hero 
	$('.sliderHero').on('init', function (event, slick) {
		$('.slider-img1').addClass('slider-animation-img1');
		console.log("sliderHero OK");
	});

	$('.sliderHero').slick({
		accessibility: true,
		dots: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
	});

	$('.sliderHero').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		if (currentSlide != 0) { $('.slider-img1').removeClass('slider-animation-img1'); }
	});

	$('.sliderHero').on('afterChange', function (event, slick, currentSlide, nextSlide) {
		if (currentSlide == 0) { $('.slider-img1').addClass('slider-animation-img1'); }
		if (currentSlide != 1) { $('.slider-txt1').removeClass('slider-animation-txt1'); $('.slider-txt2').removeClass('slider-animation-txt2'); }
		if (currentSlide == 1) { $('.slider-txt1').addClass('slider-animation-txt1'); $('.slider-txt2').addClass('slider-animation-txt2'); }
		if (currentSlide != 2) { $('.slider-txt3').removeClass('slider-animation-txt3'); $('.slider-img2').removeClass('slider-animation-img2'); }
		if (currentSlide == 2) { $('.slider-txt3').addClass('slider-animation-txt3'); $('.slider-img2').addClass('slider-animation-img2'); }
		if (currentSlide != 3) { $('.slider-txt4').removeClass('slider-animation-txt4'); }
		if (currentSlide == 3) { $('.slider-txt4').addClass('slider-animation-txt4'); }
	});

	// Slider Origine
	$('.sliderOrigine').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		dots: false,
		centerMode: true,
		// centerPadding: '30px',
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					centerMode: true,
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					centerMode: true,
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					centerMode: true,
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 450,
				settings: {
					centerMode: true,
					slidesToShow: 1,
				}
			},
		]
	});
});

// Contact Form

// $(document).ready(function () {
// 	$("#contactForm").submit(function (event) {
// 		// Prevent the form submission
// 		event.preventDefault();
// 		submitForm();
// 		console.log('after Submit form');
// 	});

// 	function submitForm() {
// 		// Initiate Variables With Form Content
// 		var name = $("#name").val();
// 		var email = $("#email").val();
// 		var message = $("#message").val();
// 		var formData = { name: name, email: email, message: message };

// 		$.ajax({
// 			type: "POST",
// 			url: "php/formValidating.php",
// 			data: formData,
// 			success: function (text) {
// 				// if (text == "success") {
// 				// 	formSuccess();
// 				// }
// 				console.log(text);
// 			}
// 		});
// 	}
// 	function formSuccess() {
// 		window.location.assign("../contactThankYou.html");
// 	}
// });


// $(function () {
// 	// Get the form
// 	var formulaire = $('#contactForm');

// 	// Get the message div
// 	var formMessages = $('#form-messages');

// 	// Set up an event listener for the contact form.
// 	$(formulaire).submit(function (event) {

// 		// Stop the browser from submitting the form.
// 		event.preventDefault();

// 		// Serialize the form data.
// 		var formData = $(formulaire).serialize();

// 		// Submit the form using AJAX.
// 		$.ajax({
// 			type: 'POST',
// 			url: $(formulaire).attr('action'),
// 			data: formData
// 		})
// 			.done(function (response) {
// 				// Make sure that the formMessages div has the 'success' class.
// 				$(formMessages).removeClass('error');
// 				$(formMessages).addClass('success');

// 				// Set the message text.
// 				$(formMessages).text(response);

// 				// Clear the form.
// 				$('#name').val('');
// 				$('#email').val('');
// 				$('#message').val('');
// 			})
// 			.fail(function (data) {
// 				// Make sure that the formMessages div has the 'error' class.
// 				$(formMessages).removeClass('success');
// 				$(formMessages).addClass('error');

// 				// Set the message text.
// 				if (data.responseText !== '') {
// 					$(formMessages).text(data.responseText);
// 				} else {
// 					$(formMessages).text('Une erreur s\'est produite, votre message n\'a pas été envoyé !');
// 				}
// 			});

// 	});
// });

$(document).ready(function () {

	window.verifyRecaptchaCallback = function (response) {
		$('input[data-recaptcha]').val(response).trigger('change');
	}

	window.expiredRecaptchaCallback = function () {
		$('input[data-recaptcha]').val("").trigger('change');
	}

	$('#contactForm').validator();

	$('#contactForm').on('submit', function (e) {
		if (!e.isDefaultPrevented()) {
			var url = "./php/formProcess.php";

			$.ajax({
				type: "POST",
				url: url,
				data: $(this).serialize(),
				success: function (res) {
					res = JSON.parse(res);
					// console.log(res);

					// we recieve the type of the message: success x danger and apply it to the form
					var messageAlert = 'alert-' + res.type;
					var messageText = res.message;

					// let's compose Bootstrap alert box HTML
					var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
					if (messageAlert && messageText) {
						// inject the alert to .messages div in our form
						$('#contactForm').find('.messages').html(alertBox);
						// empty the form
						$('#contactForm')[0].reset();
						// empty the Recaptcha
						grecaptcha.reset();
					}
				}
			});
			return false;
		}
	})
});