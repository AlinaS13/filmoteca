"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{713:function(e,t,n){var r=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="a438b3320e0856ef78f03a44c35f6579",i=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={getMoviesDay:i,getMoviesQuery:o,getMoviesDetails:f,getMoviesCast:p,getMoviesReviews:l};t.Z=v},134:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(861),a=n(439),u=n(757),c=n.n(u),s=n(791),i=n(87),o=n(713),f=n(184);function p(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],u=t[1],p=(0,s.useState)(""),l=(0,a.Z)(p,2),v=l[0],d=l[1],h=(0,i.lr)(),g=(0,a.Z)(h,2),m=g[0],x=g[1],y=m.get("query");(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.getMoviesQuery(v);case 2:t=e.sent,u(t.data.results),console.log(t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();v&&e()}),[v]),(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.getMoviesQuery(y);case 2:t=e.sent,u(t.data.results),console.log(t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();y&&e()}),[]);return(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d(e.target.searchfield.value),x({query:e.target.searchfield.value})},children:[(0,f.jsx)("input",{name:"searchfield",type:"text",autoComplete:"off",placeholder:"Search movies"}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})}),(0,f.jsx)("ul",{children:n.map((function(e){var t=e.title,n=e.id;return(0,f.jsx)("li",{children:(0,f.jsxs)(i.rU,{to:"".concat(n),state:{from:"/movies?".concat(m)},children:[t," "]})},n)}))})]})}}}]);
//# sourceMappingURL=134.8f19a236.chunk.js.map