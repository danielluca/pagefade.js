$(function() {
	var fadeInTime = 600; //fading time in ms.
	$('body').fadeIn(fadeInTime);
	
	
	$('.link[href]').click(function() {
		var fadeOutTime = 600; //fading time in ms.
		var loadDelay = 1200; //redirecting trigger. time in ms.
		var url = this.href; //checking the href attribut in your html.
		
		$('body').fadeOut(fadeOutTime);		

		setTimeout(function() {
			location.href = url;
		}, loadDelay);
		return false;
	});
});