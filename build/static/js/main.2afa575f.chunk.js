(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(n,e,t){n.exports=t(32)},26:function(n,e,t){},32:function(n,e,t){"use strict";t.r(e);var i=t(0),r=t.n(i),a=t(5),o=t.n(a),c=(t(26),t(10)),u=t(11),d=t(16),m=t(12),l=t(17),s=t(3),p=t(13),f=t.n(p),h=Object(i.createContext)(),x=function(n){var e=Object(i.useState)(null),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(i.useState)(null),u=Object(s.a)(c,2),d=u[0],m=u[1],l=Object(i.useState)(null),p=Object(s.a)(l,2),x=p[0],g=p[1],b=Object(i.useState)(null),v=Object(s.a)(b,2),w=v[0],j=v[1],O=Object(i.useState)(!1),y=Object(s.a)(O,2),E=y[0],k=y[1],C=Object(i.useState)(!1),T=Object(s.a)(C,2),W=T[0],z=T[1],I=Object(i.useState)(0),S=Object(s.a)(I,2),J=S[0],M=S[1],P=function(n){return Math.floor(Math.random()*n+1)},Y=function(){var n=P(50),e=P(50),t=n+e;m("".concat(n," + ").concat(e)),g(t)},F=function(){for(var n=P(20),e=P(20);e===n;)e=P(20);var t=n>e?n:e,i=n<e?n:e,r=t-i;m("".concat(t," - ").concat(i)),g(r)},D=function(){var n=P(5),e=P(5),t=n*e;m("".concat(n," x ").concat(e)),g(t)},K=function(){var n=[D,Y,F];return n[P(n.length)-1]()};return Object(i.useEffect)(function(){if(E){var n=setTimeout(function(){var n=d.indexOf("\u2260");j(null),m(d.substr(0,n-1)),k(!1),z(!1)},2500);return function(){return clearTimeout(n)}}},[E]),Object(i.useEffect)(function(){K(),o(f()())},[]),r.a.createElement(h.Provider,{value:{touchDevice:a,answer:x,response:w,setResponse:j,mathProblem:d,generateMathProblem:K,showHelp:J,setShowHelp:M,digitPress:function(n){var e=(w||"").toString();j(parseInt(e+n))},checkResponse:function(){w&&(w===x?(j(null),m("".concat(d," = ").concat(x)),k(!1),z(!0)):(m("".concat(d," \u2260 ").concat(w)),k(!0),z(!1)))},isWrong:E,setIsWrong:k,isCorrect:W,setIsCorrect:z,startOver:function(){K(),k(!1),z(!1)},wrong_duration:2500}},n.children)},g=t(1),b=t(2);function v(){var n=Object(g.a)(["\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /* @media (min-width: 48em) {\n    width: 450px;\n    margin-top: 250px;\n  } */\n  @media (max-width: 48em) {\n    margin-top:10vh;\n    & img {\n      max-width: 100%;\n      max-height: 100%;\n      height: 400px;\n    }\n  }\n"]);return v=function(){return n},n}var w=["Wp5CIL0eQj8D6","1ZostJS3YDb34j0D7s","pOTEhtq8Jv7voNl7mb","W6aQJOobbZ8BboYFY4","1oInQF9RIwD1VXe8Ha","u47vUoXTLfLCWP7bt4","5vidmYpnogEo8chJcx","l4pTfLGPVb6KM3jmU","jVTEgn7a5nkvGn3069","iEbPnIPyh9Exq","4NWT0Ry3dtTLW","3oFzmcl7D4fv7BSW4w","bg283WKwSbH3i","Jlys8jzFoI8ne","JoaeMGYYkHpC","3ohs7WhawOVfLMJ14c","3ohs4C4pHiR4xE70qc","1d9qTol1d5xZCTkwIA","ygx4FycuFuEnl5lpwh","6InGIyfwSIoIU","3oKIPv4pMwu3NQtKhO","nvKjkfWIl2msw","rPGkUqdQkB7xe","W0DTCPYu9vrhu","YS3j8cDQ5Ff68","2zoLjKxnxHYS5fTJrr","5e1UBubfNAM2BSnwmF"],j=b.a.div(v()),O=function(n){var e=Object(i.useContext)(h).startOver,t=Object(i.useState)(null),a=Object(s.a)(t,2),o=a[0],c=a[1];return Object(i.useEffect)(function(){var n=w[Math.floor(Math.random()*w.length)];c("https://i.giphy.com/media/".concat(n,"/giphy.gif"))},[]),r.a.createElement(j,{onClick:e},r.a.createElement("img",{src:o,alt:"nope"}))},y=t(4),E=t.n(y);function k(){var n=Object(g.a)(["\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform:translate3d(0, -300px, 0);\n  transition: transform .2s ease-in-out;\n  visibility:hidden;\n  & img {\n    max-width: 100%;\n    max-height: 100%;\n    height:230px;\n  }\n  &.show {  \n    visibility:visible;\n    transform:translate3d(0, 0, 0);\n  }\n\n  /* desktop */\n  @media (min-width: 769px) {\n    margin-top:100px;\n  }\n\n  /* tablet & phone */\n  @media (max-width: 769px) {\n    margin-top:20px;\n  }\n"]);return k=function(){return n},n}var C=["26xBIgTMTE5b3Ware","XwnxEG9365aMw","l378nu4kJajdfCvUk","mcsE75zh9etKE","3o7aCYje2hvVsaTpio","QObQirfaL3arJiKxeW","llXSgLPOy6DfCNcJDp","4KFwpiwm1JYEZi5Gsq","28j6GjBumA7ZKmaKI9","9oICl27yHGp3wAXUW6","3d6WSrv3PbyZq1vdjC","3og0ILLYnJryuFD7Gw","3ohhwkMaNYF1TA0NJS","EEFEyXLO9E0YE","1d5ZfBGrEQXfzx4sYf"],T=b.a.div(k()),W=function(n){var e=Object(i.useContext)(h),t=e.isWrong,a=e.wrong_duration,o=Object(i.useState)(null),c=Object(s.a)(o,2),u=c[0],d=c[1],m=Object(i.useState)(!1),l=Object(s.a)(m,2),p=l[0],f=l[1];return Object(i.useEffect)(function(){if(t){var n=C[Math.floor(Math.random()*C.length)];d("https://i.giphy.com/media/".concat(n,"/giphy.gif"));var e=setTimeout(function(){f(!0);var n=setTimeout(function(){f(!1)},a);return function(){return clearTimeout(n)}},100);return function(){return clearTimeout(e)}}},[t]),r.a.createElement(T,{className:E()({show:p})},r.a.createElement("img",{src:u,alt:"nope"}))};function z(){var n=Object(g.a)(["\n  width: 100vw;\n  height: 100vh;\n  position:absolute;\n  top:0;\n  left:0;\n  background-image: url(https://media.giphy.com/media/WNJATm9pwnjpjI1i0g/giphy.gif);\n  background-repeat: repeat-x;\n  @media (min-width: 48em) {\n    background-size: contain;\n  }\n  @media (max-width: 48em) {\n    background-size: cover;\n  }\n"]);return z=function(){return n},n}var I=b.a.div(z()),S=function(n){return r.a.createElement(I,{style:{backgroundImage:'url("https://media.giphy.com/media/WNJATm9pwnjpjI1i0g/giphy.gif")'}})},J=t(19);function M(){var n=Object(g.a)(["\n  z-index: 1;\n  background-color: #252525;\n  color: #fff;\n  border-radius:5px;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  font-weight:700;\n  \n  &:hover, &:active {\n    background-color: #333333;\n  }\n\n  @media (min-width: 48em) {\n    height: 70px;\n    font-size:25px;\n  }\n  @media (max-width: 48em) {\n    height: 70px;\n    font-size:25px\n  }\n  @media only screen \n    and (min-device-width: 375px) \n    and (max-device-width: 667px) \n    and (-webkit-min-device-pixel-ratio: 2)\n    and (orientation: portrait) { \n      height: 60px;\n      font-size:20px\n  }\n"]);return M=function(){return n},n}var P=b.a.div(M()),Y=function(n){return r.a.createElement(P,{style:Object(J.a)({},n.style),onClick:n.onClick},n.children)};function F(){var n=Object(g.a)(["\n  display:grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n  padding: 20px;\n"]);return F=function(){return n},n}var D=b.a.div(F()),K=function(n){for(var e=Object(i.useContext)(h),t=e.digitPress,a=e.checkResponse,o=e.isWrong,c=e.isCorrect,u=[],d=function(n){u.push(r.a.createElement(Y,{key:n,onClick:function(){return!o&&!c&&t(n)}},n))},m=1;m<10;m++)d(m);return u.push(r.a.createElement(Y,{key:0,onClick:function(){return!o&&!c&&t(0)}},"0")),u.push(r.a.createElement(Y,{key:"ok",onClick:function(){return!o&&!c&&a()},style:{backgroundColor:"#2e86c0",gridColumn:"2/4"}},"OK")),r.a.createElement(D,null,u)};function L(){var n=Object(g.a)(["\n  width: 100%;\n  font-size: 5rem;\n  height: 80px;\n  border: none;\n  background-color: #252525;\n  color: #fff;\n  padding: 10px 30px;\n  display:flex;\n  align-items:center;\n  justify-content:flex-end;\n  border-radius:5px;\n"]);return L=function(){return n},n}var N=b.a.div(L()),G=function(n){var e=Object(i.useContext)(h).response;return r.a.createElement(N,{onClick:n.onClick},e)};function B(){var n=Object(g.a)(["\n  width: 95%;\n  max-width: 450px;\n  margin-top: 30px;\n  opacity:initial;\n  transition: opacity .2s ease-in-out;\n  &.wrong {\n    opacity:40%;\n  }\n  &.correct {\n    visibility:hidden;\n  }\n  @media (max-width: 48em) {\n    padding:20px\n  } \n"]);return B=function(){return n},n}var Q=b.a.section(B()),H=function(n){var e=Object(i.useContext)(h),t=e.setResponse,a=e.isWrong,o=e.isCorrect;return r.a.createElement(Q,{className:E()({wrong:a,correct:o})},r.a.createElement(G,{onClick:function(){return t(null)}}),r.a.createElement(K,null))};function q(){var n=Object(g.a)(["\n  font-size:2.5em;\n  color: white;\n  text-align: center;\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.7);\n  min-width: 150px;\n  @media (min-width: 48em) {\n    padding:30px\n  }\n  @media (max-width: 48em) {\n    padding:20px\n  }\n  @media only screen \n    and (min-device-width: 375px) \n    and (max-device-width: 667px) \n    and (-webkit-min-device-pixel-ratio: 2)\n    and (orientation: portrait) {\n      padding:15px\n  }\n"]);return q=function(){return n},n}function A(){var n=Object(g.a)(["\n  width: ",";\n  max-width:  ",";\n  margin-top: 30px;\n  z-index:1;\n  @media only screen\n    and(min-device-width: 375px)\n    and(max-device-width: 667px)\n    and(-webkit-min-device-pixel-ratio: 2)\n    and(orientation: portrait) {\n    width: 90%;\n  }\n"]);return A=function(){return n},n}var R=b.a.div(A(),function(n){return n.wide?"auto":"70%"},function(n){return n.wide?"initial":"250px"}),U=b.a.h1(q()),X=function(n){var e=Object(i.useContext)(h),t=e.mathProblem,a=e.isCorrect,o=e.isWrong,c=e.startOver;return r.a.createElement(R,{wide:a||o,onClick:c},r.a.createElement(U,null,t))};function Z(){var n=Object(g.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transform:translate3d(0, -300px, 0);\n  transition: transform .2s ease-in-out;\n  &.wrong {  \n    transform:translate3d(0, 0, 0);\n  }\n  &.correct {  \n    transform:translate3d(0, 500px, 0);\n  }\n"]);return Z=function(){return n},n}var V=b.a.section(Z()),_=function(n){var e=Object(i.useContext)(h),t=e.isWrong,a=e.wrong_duration,o=Object(i.useState)(!1),c=Object(s.a)(o,2),u=c[0],d=c[1];return Object(i.useEffect)(function(){if(t){var n=setTimeout(function(){d(!0);var n=setTimeout(function(){d(!1)},a);return function(){return clearTimeout(n)}},100);return function(){return clearTimeout(n)}}},[t]),r.a.createElement(V,{className:E()({wrong:u})},r.a.createElement(X,null),r.a.createElement(H,null))};function $(){var n=Object(g.a)(["\n  z-index:1;\n  @media (min-width: 48em) {\n    width: ",";\n  }\n  @media (max-width: 48em) {\n    width: ",";\n  }\n\n  & img {\n    max-width: 100%;\n    max-height: 100%;\n  }\n"]);return $=function(){return n},n}b.a.div($(),function(n){return"".concat(n.wDesktop,"px")},function(n){return"".concat(n.wMobile,"px")});function nn(){var n=Object(g.a)(["\n  cursor: pointer;\n  position: absolute;\n  padding: 20px;\n  z-index: 2;\n  @media (min-width: 48em) {\n    top: 0px;\n    right: 0px;\n  }\n  @media (max-width: 48em) {\n    top: -15px;\n    right: -15px;\n  }\n"]);return nn=function(){return n},n}b.a.div(nn());function en(){var n=Object(g.a)(["\n  background-color: rgba(99, 205, 218, 1);\n  border-radius: 20px;\n  border: 5px dashed rgba(0, 0, 0, 0.4);\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  @media (min-width: 48em) {\n    padding: 30px;\n    max-width: 800px;\n    & h1 {\n      font-size: 1.9em;\n      margin-top:0;\n    }\n    & h2 {\n      font-size: 1.5em;\n      margin: 5px 0 5px;\n    }\n    & p {\n      line-height:1.4em;\n    }\n  }\n  @media (max-width: 48em) {\n    padding: 15px;\n    max-width: 70vw;\n    & h1 {\n      font-size: 1.6em;\n      margin-top:10px;\n    }\n    & h2 {\n      font-size: 1.3em;\n      margin: 5px 0 5px;\n    }x\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(g.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.7);\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  @media (min-width: 48em) {\n    padding-top: 100px;\n  }\n  @media (max-width: 48em) {\n    padding-top: 50px;\n  }\n"]);return tn=function(){return n},n}b.a.div(tn()),b.a.div(en());function rn(){var n=Object(g.a)(["\n  flex: 1;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content:  'center';\n  flex-direction: column;\n  position: relative;\n  /* desktop */\n  @media (min-width: 48em) {\n    /* height: 70px;\n    font-size:25px; */\n  }\n\n  /* tablet */\n  @media (max-width: 48em) {\n    padding-top:100px;\n  }\n\n  /* phone */\n  @media only screen \n    and (min-device-width: 375px) \n    and (max-device-width: 667px){ \n      padding-top:30px;\n  }\n"]);return rn=function(){return n},n}function an(){var n=Object(g.a)(["\n  display: flex;\n  width: 100vw;\n  position: relative;\n  /* desktop */\n  @media (min-width: 48em) {\n    height: 100vh;\n  }\n  /* tablet & phones */\n  @media (max-width: 48em) {\n    height: 100%;\n  }\n"]);return an=function(){return n},n}var on=b.a.div(an()),cn=b.a.div(rn()),un=function(n){var e=Object(i.useContext)(h),t=e.isWrong,a=e.isCorrect;return r.a.createElement(on,null,r.a.createElement(cn,{style:{backgroundColor:function(n){var e="rgba(232, 67, 147,1.0)";return t||a?t?"#b2bec3":a?"#00b894":e:e}()}},a?r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement(S,null)):null,r.a.createElement(W,null),r.a.createElement(_,null)))},dn=function(n){function e(){return Object(c.a)(this,e),Object(d.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(l.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(x,null,r.a.createElement(un,null))}}]),e}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(dn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.2afa575f.chunk.js.map