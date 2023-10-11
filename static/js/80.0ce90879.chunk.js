"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[80],{3957:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",c=n.p+"static/media/Avengers_logo.9eaf219344d83362e830.png",a=n(184),s=function(){return(0,a.jsxs)("div",{className:"app__banner",children:[(0,a.jsx)("img",{src:r,alt:"Avengers"}),(0,a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,a.jsx)("br",{}),"Stay tuned!"]}),(0,a.jsx)("img",{src:c,alt:"Avengers logo"})]})}},9613:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n.p+"static/media/error.42292aa12b6bc303ce99.gif",c=n(184),a=function(){return(0,c.jsx)("img",{style:{display:"inline-block",width:"250",height:"250px",margin:"0 auto"},src:r,alt:"Error"})}},121:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var r=n(4270),c=n(3433),a=n(9439),s=n(2791),i=n(8498),o=n(4304),u=n(3394),l=n(9613),p=n(1087),f=n(184),d=function(t){var e=t.item,n=t.index,r=(0,s.useState)(0),c=(0,a.Z)(r,2),o=c[0],u=c[1],l=(0,i.YD)({triggerOnce:!0,threshold:0}),d=(0,a.Z)(l,2),m=d[0],h=d[1];return(0,s.useEffect)((function(){if(e){var t=n>=8?100*((n-8)%8+1):100*(n+1)+100;0===n&&(t=100),u(t)}}),[n]),(0,f.jsx)("div",{className:"comics__item ".concat(h?"in-view":""),ref:function(t){m(t)},style:{transitionDelay:"".concat(o,"ms")},children:(0,f.jsxs)(p.rU,{to:"/comics/".concat(e.id),children:[(0,f.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),(0,f.jsx)("div",{className:"comics__item-name",children:e.title}),(0,f.jsx)("div",{className:"comics__item-price",children:e.price})]})})},m=function(t,e,n){switch(t){case"waiting":return(0,f.jsx)(u.Z,{});case"loading":return n?(0,f.jsx)(e,{}):(0,f.jsx)(u.Z,{});case"confirmed":return(0,f.jsx)(e,{});case"error":return(0,f.jsx)(l.Z,{});default:throw new Error("Unexpected process state")}},h=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],r=e[1],u=(0,s.useState)(!1),l=(0,a.Z)(u,2),p=l[0],h=l[1],v=(0,s.useState)(130),g=(0,a.Z)(v,2),x=g[0],Z=g[1],b=(0,s.useState)(!1),w=(0,a.Z)(b,2),j=w[0],_=w[1],k=(0,s.useState)(!1),y=(0,a.Z)(k,2),C=y[0],N=y[1],E=(0,o.Z)(),S=E.getAllComics,A=E.process,P=E.setProcess,T=(0,i.YD)({triggerOnce:!0,threshold:0}),q=(0,a.Z)(T,2),D=q[0],O=q[1];(0,s.useEffect)((function(){N(O)}),[O]),(0,s.useEffect)((function(){B(x,!0)}),[]);var B=function(t,e){h(!e),S(t).then(U).then((function(){return P("confirmed")}))},U=function(t){var e=!1;t.length<8&&(e=!0),r([].concat((0,c.Z)(n),(0,c.Z)(t))),h(!1),Z(x+8),_(e)};return(0,f.jsxs)("div",{className:"comics__list",children:[m(A,(function(){return function(t){var e=t.map((function(t,e){return(0,f.jsx)(d,{item:t,index:e},e)}));return(0,f.jsx)("div",{className:"comics__grid",children:e})}(n)}),p),(0,f.jsx)("button",{ref:D,disabled:p||j,onClick:function(){return B(x)},className:"button button__main button__long dellay ".concat(C?"visible":""),children:(0,f.jsx)("div",{className:"inner",children:"load more"})})]})},v=n(3957),g=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(r.q,{children:[(0,f.jsx)("meta",{name:"description",content:"Page with list of our comics"}),(0,f.jsx)("title",{children:"Comics page"})]}),(0,f.jsx)(v.Z,{}),(0,f.jsx)(h,{})]})}},4304:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(4165),c=n(5861),a=n(9439),s=n(2791),i=function(){var t=function(){var t=(0,s.useState)("waiting"),e=(0,a.Z)(t,2),n=e[0],i=e[1],o=(0,s.useCallback)(function(){var t=(0,c.Z)((0,r.Z)().mark((function t(e){var n,c,a,s,o,u=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",c=u.length>2&&void 0!==u[2]?u[2]:null,a=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},i("loading"),t.prev=4,t.next=7,fetch(e,{method:n,body:c,headers:a});case 7:if((s=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(s.status));case 10:return t.next=12,s.json();case 12:return o=t.sent,t.abrupt("return",o);case 16:throw t.prev=16,t.t0=t.catch(4),i("error"),t.t0;case 20:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{request:o,clearError:(0,s.useCallback)((function(){i("loading")}),[]),process:n,setProcess:i}}(),e=t.request,n=t.clearError,i=t.process,o=t.setProcess,u="https://gateway.marvel.com:443/v1/public/",l="apikey=35f739fa5a14330027377d5d09166596",p=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var n,c,a=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:210,t.next=3,e("".concat(u,"characters?limit=9&offset=").concat(n,"&").concat(l));case 3:return c=t.sent,t.abrupt("return",c.data.results.map(g));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters?").concat(l));case 2:return n=t.sent,t.abrupt("return",n.data.total);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(n){var c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters?name=").concat(n,"&").concat(l));case 2:return c=t.sent,t.abrupt("return",c.data.results.map(g));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(n){var c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters/").concat(n,"?").concat(l));case 2:return c=t.sent,t.abrupt("return",g(c.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(){var n,c,a=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:0,t.next=3,e("".concat(u,"comics?orderBy=issueNumber&limit=8&offset=").concat(n,"&").concat(l));case 3:return c=t.sent,t.abrupt("return",c.data.results.map(x));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,c.Z)((0,r.Z)().mark((function t(n){var c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"comics/").concat(n,"?").concat(l));case 2:return c=t.sent,t.abrupt("return",x(c.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},x=function(t){var e;return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:(null===(e=t.textObjects[0])||void 0===e?void 0:e.language)||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{clearError:n,process:i,setProcess:o,getAllCharacters:p,getCharacterByName:d,getCharacter:m,getAllComics:h,getComic:v,getTotalCharactersCount:f}}}}]);
//# sourceMappingURL=80.0ce90879.chunk.js.map