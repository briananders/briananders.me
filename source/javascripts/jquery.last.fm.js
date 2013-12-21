/*
 * jQuery.last.fm
 *
 * A jQuery plugin that populates the given element with
 * album artwork, artist information, and top tracks
 * based upon the given parameters. At this time,
 * only for top albums.
 *
 * Copyright © 2013 Alex Cash
 * Amended by Brian Anders
 * Dual licensed under the MIT and GPL licenses.
 */

(function( $ ) {
	$.fn.lfmTopAlbums = function(options){
		var settings = $.extend({
			APIkey:		null,			// [string] required in order to retrieve content from last.fm
			User:			null,			// [string] required username to retrieve data for
			Behavior:	"hover",	// [string] controls detail content behavior. can be changed to 'click'
			limit:		20,				// [integer] the number of albums you'd like to show. max of 50
			period:		"3month"	// [string] overall | 7day | 1month | 3month | 6month | 12month the period of time for which to retrieve top albums
		}, options);

		var url = "http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=" + settings.User + "&period=" + settings.period + "&api_key=" + settings.APIkey + "&format=json&limit=" + settings.limit +"&callback=?";
		//var url = "serverFixture.json"; //turn this on to try wihtout an api key or user
		var albums = [];

		function isLoaded (albumElement) {

			for (var i = 0; i < albums.length; i++){
				var markup = $("<div class='album'><div class='front'><img src='" + albums[i].art + "'><div class='alpha'></div></div><div class='back'><h2>" + albums[i].artist + "</h2><h1>" + albums[i].name + "</h1><h3>" + albums[i].played + " tracks played</h3></div></div>");
				albumElement.append(markup);
			}

			if (settings.Behavior == "hover") {
				albumElement.find('.album').hover(function(){
					$(this).addClass('flip');
				},function(){
					$(this).removeClass('flip');
				});
			} else {
				$(document).bind('click', function (e) {
					$('.flip').removeClass('flip');
				});

				albumElement.find('.album').click(function(e){
					e.stopPropagation();
					if($('.flip')[0] === this){
						$(this).removeClass('flip');
					} else {
						$('.flip').removeClass('flip');
						$(this).addClass('flip');
					}
				});
			}

			if(settings.callback) {
				settings.callback();
			}
		}

		return this.each(function(){
			var $this = $(this);
			$.getJSON( url, function(data){
				$(data.topalbums.album).each(function(){
					albums.push ({
						name:	this.name,
						artist: this.artist.name,
						played: this.playcount,
						art:	this.image[this.image.length-1]["#text"],
						url: this.url
					});
				});
				isLoaded($this);
			});
		});
	};

	$.fn.lfmTopArtists = function(options){
		var settings = $.extend({
			APIkey:		null,			// [string] required in order to retrieve content from last.fm
			User:			null,			// [string] required username to retrieve data for
			Behavior:	"hover",	// [string] controls detail content behavior. can be changed to 'click'
			limit:		20,				// [integer] the number of albums you'd like to show. max of 50
			period:		"3month"	// [string] overall | 7day | 1month | 3month | 6month | 12month the period of time for which to retrieve top albums
		}, options);

		var url = "http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=" + settings.User + "&period=" + settings.period + "&api_key=" + settings.APIkey + "&format=json&limit=" + settings.limit +"&callback=?";
		//var url = "serverFixture.json"; //turn this on to try wihtout an api key or user
		var artists = [];

		function isLoaded (artistElement) {

			for (var i = 0; i < artists.length; i++){
				var markup = $("<div class='artist'><div class='front'><img src='" + artists[i].art + "'><div class='alpha'></div></div><div class='back'><h1>" + artists[i].name + "</h1><h3>" + artists[i].played + " tracks played</h3></div></div>");
				artistElement.append(markup);
			}

			if (settings.Behavior == "hover") {
				artistElement.find('.artist').hover(function(){
					$(this).addClass('flip');
				},function(){
					$(this).removeClass('flip');
				});
			} else {
				$(document).bind('click', function (e) {
					$('.flip').removeClass('flip');
				});

				artistElement.find('.artist').click(function(e){
					e.stopPropagation();
					if($('.flip')[0] === this){
						$(this).removeClass('flip');
					} else {
						$('.flip').removeClass('flip');
						$(this).addClass('flip');
					}
				});
			}

			if(settings.callback) {
				settings.callback();
			}
		}

		return this.each(function(){
			var $this = $(this);
			$.getJSON( url, function(data){
				$(data.topartists.artist).each(function(){
					artists.push ({
						name:	this.name,
						played: this.playcount,
						art:	this.image[this.image.length-1]["#text"],
						url: this.url
					});
				});
				isLoaded($this);
			});
		});
	};

	$.fn.lfmTopTracks = function(options){
		var settings = $.extend({
			APIkey:		null,			// [string] required in order to retrieve content from last.fm
			User:			null,			// [string] required username to retrieve data for
			Behavior:	"hover",	// [string] controls detail content behavior. can be changed to 'click'
			limit:		20,				// [integer] the number of albums you'd like to show. max of 50
			period:		"3month"	// [string] overall | 7day | 1month | 3month | 6month | 12month the period of time for which to retrieve top albums
		}, options);

		var url = "http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=" + settings.User + "&period=" + settings.period + "&api_key=" + settings.APIkey + "&format=json&limit=" + settings.limit +"&callback=?";
		//var url = "serverFixture.json"; //turn this on to try wihtout an api key or user
		var tracks = [];

		function isLoaded (trackElement) {

			for (var i = 0; i < tracks.length; i++){
				var markup = $("<div class='track'><div class='front'><img src='" + tracks[i].art + "'><div class='alpha'></div></div><div class='back'><h1>" + tracks[i].name + "</h1><h2>" + tracks[i].artist + "</h2><h3>" + tracks[i].played + " tracks played</h3></div></div>");
				trackElement.append(markup);
			}

			if (settings.Behavior == "hover") {
				trackElement.find('.track').hover(function(){
					$(this).addClass('flip');
				},function(){
					$(this).removeClass('flip');
				});
			} else {
				$(document).bind('click', function (e) {
					$('.flip').removeClass('flip');
				});

				trackElement.find('.track').click(function(e){
					e.stopPropagation();
					if($('.flip')[0] === this){
						$(this).removeClass('flip');
					} else {
						$('.flip').removeClass('flip');
						$(this).addClass('flip');
					}
				});
			}

			if(settings.callback) {
				settings.callback();
			}
		}

		return this.each(function(){
			var $this = $(this);
			$.getJSON( url, function(data){
				$(data.toptracks.track).each(function(){
					if(this.image){
						tracks.push ({
							name:	this.name,
							played: this.playcount,
							artist: this.artist.name,
							art:	this.image[1]['#text'],
							url: this.url
						});
					} else {
						tracks.push ({
							name: this.name,
							played: this.playcount,
							artist: this.artist.name,
							art: "http://cdn.last.fm/flatness/catalogue/noimage/2/default_album_medium.png",
							url: this.url
						})
					}
				});
				isLoaded($this);
			});
		});
	};

	$.fn.lfmRecentTracks = function(options){
		var settings = $.extend({
			APIkey:		null,			// [string] required in order to retrieve content from last.fm
			User:			null,			// [string] required username to retrieve data for
			Behavior:	"hover",	// [string] controls detail content behavior. can be changed to 'click'
			limit:		20,				// [integer] the number of albums you'd like to show. max of 50
		}, options);

		var url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" + settings.User + "&api_key=" + settings.APIkey + "&format=json&limit=" + settings.limit +"&callback=?";
		//var url = "serverFixture.json"; //turn this on to try wihtout an api key or user
		console.log(url);
		var tracks = [];

		function isLoaded (trackElement) {

			for (var i = 0; i < tracks.length; i++){
				var markup = $("<div class='recent-track'><div class='front'><img src='" + tracks[i].art + "'><div class='alpha'></div></div><div class='back'><h1>" + tracks[i].name + "</h1><h2>" + tracks[i].artist + "</h2><h3>" + tracks[i].album + "</h3></div></div>");
				trackElement.append(markup);
			}

			if (settings.Behavior == "hover") {
				trackElement.find('.recent-track').hover(function(){
					$(this).addClass('flip');
				},function(){
					$(this).removeClass('flip');
				});
			} else {
				$(document).bind('click', function (e) {
					$('.flip').removeClass('flip');
				});

				trackElement.find('.track').click(function(e){
					e.stopPropagation();
					if($('.flip')[0] === this){
						$(this).removeClass('flip');
					} else {
						$('.flip').removeClass('flip');
						$(this).addClass('flip');
					}
				});
			}

			if(settings.callback) {
				settings.callback();
			}
		}

		return this.each(function(){
			var $this = $(this);
			$.getJSON( url, function(data){
				$(data.recenttracks.track).each(function(){
					if(this.image){
						tracks.push ({
							name:	this.name,
							artist: this.artist["#text"],
							album: this.album["#text"],
							art:	this.image[3]['#text'],
							url: this.url
						});
					} else {
						tracks.push ({
							name: this.name,
							artist: this.artist["#text"],
							album: this.album["#text"],
							art: "http://cdn.last.fm/flatness/catalogue/noimage/2/default_album_medium.png",
							url: this.url
						})
					}
				});
				isLoaded($this);
			});
		});
	};
})( jQuery );