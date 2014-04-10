//= require_tree .


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
  if((navigator.userAgent === undefined) || !((navigator.userAgent.indexOf("Chrome") != -1) || (navigator.userAgent.indexOf("Safari") != -1))) {
    //$('.profile').css('display','block');
    //$('#animated-profile').css('display','none');
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
})(jQuery);

(function($){
  /*
    LastFM api call and dom loads
  */
  lfmOpts = {
    APIkey: '6a77d69fd4f528fe5101f0e2e4912e8c',
    User: 'iBrianAnders',
    limit: 24, // 1 album - 50 albums
    period: "3month" //overall|7day|1month|3month|6month|12month
  };

  $('.albums') && $.ajax({
    type: 'GET',
    url: ("http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=" + lfmOpts.User + "&period=" + lfmOpts.period + "&api_key=" + lfmOpts.APIkey + "&format=json&limit=" + lfmOpts.limit +"&callback=?"),
    dataType: 'json',
  }).then(function(data){
    var markup = [],
        count = 0,
        max = 12;

    data.topalbums.album.forEach(function(album){
      if(album.image[album.image.length-1]["#text"].indexOf("default") === -1 && count !== max) {
        markup.push("<a target='_blank' href='" + album.url + "' class='album'><img src='" + album.image[album.image.length-1]["#text"] + "'><div class='back'></div></a>");
        count++;
      }
    });

    $('.albums').append(markup.join(''));
  });

})(jQuery);

(function($){
  /*
    LastFM api call and dom loads
  */
  lfmOpts = {
    APIkey: '6a77d69fd4f528fe5101f0e2e4912e8c',
    User: 'iBrianAnders',
    limit: 12, // 1 artist - 50 artists
    period: "3month" //overall|7day|1month|3month|6month|12month
  };

  $('.artists') && $.ajax({
    type: 'GET',
    url: ("http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=" + lfmOpts.User + "&period=" + lfmOpts.period + "&api_key=" + lfmOpts.APIkey + "&format=json&limit=" + lfmOpts.limit +"&callback=?"),
    dataType: 'json',
  }).then(function(data){
    var markup = [];

    data.topartists.artist.forEach(function(artist){
      if(artist.image[artist.image.length-1]["#text"].indexOf("default") === -1) {
        markup.push("<a target='_blank' href='" + artist.url + "' class='artist'><img src='" + artist.image[1]["#text"] + "'><h1>" + artist.name + "</h1><div class='back'></div></a>");
      } else {
        markup.push("<a target='_blank' href='" + artist.url + "' class='artist'><h1>" + artist.name + "</h1><div class='back'></div></a>");
      }
    });

    $('.artists').append(markup.join(''));
  });
})(jQuery);


(function($){
  /*
    instagram api call and dom load
  */
  iOpts = {
    APIkey: 'f42ca37467bc4296b311a70e1258c88e',
    User: '196017474'
  }

  $('.instagram') && $.ajax({
    type: 'GET',
    url: 'https://api.instagram.com/v1/users/' + iOpts.User + '/media/recent/?client_id=' + iOpts.APIkey,
    dataType: 'jsonp',
  }).then(function(response){
    var markup = [];

    response.data.forEach(function(photo, index){
      if(index >= 12) return;
      if(window.isRetina) {
        markup.push("<a target='_blank' href='" + photo.link + "'><img src='" + photo.images.low_resolution.url + "'><div class='back'></div></a>");
      } else {
        markup.push("<a target='_blank' href='" + photo.link + "'><img src='" + photo.images.thumbnail.url + "'><div class='back'></div></a>");
      }
    });

    $('.instagram').append(markup.join(''));
  });
})(jQuery);
