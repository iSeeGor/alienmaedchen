$(function() {
    
	mobileMenu();
});

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