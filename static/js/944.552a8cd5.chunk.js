"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[944],{713:function(e,n,t){var r=t(861),a=t(757),c=t.n(a),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="a438b3320e0856ef78f03a44c35f6579",s=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v={getMoviesDay:s,getMoviesQuery:o,getMoviesDetails:p,getMoviesCast:f,getMoviesReviews:l};n.Z=v},944:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r,a,c=t(861),u=t(439),i=t(757),s=t.n(i),o=t(791),p=t(689),f=t(713),l=t(168),v=t(444),g=v.ZP.p(r||(r=(0,l.Z)(["\n  color: #000;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  @media screen and (min-width: 768px) {\n    font-weight: 500;\n    font-size: 16px;\n  }\n"]))),h=v.ZP.h2(a||(a=(0,l.Z)(["\n  text-align: center;\n  margin-top: 35px;\n  margin-bottom: 35px;\n"]))),d=t(184);function m(){var e,n=(0,p.UO)().movieId,t=(0,o.useState)(null!==(e=JSON.parse(localStorage.getItem("reviews-".concat(n))))&&void 0!==e?e:[]),r=(0,u.Z)(t,2),a=r[0],i=r[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,c.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.getMoviesReviews(n);case 2:t=e.sent,i(t.data.results),localStorage.setItem("reviews-".concat(n),JSON.stringify(t.data.results));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();localStorage.getItem("reviews-".concat(n))||e(n)}),[]),(0,d.jsx)("ul",{children:a.length?a.map((function(e){return(0,d.jsxs)("li",{children:[(0,d.jsxs)("h2",{children:["Author: ",e.author]}),(0,d.jsx)(g,{children:e.content})]},e.id)})):(0,d.jsx)(h,{children:"We don't have any reviews for this movie."})})}}}]);
//# sourceMappingURL=944.552a8cd5.chunk.js.map