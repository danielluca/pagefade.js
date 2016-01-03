$(function() {
	$( '.container' ).css( 'display', 'none' );
	$( '.container' ).fadeIn( 600 );
	$( 'a[href]' ).click(function() {	
		var url = this.href;
		
		$( 'body' ).fadeOut( 600 );		
		setTimeout(function() {
			location.href = url;
		}, 1200 );
		return false;
	});
});