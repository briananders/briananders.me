!function(t,e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Spinner=e()}(this,function(){"use strict";function t(t,e){var i,n=document.createElement(t||"div");for(i in e)n[i]=e[i];return n}function e(t){for(var e=1,i=arguments.length;i>e;e++)t.appendChild(arguments[e]);return t}function i(t,e,i,n){var a=["opacity",e,~~(100*t),i,n].join("-"),o=.01+i/n*100,r=Math.max(1-(1-t)/e*(100-o),t),s=d.substring(0,d.indexOf("Animation")).toLowerCase(),l=s&&"-"+s+"-"||"";return c[a]||(f.insertRule("@"+l+"keyframes "+a+"{0%{opacity:"+r+"}"+o+"%{opacity:"+t+"}"+(o+.01)+"%{opacity:1}"+(o+e)%100+"%{opacity:"+t+"}100%{opacity:"+r+"}}",f.cssRules.length),c[a]=1),a}function n(t,e){var i,n,a=t.style;for(e=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<u.length;n++)if(i=u[n]+e,void 0!==a[i])return i;return void 0!==a[e]?e:void 0}function a(t,e){for(var i in e)t.style[n(t,i)||i]=e[i];return t}function o(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)void 0===t[n]&&(t[n]=i[n])}return t}function r(t,e){return"string"==typeof t?t:t[e%t.length]}function s(t){this.opts=o(t||{},s.defaults,p)}function l(){function i(e,i){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',i)}f.addRule(".spin-vml","behavior:url(#default#VML)"),s.prototype.lines=function(t,n){function o(){return a(i("group",{coordsize:u+" "+u,coordorigin:-d+" "+-d}),{width:u,height:u})}function s(t,s,l){e(f,e(a(o(),{rotation:360/n.lines*t+"deg",left:~~s}),e(a(i("roundrect",{arcsize:n.corners}),{width:d,height:n.width,left:n.radius,top:-n.width>>1,filter:l}),i("fill",{color:r(n.color,t),opacity:n.opacity}),i("stroke",{opacity:0}))))}var l,d=n.length+n.width,u=2*d,c=2*-(n.width+n.length)+"px",f=a(o(),{position:"absolute",top:c,left:c});if(n.shadow)for(l=1;l<=n.lines;l++)s(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=n.lines;l++)s(l);return e(t,f)},s.prototype.opacity=function(t,e,i,n){var a=t.firstChild;n=n.shadow&&n.lines||0,a&&e+n<a.childNodes.length&&(a=a.childNodes[e+n],a=a&&a.firstChild,a=a&&a.firstChild,a&&(a.opacity=i))}}var d,u=["webkit","Moz","ms","O"],c={},f=function(){var i=t("style",{type:"text/css"});return e(document.getElementsByTagName("head")[0],i),i.sheet||i.styleSheet}(),p={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};s.defaults={},o(s.prototype,{spin:function(e){this.stop();var i=this,n=i.opts,o=i.el=a(t(0,{className:n.className}),{position:n.position,width:0,zIndex:n.zIndex});if(n.radius+n.length+n.width,a(o,{left:n.left,top:n.top}),e&&e.insertBefore(o,e.firstChild||null),o.setAttribute("role","progressbar"),i.lines(o,i.opts),!d){var r,s=0,l=(n.lines-1)*(1-n.direction)/2,u=n.fps,c=u/n.speed,f=(1-n.opacity)/(c*n.trail/100),p=c/n.lines;!function h(){s++;for(var t=0;t<n.lines;t++)r=Math.max(1-(s+(n.lines-t)*p)%c*f,n.opacity),i.opacity(o,t*n.direction+l,r,n);i.timeout=i.el&&setTimeout(h,~~(1e3/u))}()}return i},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=void 0),this},lines:function(n,o){function s(e,i){return a(t(),{position:"absolute",width:o.length+o.width+"px",height:o.width+"px",background:e,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/o.lines*u+o.rotate)+"deg) translate("+o.radius+"px,0)",borderRadius:(o.corners*o.width>>1)+"px"})}for(var l,u=0,c=(o.lines-1)*(1-o.direction)/2;u<o.lines;u++)l=a(t(),{position:"absolute",top:1+~(o.width/2)+"px",transform:o.hwaccel?"translate3d(0,0,0)":"",opacity:o.opacity,animation:d&&i(o.opacity,o.trail,c+u*o.direction,o.lines)+" "+1/o.speed+"s linear infinite"}),o.shadow&&e(l,a(s("#000","0 0 4px #000"),{top:"2px"})),e(n,e(l,s(r(o.color,u),"0 0 1px rgba(0,0,0,.1)")));return n},opacity:function(t,e,i){e<t.childNodes.length&&(t.childNodes[e].style.opacity=i)}});var h=a(t("group"),{behavior:"url(#default#VML)"});return!n(h,"transform")&&h.adj?l():d=n(h,"animation"),s}),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){for(var i=0,n=this.length;n>i;++i)t.call(e,this[i],i,this)}),$.fn.addClassSVG=function(t){return $(this).attr("class",function(e,i){return i+" "+t}),this},$.fn.removeClassSVG=function(t){return $(this).attr("class",function(e,i){var n=new RegExp(t,"g");return i.replace(n,"")}),this},function(t){window.isRetina=!1,window.devicePixelRatio>=1.2&&(window.isRetina=!0,t("[data-src-2x]").each(function(){"IMG"===this.tagName?t(this).attr("src",t(this).attr("data-src-2x")):t(this).css({"background-image":"url("+t(this).attr("data-src-2x")+")"})})),t(".four-oh-four").length&&t("html, body").animate({scrollTop:t(".four-oh-four section").offset().top},500);var e=[];t("#animated-profile path").each(function(t,i){var n=i.getTotalLength();i.style.strokeDasharray=n+" "+n,i.style.strokeDashoffset=n,e[t]={path:i,length:n}}),t("#animated-profile").removeClassSVG("invisible");var i=300,n=i;window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),function a(){n>0&&requestAnimFrame(a),e.forEach(function(t){t.path.style.strokeDashoffset=t.length*n/i}),n--}(),setTimeout(function(){t("#animated-profile path.glasses").addClassSVG("animate")},1e4),setTimeout(function(){t("#animated-profile path.seven").addClassSVG("animate")},5e3),setTimeout(function(){t("#animated-profile path.one-d").addClassSVG("animate")},5500),setTimeout(function(){t("#animated-profile path.four").addClassSVG("animate")},7500),setTimeout(function(){t("#animated-profile path.zero").addClassSVG("animate")},6e3),setTimeout(function(){t("#animated-profile path.e-f").addClassSVG("animate")},6500),setTimeout(function(){t("#animated-profile path:not(glasses)").addClassSVG("animate")},7e3)}($);var opts={lines:13,length:20,width:10,radius:30,corners:1,rotate:0,direction:1,color:"#FFA700",speed:1,trail:60,shadow:!1,hwaccel:!1,className:"spinner",zIndex:2e9,top:"50%",left:"50%"};!function(t){lfmOpts={APIkey:"6a77d69fd4f528fe5101f0e2e4912e8c",User:"iBrianAnders",limit:24,period:"1month"};{var e=document.getElementById("albums-spinner");new Spinner(opts).spin(e)}t(".albums").length&&t.ajax({type:"GET",url:"http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user="+lfmOpts.User+"&period="+lfmOpts.period+"&api_key="+lfmOpts.APIkey+"&format=json&limit="+lfmOpts.limit+"&callback=?",dataType:"json",success:function(i){if(void 0===i.topalbums)return t(".albums").hide(),void t(".instagram").addClass("full");var n=[],a=0,o=12;i.topalbums.album.forEach(function(t){-1===t.image[t.image.length-1]["#text"].indexOf("default")&&a!==o&&(n.push("<a target='_blank' href='"+t.url+"' class='album'><img src='"+t.image[t.image.length-1]["#text"]+"'></a>"),a++)}),t(e).hide(),t(".albums").append(n.join(""))},error:function(){t(".albums").hide(),t(".instagram").addClass("full")}})}($),function(t){iOpts={APIkey:"f42ca37467bc4296b311a70e1258c88e",User:"196017474"};{var e=document.getElementById("instagram-spinner");new Spinner(opts).spin(e)}t(".instagram").length&&t.ajax({type:"GET",url:"https://api.instagram.com/v1/users/"+iOpts.User+"/media/recent/?client_id="+iOpts.APIkey,dataType:"jsonp",success:function(i){if(void 0===i.data)return t(".instagram").hide(),void t(".albums").addClass("full");var n=[];i.data.forEach(function(t,e){e>=12||n.push(window.isRetina?"<a target='_blank' href='"+t.link+"'><img src='"+t.images.low_resolution.url+"'></a>":"<a target='_blank' href='"+t.link+"'><img src='"+t.images.thumbnail.url+"'></a>")}),t(e).hide(),t(".instagram").append(n.join(""))},error:function(){t(".instagram").hide(),t(".albums").addClass("full")}})}($);