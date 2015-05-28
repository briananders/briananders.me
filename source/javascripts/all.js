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







  //add title attribute
  (function($){
    var links = $('a').filter(function(){
      return !$(this).attr('title') || $(this).attr('title') === "";
    });

    links.each(function() {
      $(this).attr('title', $(this).text().trim());
    });
  })($);








  /*
    scroll down if on the 404 page.
  */
  if($('.four-oh-four').length) {
    $('html, body').animate({
      scrollTop: $('.four-oh-four section').offset().top
    }, 500);
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
            markup.push("<a target='_blank' href='" + album.url + "' class='album' title='" + album.name + "'><img src='" + album.image[album.image.length-1]["#text"] + "' alt='" + album.name + "'></a>");
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

          markup.push("<a target='_blank' href='" +
                       photo.link +
                       "' title='" +
                       (photo.caption == null ? "no caption" : photo.caption.text) +
                       "'><img src='" +
                       (window.isRetina ? photo.images.low_resolution.url : photo.images.thumbnail.url) +
                       "' alt='" +
                       (photo.caption == null ? "no caption" : photo.caption.text) +
                       "'></a>");
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









$(document).ready(function(){

  var svg = $('#svg')[0];
  var svgns = "http://www.w3.org/2000/svg";
  var WIDTH = (document.body.clientWidth * 2);
  var HEIGHT = (document.body.clientHeight * 2);
  svg.setAttributeNS(null, "viewBox", "0 0 " + WIDTH + " " + HEIGHT);

  var stars = [];
  var b, m;

  function makeShape() {

    var shape = document.createElementNS(svgns, "circle");
    shape.setAttributeNS(null, "cx", Math.floor(Math.random() * WIDTH));
    shape.setAttributeNS(null, "cy", Math.floor(Math.random() * HEIGHT));
    shape.setAttributeNS(null, "r",  Math.floor(Math.random() * 4));
    shape.setAttributeNS(null, "fill", "#eef");

    if(Math.random() * 4 < 3) {
      shape.classList.add('invisible');
    }

    svg.appendChild(shape);

    stars.push(shape);
  }

  for(var i = 0; i < ((WIDTH * HEIGHT) / 15000); i++) {
    makeShape();
  }

  setTimeout(function(){
    svg.classList.add('on-deck');
  }, 200);


  setTimeout(function(){
    svg.classList.add('visible');
  }, 2000);

  var updateStars = setInterval(function(){
    //y = mx+b

    b = Math.floor(Math.random() * 10);
    m = Math.floor(Math.random() * 5) + 5;

    for(var i = b; i < stars.length; i += m) {
      if(stars[i].classList.contains('invisible')) {
        stars[i].classList.remove('invisible');
      } else {
        stars[i].classList.add('invisible');
      }
    }

  }, 1000);

});
