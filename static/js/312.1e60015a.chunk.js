"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[312],{4377:function(n,e,r){r.d(e,{GZ:function(){return p},IY:function(){return d},MX:function(){return v},Rb:function(){return f},k8:function(){return o}});var t=r(5861),a=r(7757),c=r.n(a),i=r(4569),s=r.n(i);s().defaults.baseURL="https://api.themoviedb.org/3";var u="a689f712572f24483fe422c2558207e7",o=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s()("/trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s()("/search/movie?api_key=".concat(u,"&query=").concat(e,"&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s()("/movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s()("/movie/".concat(e,"/credits?api_key=").concat(u));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s()("/movie/".concat(e,"/reviews?api_key=").concat(u,"&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},2312:function(n,e,r){r.r(e),r.d(e,{default:function(){return x}});var t=r(885),a=r(2791),c=r(470),i=r(4377),s=r(6731),u="AddInfo_AddInfoList__uDuWN",o=r(184),f=function(n){var e=n.id;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:"Add info"}),(0,o.jsxs)("ul",{className:u,children:[(0,o.jsx)("li",{children:(0,o.jsx)(s.rU,{to:"/movies/".concat(e,"/cast"),children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(s.rU,{to:"/movies/".concat(e,"/reviews"),children:"Reviews"})})]})]})},d="MovieInfo_MovieCard__6VrlC",v="MovieInfo_MovieInfo__xs3Fi",p="MovieInfo_MovieInfoList__ZCOGp",l="MovieInfo_MovieInfoListItem__M1gfU",h=function(n){var e=n.data,r=e.poster_path,t=e.title,a=e.vote_average,c=e.overview,i=e.genres;return(0,o.jsxs)("div",{className:d,children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(r),alt:t}),(0,o.jsxs)("div",{className:v,children:[(0,o.jsx)("h2",{children:t}),(0,o.jsxs)("p",{children:["User Score: ",Math.round(10*a),"%"]}),(0,o.jsx)("h3",{children:"Overview"}),(0,o.jsx)("p",{children:c}),(0,o.jsx)("h3",{children:"Genres"}),(0,o.jsx)("ul",{className:p,children:i.map((function(n){var e=n.id,r=n.name;return(0,o.jsx)("li",{className:l,children:r},e)}))})]})]})},x=function(){var n=(0,c.UO)().movieId,e=(0,a.useState)(null),r=(0,t.Z)(e,2),s=r[0],u=r[1],d=(0,c.s0)();(0,a.useEffect)((function(){(0,i.IY)(n).then((function(n){u(n)}))}),[n]);return(0,o.jsxs)(o.Fragment,{children:[s&&(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{type:"button",onClick:function(){d("/")},children:"Go back"}),(0,o.jsx)(h,{data:s}),(0,o.jsx)(f,{id:n})]}),(0,o.jsx)(c.j3,{})]})}}}]);
//# sourceMappingURL=312.1e60015a.chunk.js.map