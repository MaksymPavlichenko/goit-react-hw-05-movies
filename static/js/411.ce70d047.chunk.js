"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[411],{4377:function(t,n,r){r.d(n,{GZ:function(){return v},IY:function(){return p},MX:function(){return d},Rb:function(){return f},k8:function(){return o}});var e=r(5861),a=r(7757),c=r.n(a),u=r(4569),i=r.n(u);i().defaults.baseURL="https://api.themoviedb.org/3";var s="a689f712572f24483fe422c2558207e7",o=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i()("/trending/movie/day?api_key=".concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i()("/search/movie?api_key=".concat(s,"&query=").concat(n,"&page=1"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i()("/movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i()("/movie/".concat(n,"/credits?api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i()("/movie/".concat(n,"/reviews?api_key=").concat(s,"&page=1"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},2987:function(t,n,r){r.r(n),r.d(n,{default:function(){return d}});var e=r(885),a=r(2791),c=r(470),u=r(4377),i=r(4003),s="CastInfo_CastInfoList__1LKaV",o="CastInfo_CastImg__c+z9w",f=r(184),p=function(t){var n=t.data;return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{className:s,children:n.map((function(t){var n=t.id,r=t.profile_path,e=t.name,a=t.character;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{className:o,src:r?"https://image.tmdb.org/t/p/w200/"+r:i,alt:e}),(0,f.jsx)("p",{children:e}),(0,f.jsxs)("p",{children:["Character: ",a]})]},n)}))})})},d=function(){var t=(0,c.UO)().movieId,n=(0,a.useState)(null),r=(0,e.Z)(n,2),i=r[0],s=r[1];return(0,a.useEffect)((function(){(0,u.MX)(t).then((function(t){var n=t.cast;s(n)}))}),[t]),(0,f.jsx)(f.Fragment,{children:i&&(0,f.jsx)(p,{data:i})})}},4003:function(t,n,r){t.exports=r.p+"static/media/img.488812dc05f61d9a4ae9.jpeg"}}]);
//# sourceMappingURL=411.ce70d047.chunk.js.map