//= require spin

//ie8 doesn't have a forEach method. This fixes that.
if ( !Array.prototype.forEach ) {
  Array.prototype.forEach = function(fn, scope) {
    for(var i = 0, len = this.length; i < len; ++i) {
      fn.call(scope, this[i], i, this);
    }
  }
}


(function($){
  /*
    makes the image_tag helper retina images work.
  */
  window.isRetina = false;

  if(window.devicePixelRatio >= 1.2){
    window.isRetina = true;
    $("[data-src-2x]").each(function(){
      if(this.tagName === "IMG"){
        $(this).attr("src",$(this).attr("data-src-2x"));
      } else {
        $(this).css({"background-image":"url("+$(this).attr("data-src-2x")+")"});
      }
    });
  }




  /*
    scroll down if on the 404 page.
  */
  if($('.four-oh-four').length) {
    $('html, body').animate({
      scrollTop: $('.four-oh-four section').offset().top
    }, 500);
  }




  /*
    animates the SVG profile image.
  */
  if((navigator.userAgent === undefined) ||
    !((navigator.userAgent.indexOf("Chrome") != -1) ||
    (navigator.userAgent.indexOf("Safari") != -1)) ||
    $(window).width() < 800) {
      $("#animated-profile path").each(function(){
        this.style.stroke = '#EEEEEE';
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
      this.style.stroke = '#EEEEEE';

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
})($);

var opts = {
  lines: 13, // The number of lines to draw
  length: 20, // The length of each line
  width: 10, // The line thickness
  radius: 30, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#FFA700', // #rgb or #rrggbb or array of colors
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: '50%', // Top position relative to parent
  left: '50%' // Left position relative to parent
};

(function($){
  /*
    LastFM api call and dom loads
  */
  lfmOpts = {
    APIkey: '6a77d69fd4f528fe5101f0e2e4912e8c',
    User: 'iBrianAnders',
    limit: 24, // 1 album - 50 albums
    period: "1month" //overall|7day|1month|3month|6month|12month
  };

  var target = document.getElementById('albums-spinner');
  var spinner = new Spinner(opts).spin(target);

  $('.albums') && $.ajax({
    type: 'GET',
    url: ("http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=" + lfmOpts.User + "&period=" + lfmOpts.period + "&api_key=" + lfmOpts.APIkey + "&format=json&limit=" + lfmOpts.limit +"&callback=?"),
    dataType: 'json',
    success: function(data){
      if(data.topalbums === undefined) {
        $('.albums').hide();
        $('.instagram').addClass('full');
        return;
      }
      var markup = [],
          count = 0,
          max = 12;

      data.topalbums.album.forEach(function(album){
        if(album.image[album.image.length-1]["#text"].indexOf("default") === -1 && count !== max) {
          markup.push("<a target='_blank' href='" + album.url + "' class='album'><img src='" + album.image[album.image.length-1]["#text"] + "'></a>");
          count++;
        }
      });

      $(target).hide();
      $('.albums').append(markup.join(''));
    },
    error: function(){
      $('.albums').hide();
      $('.instagram').addClass('full');
    }
  });

})($);



(function($){
  /*
    instagram api call and dom load
  */
  iOpts = {
    APIkey: 'f42ca37467bc4296b311a70e1258c88e',
    User: '196017474'
  }

  var target = document.getElementById('instagram-spinner');
  var spinner = new Spinner(opts).spin(target);

  $('.instagram') && $.ajax({
    type: 'GET',
    url: 'https://api.instagram.com/v1/users/' + iOpts.User + '/media/recent/?client_id=' + iOpts.APIkey,
    dataType: 'jsonp',
    success: function(response) {
      if(response.data === undefined) {
        $('.instagram').hide();
        $('.albums').addClass('full');
        return;
      }
      var markup = [];

      response.data.forEach(function(photo, index){
        if(index >= 12) return;
        if(window.isRetina) {
          markup.push("<a target='_blank' href='" + photo.link + "'><img src='" + photo.images.low_resolution.url + "'></a>");
        } else {
          markup.push("<a target='_blank' href='" + photo.link + "'><img src='" + photo.images.thumbnail.url + "'></a>");
        }
      });

      $(target).hide();
      $('.instagram').append(markup.join(''));
    },
    error: function() {
      $('.instagram').hide();
      $('.albums').addClass('full');
    }
  });
})($);
