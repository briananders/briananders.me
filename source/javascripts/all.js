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
      }
      if (timeout)
        clearTimeout(timeout);
      timeout = setTimeout(delayed, thresh || 50);
      };
    })(fn, thresh)) : this.trigger(action);
  };
})(jQuery);

$(document).ready(function() {

  //makes the image_tag helper retina images work.
  if(window.devicePixelRatio >= 1.2){
    $("[data-src-2x]").each(function(){
      if(this.tagName === "IMG"){
        $(this).attr("src",$(this).attr("data-src-2x"));
      } else {
        $(this).css({"background-image":"url("+$(this).attr("data-src-2x")+")"});
      }
    });
  }

  $('.container').addClass('loaded');

  $('#section-buttons button').click(function(){

    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    var section = this.dataset['section'];
    $('section').removeClass('loaded');

    switch(section) {
      case 'top-albums':
        if($('.album').length === 0) {
          $('.albums').lfmTopAlbums({
            APIkey: '6a77d69fd4f528fe5101f0e2e4912e8c',
            User: 'iBrianAnders',
            Behavior: "click",//hover or click
            limit: 20, // 1 album - 50 albums
            period: "3month", //overall|7day|1month|3month|6month|12month
            callback: scrollToButtons
          });
        } else {
          scrollToButtons();
        }
        $('.top-albums').addClass('loaded');
        break;

      case 'top-artists':
        if($('.artist').length === 0) {
          $('.artists').lfmTopArtists({
            APIkey: '6a77d69fd4f528fe5101f0e2e4912e8c',
            User: 'iBrianAnders',
            Behavior: "click",//hover or click
            limit: 10, // 1 artist - 50 artist
            period: "12month", //overall|7day|1month|3month|6month|12month
            callback: scrollToButtons
          });
        } else {
          scrollToButtons();
        }
        $('.top-artists').addClass('loaded');
        break;

      case 'top-tracks':
        if($('.track').length === 0) {
          $('.tracks').lfmTopTracks({
            APIkey: '6a77d69fd4f528fe5101f0e2e4912e8c',
            User: 'iBrianAnders',
            Behavior: "click",//hover or click
            limit: 20, // 1 track - 50 track
            period: "3month", //overall|7day|1month|3month|6month|12month
            callback: scrollToButtons
          });
        } else {
          scrollToButtons();
        }
        $('.top-tracks').addClass('loaded');
        break;

      case 'top-movies':
        $('section.top-movies').addClass('loaded');
        scrollToButtons();
        break;
    }
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

  if($('.four-oh-four').length !== 0) {
    $('html, body').animate({
      scrollTop: $('.four-oh-four section').offset().top
    }, 500);
  }

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
    animates the SVG profile image.
  */
  if((navigator.userAgent === undefined) || !((navigator.userAgent.indexOf("Chrome") != -1) || (navigator.userAgent.indexOf("Safari") != -1))) {
    //$('.profile').css('display','block');
    //$('#animated-profile').css('display','none');
    $("#animated-profile path").each(function(){
      $(this).attr('fill', $(this).data('fill'));
    });
  } else {
    $('#animated-profile path').each(function(){
      var length = this.getTotalLength();
      // Clear any previous transition
      this.style.transition = this.style.WebkitTransition =
        'none';
      // Set up the starting positions
      this.style.strokeDasharray = length + ' ' + length;
      this.style.strokeDashoffset = length;
      // Trigger a layout so styles are calculated & the browser
      // picks up the starting position before animating
      this.getBoundingClientRect();
      // Define our transition

      this.style.transition = this.style.WebkitTransition =
        'stroke-dashoffset 10s ease-in-out, fill 5s ease, height .2s ease';
      // Go!
      this.style.strokeDashoffset = '0';

      if(this.classList.contains('glasses')){
        setTimeout(function(path){
          $(path).attr('fill', $(path).data('fill'));
        }, 10000, [this]);
      } else if(this.classList.contains('seven')){
        setTimeout(function(path){
          $(path).attr('fill', $(path).data('fill'));
        }, 5000, [this]);
      } else if(this.classList.contains('one-d')){
        setTimeout(function(path){
          $(path).attr('fill', $(path).data('fill'));
        }, 5500, [this]);
      } else if(this.classList.contains('four')){
        setTimeout(function(path){
          $(path).attr('fill', $(path).data('fill'));
        }, 7500, [this]);
      } else if(this.classList.contains('zero')){
        setTimeout(function(path){
          $(path).attr('fill', $(path).data('fill'));
        }, 6000, [this]);
      } else if(this.classList.contains('e-f')){
        setTimeout(function(path){
          $(path).attr('fill', $(path).data('fill'));
        }, 6500, [this]);
      } else {
        setTimeout(function(path){
          $(path).attr('fill', $(path).data('fill'));
        }, 7000, [this]);
      }
    });
  }

  /*
    debounce method for social icon scroll following
  */
  $(window).debounce(function() {
    if($('body').width() >= 600) {
      $('a.nav').css('top', ($(window).scrollTop() + 1) + 'px');
    }
  }, 'scroll', 200);

  function scrollToButtons() {
    $('html, body').animate({
      scrollTop: $('#section-buttons button').offset().top
    }, 500);
  }
});