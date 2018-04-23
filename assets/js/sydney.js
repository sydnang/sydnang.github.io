$(document).ready(function() { 
	//1. hover over nav bar buttons
	$(".nav-element").hover(function() {
		console.log('helloooo')
		$(this).css('cursor', 'pointer');
	}, function() {
		$(this).css('cursor', 'auto');
	});
	
	$("a.nav-element").click(function(event) {
		event.preventDefautl();
		$("html, body").animate({scrollTop: $($(this).attr("href")).offset().top }, 500);
	});
	



})