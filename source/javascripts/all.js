'use strict';

/* globals $ */




//ie8 doesn't have a forEach method. This fixes that.
if ( !Array.prototype.forEach ) {
  Array.prototype.forEach = function(fn, scope) {
    for(var i = 0, len = this.length; i < len; ++i) {
      fn.call(scope, this[i], i, this);
    }
  };
}









var ImageWatcher = function() {

  var images = [];


  this.watchImage = function(index, img) {

    images.push(img);

    img.onload = function() {
      $(this).addClass('loaded');
    };
  };

};

var imageWatcher = new ImageWatcher();









(function($) {
  /*
    LastFM api call and dom loads
  */
  var lfmOpts = {
    APIkey: '6a77d69fd4f528fe5101f0e2e4912e8c',
    User: 'iBrianAnders',
    limit: 24, // 1 album - 50 albums
    period: '1month' //overall|7day|1month|3month|6month|12month
  };

  if($('.albums').length) {
    $.ajax({
      type: 'GET',
      url: ('http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=' +
              lfmOpts.User +
              '&period=' +
              lfmOpts.period +
              '&api_key=' +
              lfmOpts.APIkey +
              '&format=json&limit=' +
              lfmOpts.limit  +
              '&callback=?'),
      dataType: 'json',
      success: function(data) {
        if(data.topalbums === undefined) {
          $('.albums').hide();
          return;
        }
        var markup = [],
            count = 0,
            max = 12;

        data.topalbums.album.forEach(function(album) {
          if(album.image[album.image.length-1]['#text'].indexOf('default') === -1 && count !== max) {
            markup.push('<a target="_blank" href="' +
                         album.url +
                         '" class="album" title="' +
                         album.name +
                         '"><img src="' +
                         album.image[album.image.length-1]['#text'] +
                         '" alt="' +
                         album.name +
                         '"></a>');
            count ++ ;
          }
        });

        $('.albums').append(markup.join(''));

        $('.albums img').each(imageWatcher.watchImage);
        galaxySetup();
      },
      error: function() {
        $('.albums').hide();
      }
    });
  }

})($);









(function($) {
  /*
    instagram api call and dom load
  */
  var iOpts = {
    APIkey: 'f42ca37467bc4296b311a70e1258c88e',
    User: '196017474'
  };

  if($('.instagram').length) {
    $.ajax({
      type: 'GET',
      url: 'https://api.instagram.com/v1/users/' +
            iOpts.User +
            '/media/recent/?client_id=' +
            iOpts.APIkey,
      dataType: 'jsonp',
      success: function(response) {
        if(response.data === undefined) {
          $('.instagram').hide();
          return;
        }
        var markup = [];

        response.data.forEach(function(photo, index) {
          if(index >= 12) return;

          markup.push('<a target="_blank" href="'  +
                       photo.link  +
                       '" title="'  +
                       (photo.caption === null ? 'no caption' : photo.caption.text)  +
                       '"><img src="'  +
                       (window.isRetina ? photo.images.low_resolution.url : photo.images.thumbnail.url)  +
                       '" alt="'  +
                       (photo.caption === null ? 'no caption' : photo.caption.text)  +
                       '"></a>');
        });

        $('.instagram').append(markup.join(''));

        $('.instagram img').each(imageWatcher.watchImage);
        galaxySetup();
      },
      error: function() {
        $('.instagram').hide();
      }
    });
  }

})($);









$(document).ready(function() {

  /*
    makes the image_tag helper retina images work.
  */
  window.isRetina = false;

  if(window.devicePixelRatio >= 1.2) {
    window.isRetina = true;
    $('[data-src-2x]').each(function() {
      if(this.tagName === 'IMG') {
        $(this).attr('src', $(this).attr('data-src-2x'));
      } else {
        $(this).css({
          'background-image': 'url(' + $(this).attr('data-src-2x') + ')'
        });
      }
    });
  }

});









$(document).ready(function() {

  //add title attribute
  (function($) {
    var links = $('a').filter(function() {
      return !$(this).attr('title') || $(this).attr('title') === '';
    });

    links.each(function() {
      console.log(this);
      $(this).attr('title', $(this).text().trim());
    });
  })($);

});









$(document).ready(function() {

  $('img').each(imageWatcher.watchImage);

});












var galaxy = document.getElementById('galaxy');
var svgns = 'http://www.w3.org/2000/svg';
var WIDTH, HEIGHT;
var stars = [];
var b, m;


function galaxySetup() {

  WIDTH = (document.body.clientWidth * 2);
  HEIGHT = (document.body.clientHeight * 2);
  if(HEIGHT < window.innerHeight) {
    HEIGHT = window.innerHeight * 2;
  }
  if(window.isRetina) {
    WIDTH *= 2;
    HEIGHT *= 2;
  }
  galaxy.setAttributeNS(null, 'viewBox', '0 0 ' + WIDTH + ' ' + HEIGHT);


  var numOfStars = ((WIDTH * HEIGHT) / 15000) - stars.length;

  for(var i = 0; i < numOfStars; i++ ) {
    makeStar();
  }

}



function makeStar() {

  var star = document.createElementNS(svgns, 'circle');
  setStarAttributes(star);

  if(Math.random() * 4 < 3) {
    star.classList.add('invisible');
  }

  galaxy.appendChild(star);

  stars.push(star);

}



function setStarAttributes(star) {
  star.setAttributeNS(null, 'cx', Math.floor(Math.random() * WIDTH));
  star.setAttributeNS(null, 'cy', Math.floor(Math.random() * HEIGHT));
  star.setAttributeNS(null, 'r',  Math.floor(Math.random() * 4));

  switch (Math.floor(Math.random() * 10)) {
    case 0:
      star.setAttributeNS(null, 'fill', '#FFF');
      break;
    case 1:
      star.setAttributeNS(null, 'fill', '#FFE');
      break;
    case 2:
      star.setAttributeNS(null, 'fill', '#FFD');
      break;
    case 3:
      star.setAttributeNS(null, 'fill', '#FFC');
      break;
    case 4:
      star.setAttributeNS(null, 'fill', '#FEF');
      break;
    case 5:
      star.setAttributeNS(null, 'fill', '#FDF');
      break;
    case 6:
      star.setAttributeNS(null, 'fill', '#FCF');
      break;
    case 7:
      star.setAttributeNS(null, 'fill', '#EFF');
      break;
    case 8:
      star.setAttributeNS(null, 'fill', '#DFF');
      break;
    default:
      star.setAttributeNS(null, 'fill', '#CFF');
  }
}



function showGalaxy() {

  setTimeout(function() {
    galaxy.classList.add('on-deck');
  }, 200);


  setTimeout(function() {
    galaxy.classList.add('visible');
  }, 2000);


  setInterval(function() {
    //y = mx + b

    b = Math.floor(Math.random() * 10);
    m = Math.floor(Math.random() * 5) + 5;
    var star;

    for(var i = b; i < stars.length; i  += m) {
      star = stars[i];

      if(stars[i].classList.contains('invisible')) {

        setStarAttributes(star)
        star.classList.remove('invisible');

      } else {
        star.classList.add('invisible');
      }
    }

  }, 1000);

}





$(document).ready(function() {


  $(window).on('resize', galaxySetup);


  galaxySetup();
  showGalaxy();


});
