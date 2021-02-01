$(function() {

	accordion();
	popupInit();
	mobileMenu();
	dashboardPage();
});

const accordion = () => {

	$(".accordion-item__header").on("click", function () {
	    if ($(this).hasClass("_active")) {
	        $(this).removeClass("_active");
	        $(this)
	            .siblings(".accordion-item__body")
	            .slideUp(200);
	    } else {
	        $(".accordion-item__header").removeClass("_active");
	        $(this).addClass("_active");
	        $(".accordion-item__body").slideUp(200);
	        $(this)
	            .siblings(".accordion-item__body")
	            .slideDown(200);
	    }
	});
}

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

const dashboardPage = () => {

	$(document).on('click', '.js-dashboard-nav-button', function(){
			
		$(this).toggleClass('_active').siblings().slideToggle();
	})
}