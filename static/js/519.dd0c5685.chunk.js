"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[519],{713:function(n,t,e){var r=e(861),a=e(757),c=e.n(a),i=e(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="a438b3320e0856ef78f03a44c35f6579",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l={getMoviesDay:s,getMoviesQuery:u,getMoviesDetails:p,getMoviesCast:f,getMoviesReviews:g};t.Z=l},519:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,c,i,o,s=e(861),u=e(439),p=e(757),f=e.n(p),g=e(791),l=e(689),m=e(713),h=e(168),x=e(444),d=x.ZP.ul(r||(r=(0,h.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  margin-left: auto;\n  margin-right: auto;\n"]))),v=x.ZP.li(a||(a=(0,h.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),w=x.ZP.img(c||(c=(0,h.Z)(["\n  width: 100%;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),Z=x.ZP.h2(i||(i=(0,h.Z)(["\n  text-align: center;\n  font-weight: 900;\n  font-size: 48px;\n"]))),b=x.ZP.p(o||(o=(0,h.Z)(["\n  text-align: center;\n  margin-bottom: 4px;\n  color: #000;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 2;\n  letter-spacing: 0.06em;\n  @media screen and (min-width: 768px) {\n    font-weight: 700;\n    font-size: 20px;\n  }\n"]))),k=e(184);function y(){var n,t=(0,l.UO)().movieId,e=(0,g.useState)(null!==(n=JSON.parse(localStorage.getItem("cast-".concat(t))))&&void 0!==n?n:[]),r=(0,u.Z)(e,2),a=r[0],c=r[1];return(0,g.useEffect)((function(){var n=function(){var n=(0,s.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.Z.getMoviesCast(t);case 2:e=n.sent,c(e.data.cast),console.log(e.data.cast),localStorage.setItem("cast-".concat(t),JSON.stringify(e.data.cast));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();localStorage.getItem("cast-".concat(t))||n(t)}),[]),(0,k.jsx)(d,{children:a.map((function(n){return(0,k.jsxs)(v,{children:[(0,k.jsx)(w,{src:n.profile_path?"https://image.tmdb.org/t/p/w500/".concat(n.profile_path):"https://picsum.photos/600/900?image=259",alt:n.name}),(0,k.jsxs)(Z,{children:[" ",n.name]}),(0,k.jsxs)(b,{children:["Character: ",n.character]})]},n.id)}))})}}}]);
//# sourceMappingURL=519.dd0c5685.chunk.js.map