//= require spin

//ie8 doesn't have a forEach method. This fixes that.
if ( !Array.prototype.forEach ) {
  Array.prototype.forEach = function(fn, scope) {
    for(var i = 0, len = this.length; i < len; ++i) {
      fn.call(scope, this[i], i, this);
    }
  }
}

/*
 * .addClassSVG(className)
 * Adds the specified class(es) to each of the set of matched SVG elements.
 */
$.fn.addClassSVG = function(className){
    $(this).attr('class', function(index, existingClassNames) {
        return existingClassNames + ' ' + className;
    });
    return this;
};

/*
 * .removeClassSVG(className)
 * Removes the specified class to each of the set of matched SVG elements.
 */
$.fn.removeClassSVG = function(className){
    $(this).attr('class', function(index, existingClassNames) {
        var re = new RegExp(className, 'g');
        return existingClassNames.replace(re, '');
    });
    return this;
};


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



  // var TRANSITION = function(s) {
  //   return  'WebkitTransition' in s ||
  //           'MozTransition' in s ||
  //           'msTransition' in s ||
  //           'OTransition' in s ||
  //           'Transition' in s;
  // }(document.body.style);
  // // if(!TRANSITION || $(window).width() < 800) {
  // //   console.log('no transition');
  // //     $("#animated-profile path").adClassSVG('animate');
  // // } else {

  /*
    animates the SVG profile image.
  */
  var elements = [];
  $('#animated-profile path').each(function(index, path) {
    var length = path.getTotalLength();
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;

    elements[index] = {
      path: path,
      length: length
    }
  });
  $("#animated-profile").removeClassSVG("invisible");

  var animation_time = 60*5,
      count = animation_time;

  // shim layer with setTimeout fallback
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

  (function animloop(){

    if(count > 0) requestAnimFrame(animloop);

    elements.forEach(function(obj){
      obj.path.style.strokeDashoffset = obj.length * count / animation_time;
    });

    count--;

  })();

  setTimeout(function(){
    $("#animated-profile path.glasses").addClassSVG('animate');
  }, 10000);
  setTimeout(function(){
    $("#animated-profile path.seven").addClassSVG('animate');
  }, 5000);
  setTimeout(function(){
    $("#animated-profile path.one-d").addClassSVG('animate');
  }, 5500);
  setTimeout(function(){
    $("#animated-profile path.four").addClassSVG('animate');
  }, 7500);
  setTimeout(function(){
    $("#animated-profile path.zero").addClassSVG('animate');
  }, 6000);
  setTimeout(function(){
    $("#animated-profile path.e-f").addClassSVG('animate');
  }, 6500);
  setTimeout(function(){
    $("#animated-profile path:not(glasses)").addClassSVG('animate');
  }, 7000);
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

  if($('.albums').length) {
    $.ajax({
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
  }

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

  if($('.instagram').length) {
    $.ajax({
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
  }

})($);
