(this["webpackJsonpmath-time"]=this["webpackJsonpmath-time"]||[]).push([[0],{26:function(n,e,t){n.exports=t(41)},31:function(n,e,t){},41:function(n,e,t){"use strict";t.r(e);var a,i=t(0),r=t.n(i),o=t(11),c=t.n(o),u=(t(31),t(12)),l=t(13),s=t(21),d=t(14),m=t(22),p=t(3),f=t(15),x=t.n(f),b=t(16),h=[1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199],g=function(n){return Math.floor(Math.random()*n+1)},v=function(n,e,t){var a=n.addition.max,i=g(a),r=g(a),o=i+r;e("".concat(i," + ").concat(r)),t(o)},w=function(n,e,t){for(var a=n.subtraction.max,i=g(a),r=g(a);r===i;)r=g(a);var o=i>r?i:r,c=i<r?i:r,u=o-c;e("".concat(o," - ").concat(c)),t(u)},O=function(n,e,t){var a=n.multiplication.max,i=g(a),r=g(a),o=i*r;e("".concat(i," x ").concat(r)),t(o)},j=function(n,e,t){for(var a=n.division.max,i=g(a);h.includes(i);)i=g(a);var r=Object(b.range)(2,i).filter((function(n){return!(i%n)})),o=r[g(r.length)-1],c=parseInt(i/o);e("".concat(i," \xf7 ").concat(o)),t(c)},E=function(n,e,t){var a=[];if(n.addition.use&&a.push(v),n.subtraction.use&&a.push(w),n.multiplication.use&&a.push(O),n.division.use&&a.push(j),0!==a.length)return a[g(a.length)-1](n,e,t)},y=Object(i.createContext)(),k={addition:{use:!0,max:10},subtraction:{use:!0,max:10},multiplication:{use:!1,max:10},division:{use:!1,max:25}},C=function(n){var e=Object(i.useState)(null),t=Object(p.a)(e,2),o=t[0],c=t[1],u=Object(i.useState)(null),l=Object(p.a)(u,2),s=l[0],d=l[1],m=Object(i.useState)(null),f=Object(p.a)(m,2),b=f[0],h=f[1],g=Object(i.useState)(null),v=Object(p.a)(g,2),w=v[0],O=v[1],j=Object(i.useState)(!1),C=Object(p.a)(j,2),S=C[0],T=C[1],z=Object(i.useState)(!1),M=Object(p.a)(z,2),I=M[0],J=M[1],Y=Object(i.useState)(null),W=Object(p.a)(Y,2),N=W[0],D=W[1],K=Object(i.useState)(null),F=Object(p.a)(K,2),U=F[0],V=F[1],B=Object(i.useState)(!1),R=Object(p.a)(B,2),Z=R[0],H=R[1],L=Object(i.useState)(null),P=Object(p.a)(L,2),Q=P[0],G=P[1],q=Object(i.useState)(null),X=Object(p.a)(q,2),A=X[0],_=X[1],$=Object(i.useState)(null),nn=Object(p.a)($,2),en=nn[0],tn=nn[1],an=function(){E(Q,d,h),T(!1),J(!1),O(null),V(U+1)},rn=function(){var n=s.indexOf("\u2260");n>-1&&d(s.substr(0,n-1))},on=function(n,e){var t=JSON.parse(JSON.stringify(Q));t[n].use=e,cn(t)},cn=function(n){localStorage.setItem("settings",JSON.stringify(n)),G(n)},un=function(){D(0),V(0),tn(null),an()};return Object(i.useEffect)((function(){!function(){var n=localStorage.getItem("settings");n=n?JSON.parse(n):k,cn(n)}(),c(x()())}),[]),Object(i.useEffect)((function(){Q&&!s&&(V(U+1),E(Q,d,h))}),[Q]),Object(i.useEffect)((function(){Q&&!Z&&(Q.addition.use||Q.subtraction.use||Q.multiplication.use||Q.division.use||on("addition",!0),an())}),[Z]),Object(i.useEffect)((function(){if(S){var n=setTimeout((function(){rn(),O(null),T(!1),J(!1)}),2250);return function(){return clearTimeout(n)}}}),[S]),Object(i.useEffect)((function(){en&&en>0&&(a=setTimeout((function(){return tn(en-1)}),1e3))}),[en]),r.a.createElement(y.Provider,{value:{touchDevice:o,answer:b,response:w,setResponse:O,mathProblem:s,showSettings:Z,setShowSettings:H,digitPress:function(n){var e=(w||"").toString();O(parseInt(e+n))},checkResponse:function(){w&&(w===b?(O(null),d("".concat(s," = ").concat(b)),T(!1),D(N+1),J(!0)):(d("".concat(s," \u2260 ").concat(w)),T(!0),J(!1)))},isWrong:S,setIsWrong:T,isCorrect:I,setIsCorrect:J,startOver:an,tryAgain:function(){T(!1),O(null),rn()},settings:Q,setSettingsUseOperation:on,setSettingsOperationMax:function(n,e){var t=JSON.parse(JSON.stringify(Q));"0"!==e&&(t[n].max=isNaN(e)?e:parseInt(e),cn(t))},wrong_duration:2250,mode:A,setMode:_,secondsRemaining:en,startTimer:function(){tn(125)},timer_mode_length:125,correctCount:N,mathProblemCount:U,playAgain:un,backToHome:function(){un(),a&&clearTimeout(a),_(null)}}},n.children)},S=t(1),T=t(2),z=t(4),M=t.n(z);function I(){var n=Object(S.a)(["\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: translate3d(0, -470px, 0);\n  transition: transform 0.2s ease-in-out;\n  position: absolute;\n  left: 0;\n  right: 0;\n  & img {\n    max-width: 100%;\n    max-height: 100%;\n    height: 400px;\n    margin-top: 20px;\n  }\n  &.show {\n    transform: translate3d(0, 0, 0);\n  }\n"]);return I=function(){return n},n}var J=["Wp5CIL0eQj8D6","1ZostJS3YDb34j0D7s","pOTEhtq8Jv7voNl7mb","W6aQJOobbZ8BboYFY4","1oInQF9RIwD1VXe8Ha","u47vUoXTLfLCWP7bt4","5vidmYpnogEo8chJcx","l4pTfLGPVb6KM3jmU","jVTEgn7a5nkvGn3069","iEbPnIPyh9Exq","4NWT0Ry3dtTLW","3oFzmcl7D4fv7BSW4w","bg283WKwSbH3i","Jlys8jzFoI8ne","JoaeMGYYkHpC","3ohs7WhawOVfLMJ14c","3ohs4C4pHiR4xE70qc","1d9qTol1d5xZCTkwIA","ygx4FycuFuEnl5lpwh","6InGIyfwSIoIU","3oKIPv4pMwu3NQtKhO","nvKjkfWIl2msw","rPGkUqdQkB7xe","W0DTCPYu9vrhu","YS3j8cDQ5Ff68","2zoLjKxnxHYS5fTJrr","5e1UBubfNAM2BSnwmF","l4pSWqoUxbgL5B9S0","ZeEDEW0CsoRJ6","9FpDeOvKOts5y","oz45ELYgMoYVsZqmor","3YHsKK4VIb70RMfBlX","2ieYd6DY1iS8y4arB2","TgVBx3Y6VM49HLuZri","VxFrlqO1mVzmE","jpuJkyuJUEHNc62H0L","ujTV0zime3Qxfns0DL","Wq9FnoYuvzrjEgZTkb","gLEt5YXtyV1FOSr8K9","pOqOGrDRh0SkvLoOh6","lSgt9DJOZeBoGGXv2o","1ymqOsKqLqna4YLKCE","4KFvWyb6izh6e0spNL","51UtVbQK372Kv1N1Ms","1Bf00ajBXG10XPEoV9","8TCWcOcocBO3UuxuDt","1pnye1n5EWWHTu93Ly","mIElqgnBjaprEHTOY1","2Ys9oIKMwdWxy4MxjK","1AgCRUfQhu7QdwPEm4","9x55tYxEVrI04pKHl1","l378zKVk7Eh3yHoJi","cnQcCcz8BpJiiyNX2Q","ZCldwd8JpfXgY","JstNscBNrecbJOWryt","40a347YQBKFOuzQweW","cnnjPX5DYXgB6MfrU3","x49DCuOOBiurrmlEov","i2oemhIwuZHIQ","TzKPy0HX62yTUuFiUF","3oKIPtArcgQmH9dBK0","XdDcq8YODbhnYTBdY8","JsDtKXMBOAJt1mJYaF","bVOsW47VUj0sucK7h0","S4lxHeBdytDcqsS5UN","QVOOeh4YRTslYPhV3r","4cXrGwezpRCCdZcg9o"],Y=T.a.div(I()),W=function(n){var e=Object(i.useContext)(y),t=e.startOver,a=e.isCorrect,o=Object(i.useState)(null),c=Object(p.a)(o,2),u=c[0],l=c[1],s=Object(i.useState)(!1),d=Object(p.a)(s,2),m=d[0],f=d[1];return Object(i.useEffect)((function(){var n,e;return a?(n=J[Math.floor(Math.random()*J.length)],l("https://i.giphy.com/media/".concat(n,"/giphy.gif")),e=setTimeout((function(){f(!0)}),100),function(){return clearTimeout(e)}):function(){n&&clearTimeout(n),e&&clearTimeout(e)}}),[a]),r.a.createElement(Y,{onClick:t,className:M()({show:m})},r.a.createElement("img",{src:u,alt:"yes"}))};function N(){var n=Object(S.a)(["\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: translate3d(0, -300px, 0);\n  transition: transform 0.2s ease-in-out;\n  position: absolute;\n  left: 0;\n  right: 0;\n  & img {\n    max-width: 100%;\n    max-height: 100%;\n    height: 230px;\n    margin-top: 20px;\n  }\n  &.show {\n    transform: translate3d(0, 0, 0);\n  }\n"]);return N=function(){return n},n}var D=["26xBIgTMTE5b3Ware","XwnxEG9365aMw","l378nu4kJajdfCvUk","mcsE75zh9etKE","3o7aCYje2hvVsaTpio","QObQirfaL3arJiKxeW","llXSgLPOy6DfCNcJDp","4KFwpiwm1JYEZi5Gsq","28j6GjBumA7ZKmaKI9","9oICl27yHGp3wAXUW6","3d6WSrv3PbyZq1vdjC","3og0ILLYnJryuFD7Gw","3ohhwkMaNYF1TA0NJS","EEFEyXLO9E0YE","1d5ZfBGrEQXfzx4sYf","oX90d6Bqef02AmU45H","3og0IJHMqlmPzy7sGs","l378yQjDMER6TR8Q0","xT9IgGdsbmikX5wW4M","YneftWBHs3qmifiI1I","3Hxy8wKadIdMjRXc9k","26vIfVoRG8NrbjfQQ","l1J9EItyIZFodSNqg","SYlo8PolAVDkQ","LT5oQB6JY9A97Hlx6R","1VWybIFCQdLJblbPHu","SvciJUUsnE2iYFDIpm","zfKMfT85E2JJm","10UGj1H0J40JxK","vcC7toES0gZq","fCb8FBfkMCRzy","l3V0mVZqZONZSsx5C","1361EDTRvnRRza","LXy9atSZqVXMY","S4AxU8ZHb0KQQtWW30","ZxVNFSvi71Oy7r17c9","QZUpRxZSaqNa5eXzku","ZedIV6kL34KG27MTnb","VCt4exaVmW2sxFbv5z","2rAyK0sx8Zqb3o6p3D","3o7TKBxS1HArb73Pz2","26xBvIRIPi7C2mem4","ZgTzOTkabbk0zi3rU2","hqUUf3uBeJ0PLn9Qr5","dt6FPWcT2Ck3oE49Wv","1ZnIdpgcI3roMnL5nl","h59nN40mHLwRkCDX9k","3og0IxHg8KJ3UmKs1y","lG0Tw8fIGQb6w","7zep10gsZL6Ios92PL","h4OGa0npayrJX2NRPT","EEFEyXLO9E0YE","3ov9k2Ce4sn264hffG","iropEUq9RK7vuYPebx"],K=T.a.div(N()),F=function(n){var e=Object(i.useContext)(y),t=e.isWrong,a=e.wrong_duration,o=e.tryAgain,c=Object(i.useState)(null),u=Object(p.a)(c,2),l=u[0],s=u[1],d=Object(i.useState)(!1),m=Object(p.a)(d,2),f=m[0],x=m[1];Object(i.useEffect)((function(){var n,e,t=D[Math.floor(Math.random()*D.length)];return s("https://i.giphy.com/media/".concat(t,"/giphy.gif")),n=setTimeout((function(){return x(!0),e=setTimeout((function(){x(!1)}),a-250),function(){return clearTimeout(e)}}),100),function(){n&&clearTimeout(n),e&&clearTimeout(e)}}),[t,a]);return r.a.createElement(K,{className:M()({show:f}),onClick:function(){x(!1),o()}},r.a.createElement("img",{src:l,alt:"nope"}))};function U(){var n=Object(S.a)(["\n  width: 100vw;\n  height: 100vh;\n  position:absolute;\n  top:0;\n  left:0;\n  background-image: url(https://media.giphy.com/media/WNJATm9pwnjpjI1i0g/giphy.gif);\n  background-repeat: repeat-x;\n  /* desktop */\n  @media (min-width: 769px) {\n    background-size: contain;\n  }\n  /* tablet & mobile */\n  @media (max-width: 768px) {\n    background-size: cover;\n  }\n"]);return U=function(){return n},n}var V=T.a.div(U()),B=function(n){return r.a.createElement(V,{style:{backgroundImage:'url("https://media.giphy.com/media/WNJATm9pwnjpjI1i0g/giphy.gif")'}})},R=t(25);function Z(){var n=Object(S.a)(["\n  z-index: 1;\n  background-color: #252525;\n  color: #fff;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 700;\n\n  &:hover,\n  &:active {\n    background-color: #333333;\n  }\n\n  /* desktop */\n  @media (min-width: 769px) {\n    height: 70px;\n    font-size: 25px;\n  }\n  /* tablet */\n  @media (max-width: 768px) {\n    height: 70px;\n    font-size: 25px;\n  }\n\n  /*  phone */\n  @media only screen and (max-device-width: 768px) {\n    height: 55px;\n    font-size: 18px;\n  }\n"]);return Z=function(){return n},n}var H=T.a.div(Z()),L=function(n){return r.a.createElement(H,{style:Object(R.a)({},n.style),onClick:n.onClick},n.children)};function P(){var n=Object(S.a)(["\n  -moz-user-select: none;\n  -ms-user-select: none; \n  -khtml-user-select: none; \n  -webkit-user-select: none; \n  -webkit-touch-callout: none; \n"]);return P=function(){return n},n}function Q(){var n=Object(S.a)(["\n  display:grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n  padding: 20px;\n"]);return Q=function(){return n},n}var G=T.a.div(Q()),q=T.a.div(P()),X=function(n){for(var e=Object(i.useContext)(y),t=e.digitPress,a=e.checkResponse,o=e.isWrong,c=e.isCorrect,u=[],l=function(n){u.push(r.a.createElement(L,{key:n,onClick:function(){return!o&&!c&&t(n)}},r.a.createElement(q,null,n)))},s=1;s<10;s++)l(s);return u.push(r.a.createElement(L,{key:0,onClick:function(){return!o&&!c&&t(0)}},r.a.createElement(q,null,"0"))),u.push(r.a.createElement(L,{key:"ok",onClick:function(){return!o&&!c&&a()},style:{backgroundColor:"#2e86c0",gridColumn:"2/4"}},r.a.createElement(q,null,"OK"))),r.a.createElement(G,null,u)};function A(){var n=Object(S.a)(["\n  width: 100%;\n  border: none;\n  background-color: #252525;\n  color: #fff;\n  padding: 0 30px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  border-radius: 5px;\n  position: relative;\n  height: 80px;\n\n  /* desktop */\n  @media screen and (min-device-width: 1200px) {\n    font-size: 5em;\n  }\n\n  /* tablet */\n  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n    font-size: 5em;\n  }\n\n  /* phone */\n  @media only screen and (max-device-width: 768px) {\n    height: 70px;\n    font-size: 3.5em;\n  }\n"]);return A=function(){return n},n}function _(){var n=Object(S.a)(["\n  color: #dfdfdf;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /* desktop */\n  @media (min-width: 769px) {\n    font-size: 16px;\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    font-size: 16px;\n  }\n"]);return _=function(){return n},n}function $(){var n=Object(S.a)(["\n  position: absolute;\n  padding: 5px;\n  right: 0px;\n  top: 0px;\n"]);return $=function(){return n},n}var nn=T.a.div($()),en=T.a.div(_()),tn=T.a.div(A()),an=function(n){var e=Object(i.useContext)(y).response;return r.a.createElement(tn,null,r.a.createElement(r.a.Fragment,null,e,e&&r.a.createElement(nn,{onClick:n.onClick},r.a.createElement(en,null,"\u2716"))))};function rn(){var n=Object(S.a)(["\n  width: 95%;\n  max-width: 450px;\n  opacity: initial;\n  transition: opacity 0.2s ease-in-out;\n  &.wrong {\n    opacity: 30%;\n  }\n  &.correct {\n    visibility: hidden;\n  }\n\n  /* desktop */\n  @media screen and (min-device-width: 1200px) {\n    margin-top: 30px;\n    padding-top: 40px;\n  }\n\n  /* tablet */\n  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n    margin-top: 20px;\n    padding: 20px;\n  }\n\n  /* phone */\n  @media only screen and (max-device-width: 768px) {\n    margin-top: 10px;\n    padding: 20px;\n  }\n"]);return rn=function(){return n},n}var on=T.a.section(rn()),cn=function(n){var e=Object(i.useContext)(y),t=e.setResponse,a=e.isWrong,o=e.isCorrect;return r.a.createElement(on,{className:M()({wrong:a,correct:o})},r.a.createElement(an,{onClick:function(){return!a&&t(null)}}),r.a.createElement(X,null))};function un(){var n=Object(S.a)(["\n  font-size:2.5em;\n  text-align: center;\n  border-bottom: 5px dashed rgba(0, 0, 0, 0.7);\n  min-width: 150px;\n  \n  transition: background-color,color 0.2s ease-in-out;\n  &.wrong {\n    border-radius: 5px;\n    background-color: rgba(193, 0, 0, 1); \n    color:white;\n    border-bottom: none;\n  }\n  \n  /* desktop */\n  @media (min-width: 769px) {\n    padding:30px;\n  }\n  /* tablet */\n  @media (max-width: 768px) {\n    padding:20px;\n  }\n  /* phone */\n  @media only screen \n    and (max-device-width: 768px) \n    and (-webkit-min-device-pixel-ratio: 2)\n    and (orientation: portrait) {\n      padding:15px;\n      font-size:2em;\n  }\n"]);return un=function(){return n},n}function ln(){var n=Object(S.a)(["\n  z-index:1;\n"]);return ln=function(){return n},n}var sn=T.a.div(ln()),dn=T.a.h1(un()),mn=function(n){var e=Object(i.useContext)(y),t=e.mathProblem,a=e.isCorrect,o=e.isWrong,c=e.startOver,u=e.tryAgain;return r.a.createElement(sn,{onClick:function(){o?u():c()}},r.a.createElement(dn,{className:M()({correct:a,wrong:o})},t))};function pn(){var n=Object(S.a)(["\n  margin-top:30px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transform: translate3d(0, 0, 0);\n  transition: transform 0.2s ease-in-out;\n  /* desktop */\n  @media screen and (min-device-width: 1200px) {\n    &.correct {\n      transform: translate3d(0, 450px, 0);\n    }\n    &.wrong {\n      transform: translate3d(0, 300px, 0);\n    }\n  }\n\n  /* tablet */\n  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n    &.correct {\n      transform: translate3d(0, 450px, 0);\n    }\n    &.wrong {\n      transform: translate3d(0, 400px, 0);\n    }\n  }\n\n  /* phone */\n  @media only screen and (max-device-width: 768px) {\n    &.correct {\n      transform: translate3d(0, 410px, 0);\n    }\n    &.wrong {\n      transform: translate3d(0, 280px, 0);\n    }\n  }\n"]);return pn=function(){return n},n}var fn=T.a.section(pn()),xn=function(n){var e=Object(i.useContext)(y),t=e.isWrong,a=e.isCorrect,o=e.wrong_duration,c=Object(i.useState)(!1),u=Object(p.a)(c,2),l=u[0],s=u[1],d=Object(i.useState)(!1),m=Object(p.a)(d,2),f=m[0],x=m[1];return Object(i.useEffect)((function(){var n,e;return t?(n=setTimeout((function(){return s(!0),e=setTimeout((function(){s(!1)}),o),function(){return clearTimeout(e)}}),100),function(){return clearTimeout(n)}):(s(!1),function(){n&&clearTimeout(n),e&&clearTimeout(e)})}),[t,o]),Object(i.useEffect)((function(){var n;return a?(n=setTimeout((function(){x(!0)}),100),function(){return clearTimeout(n)}):(x(!1),function(){n&&clearTimeout(n)})}),[a]),r.a.createElement(fn,{className:M()({wrong:l,correct:f})},r.a.createElement(mn,null),r.a.createElement(cn,null))};function bn(){var n=Object(S.a)(["\n  border-radius: 50%;\n  animation: "," 20s linear 0s infinite;\n  /* desktop */\n  @media (min-width: 769px) {\n    font-size:1.5em;\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    font-size:1.3em;\n  }\n"]);return bn=function(){return n},n}function hn(){var n=Object(S.a)(["\n  from {\n    transform:rotate(0deg);\n  }\n  to {\n    transform:rotate(360deg);\n  }\n"]);return hn=function(){return n},n}function gn(){var n=Object(S.a)(["\n  cursor: pointer;\n  position: absolute;\n  padding: 20px;\n  padding-right: 10px;\n  z-index: 1;\n  /* desktop */\n  @media (min-width: 769px) {\n    top: 0px;\n    right: 0px;\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    top: -13px;\n    right: 0px;\n  }\n"]);return gn=function(){return n},n}var vn=T.a.div(gn()),wn=Object(T.b)(hn()),On=T.a.div(bn(),wn),jn=function(n){var e=Object(i.useContext)(y).setShowSettings;return r.a.createElement(vn,{onClick:function(){return e(!0)}},r.a.createElement(On,null,"\u2699"))},En=t(19),yn=t.n(En);t(5);function kn(){var n=Object(S.a)(["\n  font-size:12px;\n  font-style:italic;\n  color:rgba(0,0,0,0.7);\n  margin-top:-3px;\n"]);return kn=function(){return n},n}function Cn(){var n=Object(S.a)(["\n  padding: 8px 10px;\n  font-size: 1.1em;\n  letter-spacing: 3px;\n  width: 80px;\n  margin-left:10px;\n"]);return Cn=function(){return n},n}function Sn(){var n=Object(S.a)(["\n  padding:10px 0;\n"]);return Sn=function(){return n},n}function Tn(){var n=Object(S.a)(["\n  display: flex;\n  align-items: center;\n"]);return Tn=function(){return n},n}function zn(){var n=Object(S.a)(["\n  display: inline;\n  font-size: 1.1em;\n  margin: -2px 0 0 10px;\n"]);return zn=function(){return n},n}function Mn(){var n=Object(S.a)(["\n  border-top:1px solid rgba(22, 154, 171, 1);\n  padding:10px;\n"]);return Mn=function(){return n},n}var In=T.a.section(Mn()),Jn=T.a.h2(zn()),Yn=T.a.div(Tn()),Wn=T.a.section(Sn()),Nn=T.a.input(Cn()),Dn=T.a.div(kn()),Kn=function(n){var e=n.hint,t=n.use,a=n.setUse,i=n.max,o=n.setMax,c=n.title;return r.a.createElement(In,null,r.a.createElement(Yn,null,r.a.createElement("label",null,r.a.createElement(yn.a,{checked:t,icons:{unchecked:!1},onChange:function(){return a(!t)}})),r.a.createElement(Jn,{onClick:function(){return a(!t)}},c)),t?r.a.createElement(Wn,null,"Maximum Value:",r.a.createElement(Nn,{type:"number",value:i||"",onChange:function(n){return o(n.target.value)}})):null,t&&e?r.a.createElement(Dn,null,"For division, try to use a larger number. There's only so many ways to be able to divide 10. Ya' know?"):null)};function Fn(){var n=Object(S.a)(["\n  /* phone */\n  @media only screen and (max-device-width: 768px) {\n    margin: 10px;\n  }\n"]);return Fn=function(){return n},n}function Un(){var n=Object(S.a)(["\n  background-color: rgba(99, 205, 218, 1);\n  border-radius: 20px;\n  border: 5px dashed rgba(0, 0, 0, 0.4);\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  /* desktop */\n  @media (min-width: 769px) {\n    padding: 30px;\n    max-width: 350px;\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    margin-top: -50px;\n    padding: 5px;\n    width: 80vw;\n    max-width: 350px;\n  }\n"]);return Un=function(){return n},n}function Vn(){var n=Object(S.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.7);\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items:center;\n  /* desktop */\n  @media (min-width: 769px) {\n    padding-top: 100px;\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    padding-top: 50px;\n  }\n"]);return Vn=function(){return n},n}var Bn=T.a.div(Vn()),Rn=T.a.div(Un()),Zn=T.a.h1(Fn()),Hn=function(n){var e=Object(i.useContext)(y),t=e.showSettings,a=e.setShowSettings,o=e.settings,c=e.setSettingsUseOperation,u=e.setSettingsOperationMax;return r.a.createElement(r.a.Fragment,null,r.a.createElement(jn,null),t?r.a.createElement(Bn,{onClick:function(n){return a(!1)}},r.a.createElement(Rn,{onClick:function(n){return n.stopPropagation()}},r.a.createElement(Zn,null,"Settings"),r.a.createElement(Kn,{use:o.addition.use,setUse:function(n){return c("addition",n)},max:o.addition.max,setMax:function(n){return u("addition",n)},title:"Addition (+)"}),r.a.createElement(Kn,{use:o.subtraction.use,setUse:function(n){return c("subtraction",n)},max:o.subtraction.max,setMax:function(n){return u("subtraction",n)},title:"Subtraction (-)"}),r.a.createElement(Kn,{use:o.multiplication.use,setUse:function(n){return c("multiplication",n)},max:o.multiplication.max,setMax:function(n){return u("multiplication",n)},title:"Multiplication (x)"}),r.a.createElement(Kn,{use:o.division.use,setUse:function(n){return c("division",n)},max:o.division.max,setMax:function(n){return u("division",n)},title:"Division (\xf7)",hint:!0}))):null)};function Ln(){var n=Object(S.a)(["\n  z-index:1;\n  /* desktop */\n  @media (min-width: 769px) {\n    width: ",";\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    width: ",";\n  }\n\n  & img {\n    max-width: 100%;\n    max-height: 100%;\n  }\n"]);return Ln=function(){return n},n}var Pn=T.a.div(Ln(),(function(n){return"".concat(n.wDesktop,"px")}),(function(n){return"".concat(n.wMobile,"px")})),Qn=function(n){return r.a.createElement(Pn,{wDesktop:n.wDesktop,wMobile:n.wMobile},r.a.createElement("img",{src:"https://i.giphy.com/media/".concat(n.id,"/giphy.gif"),alt:n.alt,style:n.style}))};function Gn(){var n=Object(S.a)(["\n  cursor: pointer;\n  position: absolute;\n  padding: 20px;\n  z-index: 1;\n  /* desktop */\n  @media (min-width: 769px) {\n    top: 0px;\n    left: 0px;\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    top: -25px;\n    left: -13px;\n  }\n"]);return Gn=function(){return n},n}var qn=T.a.div(Gn()),Xn=function(n){var e=Object(i.useContext)(y).backToHome;return r.a.createElement(qn,{onClick:e},r.a.createElement(Qn,{id:"WNiHDLoMyUNV39DzGk",wDesktop:35,wMobile:35}))};function An(){var n=Object(S.a)(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n"]);return An=function(){return n},n}function _n(){var n=Object(S.a)(["\n  display: flex;\n"]);return _n=function(){return n},n}function $n(){var n=Object(S.a)(["\n  text-align: center;\n  margin: 10px;\n"]);return $n=function(){return n},n}function ne(){var n=Object(S.a)(["\n  background-color: rgba(99, 205, 218, 1);\n  border-radius: 20px;\n  border: 5px dashed rgba(0, 0, 0, 0.4);\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  width: 100%;\n  max-height: 400px;\n  max-width: 450px;\n  margin-bottom: 20px;\n  &:last-of-type {\n    margin-bottom: 0;\n  }\n  /* desktop */\n  @media (min-width: 769px) {\n    padding: 20px;\n    flex: 0.5;\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    padding: 15px;\n    flex: calc(0.5 - 50px);\n  }\n"]);return ne=function(){return n},n}function ee(){var n=Object(S.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.7);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  /* desktop */\n  @media (min-width: 769px) {\n    justify-content: center;\n  }\n\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    padding: 40px;\n    justify-content: flex-start;\n  }\n"]);return ee=function(){return n},n}var te=T.a.div(ee()),ae=T.a.div(ne()),ie=T.a.h1($n()),re=T.a.section(_n()),oe=T.a.div(An()),ce=function(n){var e=Object(i.useContext)(y),t=e.mode,a=e.setMode;return r.a.createElement(r.a.Fragment,null,t?null:r.a.createElement(te,null,r.a.createElement(ae,{onClick:function(){return a("casual")}},r.a.createElement(ie,null,"Casual Mode"),r.a.createElement("p",{style:{textAlign:"center"}},"Chill dude..."),r.a.createElement(re,null,r.a.createElement(Qn,{id:"kC8VlVbwprG6gmIaTZ",wDesktop:220,wMobile:120}),r.a.createElement(oe,null,r.a.createElement("p",{style:{margin:0}},"Take your time. Just relax and practice a few math problems.")))),r.a.createElement(ae,{onClick:function(){return a("timer")}},r.a.createElement(ie,null,"Timer Mode"),r.a.createElement("p",{style:{textAlign:"center"}},"You have 2 minutes. Ready, Set..."),r.a.createElement(re,null,r.a.createElement(Qn,{id:"8OPzq48W0upEDZHQ43",wDesktop:200,wMobile:100}),r.a.createElement(oe,null,r.a.createElement("p",{style:{margin:0}},"For that extra excitement of racing the clock and beating your personal best."))))))};function ue(){var n=Object(S.a)(["\n/* desktop */\n  @media (min-width: 769px) {\n    font-size:12em;\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    font-size:10em;\n  }\n"]);return ue=function(){return n},n}function le(){var n=Object(S.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.8);\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  /* desktop */\n  @media (min-width: 769px) {\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    padding: 30px;\n  }\n"]);return le=function(){return n},n}var se=T.a.div(le()),de=T.a.h1(ue()),me=function(n){var e=Object(i.useContext)(y),t=e.mode,a=e.secondsRemaining,o=e.startTimer,c=Object(i.useState)(3),u=Object(p.a)(c,2),l=u[0],s=u[1];return Object(i.useEffect)((function(){null===a&&("GO!"===l&&setTimeout((function(){o(),s(3)}),1e3),isNaN(l)||"timer"!==t||(0===l?s("GO!"):setTimeout((function(){return s(l-1)}),1e3)))}),[t,l,o,a]),r.a.createElement(r.a.Fragment,null,"timer"===t&&null===a?r.a.createElement(se,null,r.a.createElement(de,null,!isNaN(l)&&l>3?"":l)):null)};function pe(){var n=Object(S.a)(["\n  position:absolute;\n  top:0;left:0;\n  height:100vh;\n  width:100vw;\n  background-color:rgba(255, 255, 255, 0.6);\n  transform: "," ;\n  opacity: ",";\n  transition: transform 1s linear;\n  \n"]);return pe=function(){return n},n}function fe(){var n=Object(S.a)(["\n  position:absolute;\n  top:0;\n  left:0;\n  flex: 1;\n  min-height: 100vh;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  overflow:hidden;\n"]);return fe=function(){return n},n}var xe=T.a.div(fe()),be=T.a.div(pe(),(function(n){return n.percent?"translate3d(0, ".concat(n.percent,"vh, 0)"):"translate3d(0, 0vh ,0)"}),(function(n){return n.hide?.2:1})),he=function(){var n=Object(i.useContext)(y),e=(n.mode,n.isWrong),t=n.isCorrect,a=n.timer_mode_length,o=n.secondsRemaining;return r.a.createElement(xe,{style:{backgroundColor:function(n){var a="rgba(232, 67, 147,1.0)";return e||t?e?"#b2bec3":t?"#00b894":a:a}()}},o?r.a.createElement(be,{percent:function(){if(!isNaN(o))return 100-100*o/a}(),hide:e||t}):null)};function ge(){var n=Object(S.a)(["\n  margin-bottom:20px;\n  font-size: 1em;\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content:center;\n  /* desktop */\n  @media (min-width: 769px) {\n    padding: 20px;\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    padding: 15px;\n  }\n"]);return ge=function(){return n},n}var ve=T.a.div(ge()),we=function(){var n=Object(i.useContext)(y).backToHome;return r.a.createElement(ve,{onClick:n},r.a.createElement(Qn,{id:"WNiHDLoMyUNV39DzGk",wDesktop:50,wMobile:50}))};function Oe(){var n=Object(S.a)(["\n  margin:20px 0;\n  background-color: rgba(99, 205, 218, 1);\n  border-radius: 20px;\n  border: 5px dashed rgba(0, 0, 0, 0.4);\n  font-size: 2em;\n  font-weight: bold;\n  color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content:center;\n  /* desktop */\n  @media (min-width: 769px) {\n    padding: 20px;\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    padding: 15px;\n  }\n"]);return Oe=function(){return n},n}function je(){var n=Object(S.a)(["\n  flex:1;\n  display: flex;\n  justify-content:flex-end;\n  flex-direction:column;\n"]);return je=function(){return n},n}function Ee(){var n=Object(S.a)(["\n  font-size:3em;\n  margin-left: 10px;\n  display:inline;\n"]);return Ee=function(){return n},n}function ye(){var n=Object(S.a)(["\n  font-size:4em;\n  display:inline;\n  font-weight:bold;\n"]);return ye=function(){return n},n}function ke(){var n=Object(S.a)(["\n  position:absolute;\n  top:0;\n  left:0;\n  flex: 1;\n  min-height: 100vh;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  padding-top:10px;\n"]);return ke=function(){return n},n}var Ce=["l1l9jSfkJ2NuLM01OZ","Rfl0RYrMdC3YbVrXtQ","7YBJwWrTZEYoXSphx5","3owypcn3q5lmUURlbG","StXFAImziJyPZM7xtI","7YBJwWrTZEYoXSphx5","j2TDpEysH8hRFVKSO4","ftMuBbRQY1VimqAZJN","9PmfhA8rQzqGroYgYj"],Se=T.a.div(ke()),Te=T.a.div(ye()),ze=T.a.div(Ee()),Me=T.a.div(je()),Ie=T.a.div(Oe()),Je=function(){var n=Object(i.useContext)(y),e=n.mode,t=n.secondsRemaining,a=n.correctCount,o=n.playAgain;return r.a.createElement(r.a.Fragment,null,"timer"===e&&0===t?r.a.createElement(Se,null,r.a.createElement(Qn,{id:Ce[Math.floor(Math.random()*Ce.length)],wDesktop:300,wMobile:300}),r.a.createElement("div",{style:{marginTop:-15}},r.a.createElement(Te,null,a||0),r.a.createElement(ze,null,"correct")),r.a.createElement(Me,null,r.a.createElement("div",{style:{flex:1}}),r.a.createElement(Ie,{onClick:o},"Play Again ",r.a.createElement(Qn,{id:"1fiIjGnEGUObilCOE2",wDesktop:80,wMobile:80}))),r.a.createElement(we,null)):null)};function Ye(){var n=Object(S.a)(["\n  flex: 1;\n  min-height: 100vh;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: 'center';\n  flex-direction: column;\n  position: relative;\n  /* desktop */\n  @media screen and (min-device-width: 1200px) {\n    padding-top: 100px;\n  }\n\n  /* tablet */\n  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n    padding-top: 100px;\n  }\n\n  /* phone */\n  @media only screen and (max-device-width: 768px) {\n    padding-top: 0px;\n  }\n"]);return Ye=function(){return n},n}function We(){var n=Object(S.a)(["\n  display: flex;\n  width: 100vw;\n  position: relative;\n  /* desktop */\n  @media (min-width: 769px) {\n    height: 100vh;\n  }\n  /* tablet & phones */\n  @media (max-width: 768px) {\n    height: 100%;\n  }\n"]);return We=function(){return n},n}var Ne=T.a.div(We()),De=T.a.div(Ye()),Ke=function(n){var e=Object(i.useContext)(y),t=e.isWrong,a=e.isCorrect,o=e.mode,c=e.secondsRemaining;return r.a.createElement(Ne,null,r.a.createElement(De,null,r.a.createElement(he,null),o&&("casual"===o||"timer"===o&&c>0)?r.a.createElement(r.a.Fragment,null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement(B,null)):null,t?r.a.createElement(F,null):null,r.a.createElement(xn,null),r.a.createElement(Hn,null),r.a.createElement(Xn,null)):null),r.a.createElement(ce,null),r.a.createElement(me,null),r.a.createElement(Je,null))},Fe=function(n){function e(){return Object(u.a)(this,e),Object(s.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement(C,null,r.a.createElement(Ke,null))}}]),e}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ue=t(20);t.n(Ue)()(),c.a.render(r.a.createElement(Fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.de11f8f4.chunk.js.map