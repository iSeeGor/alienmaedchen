$(function() {


	popupInit();
	mobileMenu();
});

const popupInit = () => {

	$('.js-popup').magnificPopup({
		type: 'inline',
		preloader: false,
		modal: true,
		// closeOnContentClick: true,
		// closeBtnInside: false,
	});

	// Close Popup
	$(document).on('click', '.js-popup-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
}

const mobileMenu = () => {

	$('.js-burger').on('click', function(){

		$(this).toggleClass('_active');
		
		menuToggle();
	});

	function menuToggle(){
		
		if($('.js-menu').hasClass('_opened')){
			$('.js-menu').removeClass('_opened').slideUp();
		} else {
			$('.js-menu').addClass('_opened').slideDown();
		}

	}
}