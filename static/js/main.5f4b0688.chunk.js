(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(n,e,t){n.exports=t(32)},26:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(5),o=t.n(i),c=(t(26),t(10)),u=t(11),s=t(16),l=t(12),d=t(17),p=t(3),m=t(13),f=t.n(m),h=Object(r.createContext)(),x=function(n){var e=Object(r.useState)(null),t=Object(p.a)(e,2),i=t[0],o=t[1],c=Object(r.useState)(null),u=Object(p.a)(c,2),s=u[0],l=u[1],d=Object(r.useState)(null),m=Object(p.a)(d,2),x=m[0],b=m[1],g=Object(r.useState)(null),v=Object(p.a)(g,2),w=v[0],j=v[1],O=Object(r.useState)(!1),k=Object(p.a)(O,2),y=k[0],E=k[1],C=Object(r.useState)(!1),T=Object(p.a)(C,2),W=T[0],S=T[1],I=Object(r.useState)(0),z=Object(p.a)(I,2),J=z[0],M=z[1],P=function(n){return Math.floor(Math.random()*n+1)},Y=function(){var n=P(50),e=P(50),t=n+e;l("".concat(n," + ").concat(e)),b(t)},N=function(){for(var n=P(20),e=P(20);e===n;)e=P(20);var t=n>e?n:e,r=n<e?n:e,a=t-r;l("".concat(t," - ").concat(r)),b(a)},F=function(){var n=P(5),e=P(5),t=n*e;l("".concat(n," x ").concat(e)),b(t)},D=function(){var n=[F,Y,N];return n[P(n.length)-1]()},K=function(){var n=s.indexOf("\u2260");n>-1&&l(s.substr(0,n-1))};return Object(r.useEffect)(function(){if(y){var n=setTimeout(function(){K(),j(null),E(!1),S(!1)},2500);return function(){return clearTimeout(n)}}},[y]),Object(r.useEffect)(function(){D(),o(f()())},[]),a.a.createElement(h.Provider,{value:{touchDevice:i,answer:x,response:w,setResponse:j,mathProblem:s,generateMathProblem:D,showHelp:J,setShowHelp:M,digitPress:function(n){var e=(w||"").toString();j(parseInt(e+n))},checkResponse:function(){w&&(w===x?(j(null),l("".concat(s," = ").concat(x)),E(!1),S(!0)):(l("".concat(s," \u2260 ").concat(w)),E(!0),S(!1)))},isWrong:y,setIsWrong:E,isCorrect:W,setIsCorrect:S,startOver:function(){D(),E(!1),S(!1),j(null)},resetMathProblem:K,wrong_duration:2500}},n.children)},b=t(1),g=t(2),v=t(4),w=t.n(v);function j(){var n=Object(b.a)(["\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform:translate3d(0, -470px, 0);\n  transition: transform .2s ease-in-out;\n  position:absolute;\n  left:0; right:0;\n  & img {\n    max-width: 100%;\n    max-height: 100%;\n    height:400px;\n    margin-top:20px;\n  }\n  &.show {\n    transform:translate3d(0, 0, 0);\n  }\n"]);return j=function(){return n},n}var O=["Wp5CIL0eQj8D6","1ZostJS3YDb34j0D7s","pOTEhtq8Jv7voNl7mb","W6aQJOobbZ8BboYFY4","1oInQF9RIwD1VXe8Ha","u47vUoXTLfLCWP7bt4","5vidmYpnogEo8chJcx","l4pTfLGPVb6KM3jmU","jVTEgn7a5nkvGn3069","iEbPnIPyh9Exq","4NWT0Ry3dtTLW","3oFzmcl7D4fv7BSW4w","bg283WKwSbH3i","Jlys8jzFoI8ne","JoaeMGYYkHpC","3ohs7WhawOVfLMJ14c","3ohs4C4pHiR4xE70qc","1d9qTol1d5xZCTkwIA","ygx4FycuFuEnl5lpwh","6InGIyfwSIoIU","3oKIPv4pMwu3NQtKhO","nvKjkfWIl2msw","rPGkUqdQkB7xe","W0DTCPYu9vrhu","YS3j8cDQ5Ff68","2zoLjKxnxHYS5fTJrr","5e1UBubfNAM2BSnwmF"],k=g.a.div(j()),y=function(n){var e=Object(r.useContext)(h),t=e.startOver,i=e.isCorrect,o=Object(r.useState)(null),c=Object(p.a)(o,2),u=c[0],s=c[1],l=Object(r.useState)(!1),d=Object(p.a)(l,2),m=d[0],f=d[1];return Object(r.useEffect)(function(){if(i){var n=O[Math.floor(Math.random()*O.length)];s("https://i.giphy.com/media/".concat(n,"/giphy.gif"));var e=setTimeout(function(){f(!0)},100);return function(){return clearTimeout(e)}}},[i]),a.a.createElement(k,{onClick:t,className:w()({show:m})},a.a.createElement("img",{src:u,alt:"yes"}))};function E(){var n=Object(b.a)(["\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform:translate3d(0, -300px, 0);\n  transition: transform .2s ease-in-out;\n  position:absolute;\n  left:0; right:0;\n  & img {\n    max-width: 100%;\n    max-height: 100%;\n    height:230px;\n    margin-top:20px;\n  }\n  &.show {\n    transform:translate3d(0, 0, 0);\n  }\n"]);return E=function(){return n},n}var C=["26xBIgTMTE5b3Ware","XwnxEG9365aMw","l378nu4kJajdfCvUk","mcsE75zh9etKE","3o7aCYje2hvVsaTpio","QObQirfaL3arJiKxeW","llXSgLPOy6DfCNcJDp","4KFwpiwm1JYEZi5Gsq","28j6GjBumA7ZKmaKI9","9oICl27yHGp3wAXUW6","3d6WSrv3PbyZq1vdjC","3og0ILLYnJryuFD7Gw","3ohhwkMaNYF1TA0NJS","EEFEyXLO9E0YE","1d5ZfBGrEQXfzx4sYf"],T=g.a.div(E()),W=function(n){var e=Object(r.useContext)(h),t=e.setIsWrong,i=e.isWrong,o=e.wrong_duration,c=e.setResponse,u=e.resetMathProblem,s=Object(r.useState)(null),l=Object(p.a)(s,2),d=l[0],m=l[1],f=Object(r.useState)(!1),x=Object(p.a)(f,2),b=x[0],g=x[1];Object(r.useEffect)(function(){if(i){var n=C[Math.floor(Math.random()*C.length)];m("https://i.giphy.com/media/".concat(n,"/giphy.gif"));var e=setTimeout(function(){g(!0);var n=setTimeout(function(){g(!1)},o);return function(){return clearTimeout(n)}},100);return function(){return clearTimeout(e)}}},[i]);return a.a.createElement(T,{className:w()({show:b}),onClick:function(){g(!1),t(!1),c(null),u()}},a.a.createElement("img",{src:d,alt:"nope"}))};function S(){var n=Object(b.a)(["\n  width: 100vw;\n  height: 100vh;\n  position:absolute;\n  top:0;\n  left:0;\n  background-image: url(https://media.giphy.com/media/WNJATm9pwnjpjI1i0g/giphy.gif);\n  background-repeat: repeat-x;\n  /* desktop */\n  @media (min-width: 769px) {\n    background-size: contain;\n  }\n  /* tablet & mobile */\n  @media (max-width: 768px) {\n    background-size: cover;\n  }\n"]);return S=function(){return n},n}var I=g.a.div(S()),z=function(n){return a.a.createElement(I,{style:{backgroundImage:'url("https://media.giphy.com/media/WNJATm9pwnjpjI1i0g/giphy.gif")'}})},J=t(19);function M(){var n=Object(b.a)(["\n  z-index: 1;\n  background-color: #252525;\n  color: #fff;\n  border-radius:5px;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  font-weight:700;\n  \n  &:hover, &:active {\n    background-color: #333333;\n  }\n\n  /* desktop */\n  @media (min-width: 769px) {\n    height: 70px;\n    font-size:25px;\n  }\n  /* tablet */\n  @media (max-width: 768px) {\n    height: 70px;\n    font-size:25px\n  }\n  /*  phone */\n  @media only screen \n    and (min-device-width: 375px) \n    and (max-device-width: 667px) \n    and (-webkit-min-device-pixel-ratio: 2)\n    and (orientation: portrait) { \n      height: 60px;\n      font-size:20px\n  }\n"]);return M=function(){return n},n}var P=g.a.div(M()),Y=function(n){return a.a.createElement(P,{style:Object(J.a)({},n.style),onClick:n.onClick},n.children)};function N(){var n=Object(b.a)(["\n  display:grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n  padding: 20px;\n"]);return N=function(){return n},n}var F=g.a.div(N()),D=function(n){for(var e=Object(r.useContext)(h),t=e.digitPress,i=e.checkResponse,o=e.isWrong,c=e.isCorrect,u=[],s=function(n){u.push(a.a.createElement(Y,{key:n,onClick:function(){return!o&&!c&&t(n)}},n))},l=1;l<10;l++)s(l);return u.push(a.a.createElement(Y,{key:0,onClick:function(){return!o&&!c&&t(0)}},"0")),u.push(a.a.createElement(Y,{key:"ok",onClick:function(){return!o&&!c&&i()},style:{backgroundColor:"#2e86c0",gridColumn:"2/4"}},"OK")),a.a.createElement(F,null,u)};function K(){var n=Object(b.a)(["\n  width: 100%;\n  font-size: 5rem;\n  height: 80px;\n  border: none;\n  background-color: #252525;\n  color: #fff;\n  padding: 10px 30px;\n  display:flex;\n  align-items:center;\n  justify-content:flex-end;\n  border-radius:5px;\n"]);return K=function(){return n},n}var L=g.a.div(K()),G=function(n){var e=Object(r.useContext)(h).response;return a.a.createElement(L,{onClick:n.onClick},e)};function B(){var n=Object(b.a)(["\n  width: 95%;\n  max-width: 450px;\n  margin-top: 30px;\n  opacity:initial;\n  transition: opacity .2s ease-in-out;\n  &.wrong {\n    opacity:30%;\n  }\n  &.correct {\n    visibility:hidden;\n  }\n  /* tablet & mobile */\n  @media (max-width: 768px) {\n    padding:20px\n  } \n"]);return B=function(){return n},n}var Q=g.a.section(B()),H=function(n){var e=Object(r.useContext)(h),t=e.setResponse,i=e.isWrong,o=e.isCorrect;return a.a.createElement(Q,{className:w()({wrong:i,correct:o})},a.a.createElement(G,{onClick:function(){return!i&&t(null)}}),a.a.createElement(D,null))};function R(){var n=Object(b.a)(["\n  font-size:2.5em;\n  text-align: center;\n  border-bottom: 5px dashed rgba(0, 0, 0, 0.7);\n  min-width: 150px;\n  transition: background-color,color 0.2s ease-in-out;\n  &.wrong {\n    border-radius: 5px;\n    background-color: rgba(193, 0, 0, 1); \n    color:white;\n    border-bottom: none;\n  }\n  \n  /* desktop */\n  @media (min-width: 769px) {\n    padding:30px\n  }\n  /* tablet */\n  @media (max-width: 768px) {\n    padding:20px\n  }\n  /* phone */\n  @media only screen \n    and (min-device-width: 375px) \n    and (max-device-width: 667px) \n    and (-webkit-min-device-pixel-ratio: 2)\n    and (orientation: portrait) {\n      padding:15px\n  }\n"]);return R=function(){return n},n}function q(){var n=Object(b.a)(["\n  z-index:1;\n"]);return q=function(){return n},n}var A=g.a.div(q()),U=g.a.h1(R()),X=function(n){var e=Object(r.useContext)(h),t=e.mathProblem,i=e.isCorrect,o=e.isWrong,c=e.startOver;return a.a.createElement(A,{onClick:c},a.a.createElement(U,{className:w()({correct:i,wrong:o})},t))};function Z(){var n=Object(b.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transform:translate3d(0, 0, 0);\n  transition: transform .2s ease-in-out;\n  &.wrong {  \n    transform:translate3d(0, 275px, 0);\n  }\n  &.correct {  \n    transform:translate3d(0, 450px, 0);\n  }\n"]);return Z=function(){return n},n}var V=g.a.section(Z()),_=function(n){var e=Object(r.useContext)(h),t=e.isWrong,i=e.isCorrect,o=e.wrong_duration,c=Object(r.useState)(!1),u=Object(p.a)(c,2),s=u[0],l=u[1],d=Object(r.useState)(!1),m=Object(p.a)(d,2),f=m[0],x=m[1];return Object(r.useEffect)(function(){if(t){var n=setTimeout(function(){l(!0);var n=setTimeout(function(){l(!1)},o);return function(){return clearTimeout(n)}},100);return function(){return clearTimeout(n)}}l(!1)},[t]),Object(r.useEffect)(function(){if(i){var n=setTimeout(function(){x(!0)},100);return function(){return clearTimeout(n)}}x(!1)},[i]),a.a.createElement(V,{className:w()({wrong:s,correct:f})},a.a.createElement(X,null),a.a.createElement(H,null))};function $(){var n=Object(b.a)(["\n  z-index:1;\n  /* desktop */\n  @media (min-width: 769px) {\n    width: ",";\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    width: ",";\n  }\n\n  & img {\n    max-width: 100%;\n    max-height: 100%;\n  }\n"]);return $=function(){return n},n}g.a.div($(),function(n){return"".concat(n.wDesktop,"px")},function(n){return"".concat(n.wMobile,"px")});function nn(){var n=Object(b.a)(["\n  cursor: pointer;\n  position: absolute;\n  padding: 20px;\n  z-index: 2;\n  /* desktop */\n  @media (min-width: 769px) {\n    top: 0px;\n    right: 0px;\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    top: -15px;\n    right: -15px;\n  }\n"]);return nn=function(){return n},n}g.a.div(nn());function en(){var n=Object(b.a)(["\n  background-color: rgba(99, 205, 218, 1);\n  border-radius: 20px;\n  border: 5px dashed rgba(0, 0, 0, 0.4);\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  /* desktop */\n  @media (min-width: 769px) {\n    padding: 30px;\n    max-width: 800px;\n    & h1 {\n      font-size: 1.9em;\n      margin-top:0;\n    }\n    & h2 {\n      font-size: 1.5em;\n      margin: 5px 0 5px;\n    }\n    & p {\n      line-height:1.4em;\n    }\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    padding: 15px;\n    max-width: 70vw;\n    & h1 {\n      font-size: 1.6em;\n      margin-top:10px;\n    }\n    & h2 {\n      font-size: 1.3em;\n      margin: 5px 0 5px;\n    }x\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(b.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.7);\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  /* desktop */\n  @media (min-width: 769px) {\n    padding-top: 100px;\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    padding-top: 50px;\n  }\n"]);return tn=function(){return n},n}g.a.div(tn()),g.a.div(en());function rn(){var n=Object(b.a)(["\n  flex: 1;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content:  'center';\n  flex-direction: column;\n  position: relative;\n  /* desktop */\n  @media screen \n    and (min-device-width: 1200px)  { \n      padding-top:100px;\n  }\n\n  /* tablet */\n  @media only screen \n    and (min-device-width: 768px) \n    and (max-device-width: 1024px) {\n    padding-top:100px;\n  }\n\n  /* phone */\n  @media only screen \n    and (min-device-width: 375px) \n    and (max-device-width: 667px){ \n      padding-top:0px;\n  }\n"]);return rn=function(){return n},n}function an(){var n=Object(b.a)(["\n  display: flex;\n  width: 100vw;\n  position: relative;\n  /* desktop */\n  @media (min-width: 769px) {\n    height: 100vh;\n  }\n  /* tablet & phones */\n  @media (max-width: 768px) {\n    height: 100%;\n  }\n"]);return an=function(){return n},n}var on=g.a.div(an()),cn=g.a.div(rn()),un=function(n){var e=Object(r.useContext)(h),t=e.isWrong,i=e.isCorrect;return a.a.createElement(on,null,a.a.createElement(cn,{style:{backgroundColor:function(n){var e="rgba(232, 67, 147,1.0)";return t||i?t?"#b2bec3":i?"#00b894":e:e}()}},i?a.a.createElement(a.a.Fragment,null,a.a.createElement(y,null),a.a.createElement(z,null)):null,t?a.a.createElement(W,null):null,a.a.createElement(_,null)))},sn=function(n){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return a.a.createElement(x,null,a.a.createElement(un,null))}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(sn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.5f4b0688.chunk.js.map