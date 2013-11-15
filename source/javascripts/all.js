//= require_tree .


(function($){
  $.fn.debounce = function(fn, action, thresh){  
    return fn ? this.bind(action, (function debounce(fn, thresh) {
      var timeout;
      return function debounced () {
        var obj = this, args = arguments;
        function delayed () {
          fn.apply(obj, args);
          timeout = null;
        };
        if (timeout)
          clearTimeout(timeout);
        timeout = setTimeout(delayed, thresh || 50);
      };
    })(fn, thresh)) : this.trigger(action); 
  };
})(jQuery);

$(document).ready(function() {
	$('.container').addClass('loaded');

	$('.albums').lfmTopAlbums({
		APIkey: '6a77d69fd4f528fe5101f0e2e4912e8c',
		User: 'iBrianAnders',
		Behavior: "hover",//hover or click
		limit: 20, // 1 album - 50 albums
		period: "12month" //overall|7day|1month|3month|6month|12month
	});

	$('.artists').lfmTopArtists({
		APIkey: '6a77d69fd4f528fe5101f0e2e4912e8c',
		User: 'iBrianAnders',
		Behavior: "hover",//hover or click
		limit: 10, // 1 album - 50 albums
		period: "12month" //overall|7day|1month|3month|6month|12month
	});

	$('.tracks').lfmTopTracks({
		APIkey: '6a77d69fd4f528fe5101f0e2e4912e8c',
		User: 'iBrianAnders',
		Behavior: "hover",//hover or click
		limit: 50, // 1 album - 50 albums
		period: "12month" //overall|7day|1month|3month|6month|12month
	});

	$('a.nav').click(function() {
		if ($('.container').hasClass('open')) {
			$('.container').removeClass('open');
		} else {
			$('.container').addClass('open');
		}
	});

	$(window).debounce(function(){
		$('a.nav').css('top', ($(window).scrollTop() + 20) + 'px');
	}, 'scroll', 200);
});