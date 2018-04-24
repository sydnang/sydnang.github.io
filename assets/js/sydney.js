$(document).ready(function() { 

	//JQUERY FUNCTION NUMBER 1 hover over nav bar buttons 
	$(".nav-element").hover(function() {
		$(this).css('cursor', 'pointer');
	}, function() {
		$(this).css('cursor', 'auto');
	});

	//JQUERY FUNCTION NUMBER 2 scrollink
	$("a.nav-element").click(function(event) {
		event.preventDefautl();
		$("html, body").animate({scrollTop: $($(this).attr("href")).offset().top }, 500);
	});
	

	//JQUERY FUNCTION NUMBER 3 Back to top button appears when you scroll
	
	

	$("body").scroll(function() {
    	if ($(this).scrollTop() >= 50) {
    		console.log('you scrolled');        
        	$('#back-to-top').fadeIn(300);    
    	} else {
        	$('#back-to-top').fadeOut(300);   
    	}
	});

	//JQUERY FUNCTION NUMBER 4 Back to top brings you to top when you click
	$('#back-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                      
    }, 500);
	});


	//JQUERY FUNCTION NUMBER 5 wiggle photo upon hovering
	$('.nav-element').hover(function() {
		console.log('you hovered!');
		$(this).effect("shake", {times: 1}, 600);

	})

	//JQUERY FUNCTION NUMBER 6 fadeIn welcome message when the page first loads
	var pageload = function() {
		$('.sidebar-item').fadeIn(800);
		console.log('loaded');
	}
	pageload()

	console.log($(this).scrollTop());
	console.log(document.scrollingElement.scrollTop);

    $(".content").on( 'scroll', function(){
   		console.log('Event Fired');
	});

	$(".content").bind('scroll', function() {
   console.log('Event worked');
	}); 

	var p = $('html,body');
	$( ".info" ).text( "scrollTop:" + p.scrollTop() );



})