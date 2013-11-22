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
		period: "3month" //overall|7day|1month|3month|6month|12month
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
		limit: 20, // 1 album - 50 albums
		period: "3month" //overall|7day|1month|3month|6month|12month
	});

/*
opens the social menu
*/
	$('a.nav').click(function() {
		if ($('.container').hasClass('open')) {
			$('.container').removeClass('open');
		} else {
			$('.container').addClass('open');
		}
	});


/*
social icon slideshow
*/
    $("a.nav div:gt(0)").hide();

    setInterval(function() { 
      $('a.nav div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('a.nav');
    },  3000);

/* 
debounce method for social icon scroll following
*/
	$(window).debounce(function() {
        if($('body').width() >= 600) {
		  $('a.nav').css('top', ($(window).scrollTop() + 20) + 'px');
        }
	}, 'scroll', 200);
});