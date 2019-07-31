$(document).ready(function(){

	/* -------------------------------------------------------------------
	 * ## Menu
	 * ------------------------------------------------------------------- */

	 var menuBtn = $(".menu_icon"), // declaracion de variables
		menu = $("#Menu ul");
		fondo = $("body");

        menuBtn.click(function(){ // mostrar/ocultar menu

            if (menu.hasClass("show")){ // agregar clase del menu
                menu.removeClass("show"); // remover clase 
            }else{
                menu.addClass("show"); // agregar clase del menu
            }
            
        });

	/* -------------------------------------------------------------------
	 * ## Slider
	 * ------------------------------------------------------------------- */

	var imgItems = $('.slider li').length; // declaracion de variables
	var imgPos = 1;
	
	$('.slider li').hide(); 
	$('.slider li:first').show();

	$('.right span').click(nextSlider); // botones del slider
	$('.left span').click(prevSlider);

	setInterval(function(){ // tiempo del intervalo del slider
		nextSlider();
	}, 7000);
	interval = setInterval(nextSlider,7000);

	function nextSlider(){ // para el siguiente slide
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPos +')').fadeIn(1200);	
		
		clearInterval(interval);
 		interval = setInterval(nextSlider,7000);
	}

	function prevSlider(){ // para el anterior slide
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPos +')').fadeIn(1200);
		
		clearInterval(interval);
 		interval = setInterval(nextSlider,7000);
	}
});