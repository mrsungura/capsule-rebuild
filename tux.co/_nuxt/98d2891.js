(window.webpackJsonp=window.webpackJsonp||[]).push([[48,34],{494:function(t,e,n){},495:function(t,e,n){"use strict";n.r(e);n(42),n(36),n(34),n(16),n(64),n(26),n(65);var o=n(10),r=n(499),l=n(85);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:{options:{type:Object,default:function(){return{}}},autoplay:{type:Boolean,default:!1},observer:{type:Boolean,default:!0}},data:function(){return{isPlaying:!1}},mounted:function(){var t=this,e=c(c({},{muted:!0,controls:!1,loop:!0,autopause:!1,responsive:!0}),this.options);this.player=new r.a(this.$refs.iframe,e),this.player.on("loaded",this.onLoad),this.observer&&(this.st=l.a.create({trigger:this.$el,start:"top 90%",end:"bottom 10%",onEnter:function(){t.autoplay&&t.play()},onEnterBack:function(){t.autoplay&&t.play()},onLeave:function(){t.pause()},onLeaveBack:function(){t.pause()}}))},beforeDestroy:function(){this.player.off("loaded"),this.st&&this.st.kill()},methods:{play:function(){this.isPlaying||(this.player.play(),this.isPlaying=!0)},pause:function(){this.isPlaying&&(this.player.pause(),this.isPlaying=!1)},onLoad:function(){}}},m=(n(496),n(18)),component=Object(m.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vimeoPlayer"},[e("div",{ref:"iframe",staticClass:"vimeoPlayer__iframe"})])}),[],!1,null,"326133d6",null);e.default=component.exports},496:function(t,e,n){"use strict";n(494)},680:function(t,e,n){},763:function(t,e,n){"use strict";n(680)},794:function(t,e,n){"use strict";n.r(e);var o={props:{text:{type:String,default:function(){return""}},textePetiteTaille:{type:String,default:function(){return""}},positionColonneTexte:{type:String,default:function(){return"0"}},medias:{type:Array,default:function(){return[]}}}},r=(n(763),n(18)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mod modDuoTextImg flex flexSB sHalfBl"},[n("div",{staticClass:"gauche"},[n("div",{staticClass:"pin-spacer"},[n("div",{staticClass:"elFixed",domProps:{innerHTML:t._s(t.text)}})])]),t._v(" "),n("div",{staticClass:"droite"},[t.medias[0].image?n("div",{staticClass:"ratioMedia r"},[n("ui-image",{staticClass:"enf",attrs:{media:t.medias[0].image,srcset:!0,sizes:"(min-width: 1024px) 66vw, 100vw"}}),t._v(" "),n("svg",{attrs:{width:t.medias[0].image.mediaDetails.width,height:t.medias[0].image.mediaDetails.height,viewBox:["0 0 "+t.medias[0].image.mediaDetails.width+" "+ +t.medias[0].image.mediaDetails.height],fill:"none",xmlns:"http://www.w3.org/2000/svg"}})],1):t.medias[0].vimeoId?n("div",{staticClass:"ratioMedia r"},[n("ui-vimeo-player",{staticClass:"enf",attrs:{options:{id:t.medias[0].vimeoId},autoplay:""}})],1):n("div",{staticClass:"ratioMedia r"},[n("ui-video",{staticClass:"enf",attrs:{url:t.medias[0].video.mediaItemUrl}}),t._v(" "),n("svg",{attrs:{width:t.medias[0].video.mediaDetails.width,height:t.medias[0].video.mediaDetails.height,viewBox:["0 0 "+t.medias[0].video.mediaDetails.width+" "+t.medias[0].video.mediaDetails.height],fill:"none",xmlns:"http://www.w3.org/2000/svg"}})],1)])])}),[],!1,null,"2836de90",null);e.default=component.exports;installComponents(component,{UiImage:n(334).default,UiVimeoPlayer:n(495).default,UiVideo:n(331).default})}}]);