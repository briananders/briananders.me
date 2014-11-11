!function(t,i){"object"==typeof exports?module.exports=i():"function"==typeof define&&define.amd?define(i):t.Spinner=i()}(this,function(){"use strict";function t(t,i){var e,s=document.createElement(t||"div");for(e in i)s[e]=i[e];return s}function i(t){for(var i=1,e=arguments.length;e>i;i++)t.appendChild(arguments[i]);return t}function e(t,i,e,s){var n=["opacity",i,~~(100*t),e,s].join("-"),a=.01+e/s*100,o=Math.max(1-(1-t)/i*(100-a),t),r=c.substring(0,c.indexOf("Animation")).toLowerCase(),l=r&&"-"+r+"-"||"";return u[n]||(f.insertRule("@"+l+"keyframes "+n+"{0%{opacity:"+o+"}"+a+"%{opacity:"+t+"}"+(a+.01)+"%{opacity:1}"+(a+i)%100+"%{opacity:"+t+"}100%{opacity:"+o+"}}",f.cssRules.length),u[n]=1),n}function s(t,i){var e,s,n=t.style;for(i=i.charAt(0).toUpperCase()+i.slice(1),s=0;s<d.length;s++)if(e=d[s]+i,void 0!==n[e])return e;return void 0!==n[i]?i:void 0}function n(t,i){for(var e in i)t.style[s(t,e)||e]=i[e];return t}function a(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var s in e)void 0===t[s]&&(t[s]=e[s])}return t}function o(t,i){return"string"==typeof t?t:t[i%t.length]}function r(t){this.opts=a(t||{},r.defaults,h)}function l(){function e(i,e){return t("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}f.addRule(".spin-vml","behavior:url(#default#VML)"),r.prototype.lines=function(t,s){function a(){return n(e("group",{coordsize:d+" "+d,coordorigin:-c+" "+-c}),{width:d,height:d})}function r(t,r,l){i(f,i(n(a(),{rotation:360/s.lines*t+"deg",left:~~r}),i(n(e("roundrect",{arcsize:s.corners}),{width:c,height:s.width,left:s.radius,top:-s.width>>1,filter:l}),e("fill",{color:o(s.color,t),opacity:s.opacity}),e("stroke",{opacity:0}))))}var l,c=s.length+s.width,d=2*c,u=2*-(s.width+s.length)+"px",f=n(a(),{position:"absolute",top:u,left:u});if(s.shadow)for(l=1;l<=s.lines;l++)r(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=s.lines;l++)r(l);return i(t,f)},r.prototype.opacity=function(t,i,e,s){var n=t.firstChild;s=s.shadow&&s.lines||0,n&&i+s<n.childNodes.length&&(n=n.childNodes[i+s],n=n&&n.firstChild,n=n&&n.firstChild,n&&(n.opacity=e))}}var c,d=["webkit","Moz","ms","O"],u={},f=function(){var e=t("style",{type:"text/css"});return i(document.getElementsByTagName("head")[0],e),e.sheet||e.styleSheet}(),h={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};r.defaults={},a(r.prototype,{spin:function(i){this.stop();var e=this,s=e.opts,a=e.el=n(t(0,{className:s.className}),{position:s.position,width:0,zIndex:s.zIndex});if(s.radius+s.length+s.width,n(a,{left:s.left,top:s.top}),i&&i.insertBefore(a,i.firstChild||null),a.setAttribute("role","progressbar"),e.lines(a,e.opts),!c){var o,r=0,l=(s.lines-1)*(1-s.direction)/2,d=s.fps,u=d/s.speed,f=(1-s.opacity)/(u*s.trail/100),h=u/s.lines;!function p(){r++;for(var t=0;t<s.lines;t++)o=Math.max(1-(r+(s.lines-t)*h)%u*f,s.opacity),e.opacity(a,t*s.direction+l,o,s);e.timeout=e.el&&setTimeout(p,~~(1e3/d))}()}return e},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=void 0),this},lines:function(s,a){function r(i,e){return n(t(),{position:"absolute",width:a.length+a.width+"px",height:a.width+"px",background:i,boxShadow:e,transformOrigin:"left",transform:"rotate("+~~(360/a.lines*d+a.rotate)+"deg) translate("+a.radius+"px,0)",borderRadius:(a.corners*a.width>>1)+"px"})}for(var l,d=0,u=(a.lines-1)*(1-a.direction)/2;d<a.lines;d++)l=n(t(),{position:"absolute",top:1+~(a.width/2)+"px",transform:a.hwaccel?"translate3d(0,0,0)":"",opacity:a.opacity,animation:c&&e(a.opacity,a.trail,u+d*a.direction,a.lines)+" "+1/a.speed+"s linear infinite"}),a.shadow&&i(l,n(r("#000","0 0 4px #000"),{top:"2px"})),i(s,i(l,r(o(a.color,d),"0 0 1px rgba(0,0,0,.1)")));return s},opacity:function(t,i,e){i<t.childNodes.length&&(t.childNodes[i].style.opacity=e)}});var p=n(t("group"),{behavior:"url(#default#VML)"});return!s(p,"transform")&&p.adj?l():c=s(p,"animation"),r}),Array.prototype.forEach||(Array.prototype.forEach=function(t,i){for(var e=0,s=this.length;s>e;++e)t.call(i,this[e],e,this)}),function(t){window.isRetina=!1,window.devicePixelRatio>=1.2&&(window.isRetina=!0,t("[data-src-2x]").each(function(){"IMG"===this.tagName?t(this).attr("src",t(this).attr("data-src-2x")):t(this).css({"background-image":"url("+t(this).attr("data-src-2x")+")"})})),t(".four-oh-four").length&&t("html, body").animate({scrollTop:t(".four-oh-four section").offset().top},500),t("#animated-profile path").each(void 0===navigator.userAgent||-1==navigator.userAgent.indexOf("Chrome")&&-1==navigator.userAgent.indexOf("Safari")||t(window).width()<800?function(){this.style.stroke="#EEEEEE",t(this).attr("fill",t(this).data("fill"))}:function(){var i=this.getTotalLength();this.style.transition=this.style.WebkitTransition="none",this.style.strokeDasharray=i+" "+i,this.style.strokeDashoffset=i,this.getBoundingClientRect(),this.style.transition=this.style.WebkitTransition="stroke-dashoffset 10s ease-in-out, fill 5s ease, height .2s ease",this.style.strokeDashoffset="0",this.style.stroke="#EEEEEE",this.classList.contains("glasses")?setTimeout(function(i){t(i).attr("fill",t(i).data("fill"))},1e4,[this]):this.classList.contains("seven")?setTimeout(function(i){t(i).attr("fill",t(i).data("fill"))},5e3,[this]):this.classList.contains("one-d")?setTimeout(function(i){t(i).attr("fill",t(i).data("fill"))},5500,[this]):this.classList.contains("four")?setTimeout(function(i){t(i).attr("fill",t(i).data("fill"))},7500,[this]):this.classList.contains("zero")?setTimeout(function(i){t(i).attr("fill",t(i).data("fill"))},6e3,[this]):this.classList.contains("e-f")?setTimeout(function(i){t(i).attr("fill",t(i).data("fill"))},6500,[this]):setTimeout(function(i){t(i).attr("fill",t(i).data("fill"))},7e3,[this])})}($);var opts={lines:13,length:20,width:10,radius:30,corners:1,rotate:0,direction:1,color:"#FFA700",speed:1,trail:60,shadow:!1,hwaccel:!1,className:"spinner",zIndex:2e9,top:"50%",left:"50%"};!function(t){lfmOpts={APIkey:"6a77d69fd4f528fe5101f0e2e4912e8c",User:"iBrianAnders",limit:24,period:"1month"};{var i=document.getElementById("albums-spinner");new Spinner(opts).spin(i)}t(".albums")&&t.ajax({type:"GET",url:"http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user="+lfmOpts.User+"&period="+lfmOpts.period+"&api_key="+lfmOpts.APIkey+"&format=json&limit="+lfmOpts.limit+"&callback=?",dataType:"json",success:function(e){if(void 0===e.topalbums)return t(".albums").hide(),void t(".instagram").addClass("full");var s=[],n=0,a=12;e.topalbums.album.forEach(function(t){-1===t.image[t.image.length-1]["#text"].indexOf("default")&&n!==a&&(s.push("<a target='_blank' href='"+t.url+"' class='album'><img src='"+t.image[t.image.length-1]["#text"]+"'></a>"),n++)}),t(i).hide(),t(".albums").append(s.join(""))},error:function(){t(".albums").hide(),t(".instagram").addClass("full")}})}($),function(t){iOpts={APIkey:"f42ca37467bc4296b311a70e1258c88e",User:"196017474"};{var i=document.getElementById("instagram-spinner");new Spinner(opts).spin(i)}t(".instagram")&&t.ajax({type:"GET",url:"https://api.instagram.com/v1/users/"+iOpts.User+"/media/recent/?client_id="+iOpts.APIkey,dataType:"jsonp",success:function(e){if(void 0===e.data)return t(".instagram").hide(),void t(".albums").addClass("full");var s=[];e.data.forEach(function(t,i){i>=12||s.push(window.isRetina?"<a target='_blank' href='"+t.link+"'><img src='"+t.images.low_resolution.url+"'></a>":"<a target='_blank' href='"+t.link+"'><img src='"+t.images.thumbnail.url+"'></a>")}),t(i).hide(),t(".instagram").append(s.join(""))},error:function(){t(".instagram").hide(),t(".albums").addClass("full")}})}($);