(this["webpackJsonpmath-time"]=this["webpackJsonpmath-time"]||[]).push([[0],{25:function(n,t,e){n.exports=e(40)},30:function(n,t,e){},40:function(n,t,e){"use strict";e.r(t);var i=e(0),a=e.n(i),r=e(11),o=e.n(r),c=(e(30),e(12)),u=e(13),s=e(20),l=e(14),d=e(21),m=e(3),p=e(15),f=e.n(p),x=e(16),h=[1,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199],g=Object(i.createContext)(),b={addition:{use:!0,max:10},subtraction:{use:!0,max:10},multiplication:{use:!1,max:10},division:{use:!1,max:25}},v=function(n){var t=Object(i.useState)(null),e=Object(m.a)(t,2),r=e[0],o=e[1],c=Object(i.useState)(null),u=Object(m.a)(c,2),s=u[0],l=u[1],d=Object(i.useState)(null),p=Object(m.a)(d,2),v=p[0],w=p[1],O=Object(i.useState)(null),j=Object(m.a)(O,2),E=j[0],y=j[1],k=Object(i.useState)(!1),C=Object(m.a)(k,2),S=C[0],I=C[1],T=Object(i.useState)(!1),W=Object(m.a)(T,2),z=W[0],J=W[1],M=Object(i.useState)(!1),Y=Object(m.a)(M,2),N=Y[0],K=Y[1],B=Object(i.useState)(null),L=Object(m.a)(B,2),Q=L[0],U=L[1],Z=function(n){return Math.floor(Math.random()*n+1)},F=function(){var n=Q.addition.max,t=Z(n),e=Z(n),i=t+e;l("".concat(t," + ").concat(e)),w(i)},V=function(){for(var n=Q.subtraction.max,t=Z(n),e=Z(n);e===t;)e=Z(n);var i=t>e?t:e,a=t<e?t:e,r=i-a;l("".concat(i," - ").concat(a)),w(r)},D=function(){var n=Q.multiplication.max,t=Z(n),e=Z(n),i=t*e;l("".concat(t," x ").concat(e)),w(i)},P=function(){for(var n=Q.division.max,t=Z(n);h.includes(t);)t=Z(n);var e=Object(x.range)(2,t).filter((function(n){return!(t%n)})),i=e[Z(e.length)-1],a=parseInt(t/i);l("".concat(t," \xf7 ").concat(i)),w(a)},q=function(){var n=[];if(Q.addition.use&&n.push(F),Q.subtraction.use&&n.push(V),Q.multiplication.use&&n.push(D),Q.division.use&&n.push(P),0!==n.length)return n[Z(n.length)-1]()},H=function(){q(),I(!1),J(!1),y(null)},R=function(){var n=s.indexOf("\u2260");n>-1&&l(s.substr(0,n-1))},X=function(n,t){var e=JSON.parse(JSON.stringify(Q));e[n].use=t,G(e)},G=function(n){localStorage.setItem("settings",JSON.stringify(n)),U(n)};return Object(i.useEffect)((function(){!function(){var n=localStorage.getItem("settings");n=n?JSON.parse(n):b,G(n)}(),o(f()())}),[]),Object(i.useEffect)((function(){Q&&!s&&q()}),[Q]),Object(i.useEffect)((function(){Q&&!N&&(Q.addition.use||Q.subtraction.use||Q.multiplication.use||Q.division.use||X("addition",!0),H())}),[N]),Object(i.useEffect)((function(){if(S){var n=setTimeout((function(){R(),y(null),I(!1),J(!1)}),2250);return function(){return clearTimeout(n)}}}),[S]),a.a.createElement(g.Provider,{value:{touchDevice:r,answer:v,response:E,setResponse:y,mathProblem:s,generateMathProblem:q,showSettings:N,setShowSettings:K,digitPress:function(n){var t=(E||"").toString();y(parseInt(t+n))},checkResponse:function(){E&&(E===v?(y(null),l("".concat(s," = ").concat(v)),I(!1),J(!0)):(l("".concat(s," \u2260 ").concat(E)),I(!0),J(!1)))},isWrong:S,setIsWrong:I,isCorrect:z,setIsCorrect:J,startOver:H,resetMathProblem:R,tryAgain:function(){I(!1),y(null),R()},settings:Q,setSettingsUseOperation:X,setSettingsOperationMax:function(n,t){var e=JSON.parse(JSON.stringify(Q));"0"!==t&&(e[n].max=isNaN(t)?t:parseInt(t),G(e))},wrong_duration:2250}},n.children)},w=e(1),O=e(2),j=e(4),E=e.n(j);function y(){var n=Object(w.a)(["\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform:translate3d(0, -470px, 0);\n  transition: transform .2s ease-in-out;\n  position:absolute;\n  left:0; right:0;\n  & img {\n    max-width: 100%;\n    max-height: 100%;\n    height:400px;\n    margin-top:20px;\n  }\n  &.show {\n    transform:translate3d(0, 0, 0);\n  }\n"]);return y=function(){return n},n}var k=["Wp5CIL0eQj8D6","1ZostJS3YDb34j0D7s","pOTEhtq8Jv7voNl7mb","W6aQJOobbZ8BboYFY4","1oInQF9RIwD1VXe8Ha","u47vUoXTLfLCWP7bt4","5vidmYpnogEo8chJcx","l4pTfLGPVb6KM3jmU","jVTEgn7a5nkvGn3069","iEbPnIPyh9Exq","4NWT0Ry3dtTLW","3oFzmcl7D4fv7BSW4w","bg283WKwSbH3i","Jlys8jzFoI8ne","JoaeMGYYkHpC","3ohs7WhawOVfLMJ14c","3ohs4C4pHiR4xE70qc","1d9qTol1d5xZCTkwIA","ygx4FycuFuEnl5lpwh","6InGIyfwSIoIU","3oKIPv4pMwu3NQtKhO","nvKjkfWIl2msw","rPGkUqdQkB7xe","W0DTCPYu9vrhu","YS3j8cDQ5Ff68","2zoLjKxnxHYS5fTJrr","5e1UBubfNAM2BSnwmF","l4pSWqoUxbgL5B9S0","ZeEDEW0CsoRJ6","9FpDeOvKOts5y","oz45ELYgMoYVsZqmor","3YHsKK4VIb70RMfBlX","2ieYd6DY1iS8y4arB2","TgVBx3Y6VM49HLuZri","VxFrlqO1mVzmE","jpuJkyuJUEHNc62H0L","ujTV0zime3Qxfns0DL","Wq9FnoYuvzrjEgZTkb","gLEt5YXtyV1FOSr8K9","pOqOGrDRh0SkvLoOh6","lSgt9DJOZeBoGGXv2o","1ymqOsKqLqna4YLKCE","4KFvWyb6izh6e0spNL","51UtVbQK372Kv1N1Ms","1Bf00ajBXG10XPEoV9","8TCWcOcocBO3UuxuDt","1pnye1n5EWWHTu93Ly","mIElqgnBjaprEHTOY1","2Ys9oIKMwdWxy4MxjK","1AgCRUfQhu7QdwPEm4","9x55tYxEVrI04pKHl1","l378zKVk7Eh3yHoJi","cnQcCcz8BpJiiyNX2Q","ZCldwd8JpfXgY","ftMvs2Z7oECN0W0A0t","JstNscBNrecbJOWryt","40a347YQBKFOuzQweW","cnnjPX5DYXgB6MfrU3","x49DCuOOBiurrmlEov","i2oemhIwuZHIQ"],C=O.a.div(y()),S=function(n){var t=Object(i.useContext)(g),e=t.startOver,r=t.isCorrect,o=Object(i.useState)(null),c=Object(m.a)(o,2),u=c[0],s=c[1],l=Object(i.useState)(!1),d=Object(m.a)(l,2),p=d[0],f=d[1];return Object(i.useEffect)((function(){if(r){var n=k[Math.floor(Math.random()*k.length)];s("https://i.giphy.com/media/".concat(n,"/giphy.gif"));var t=setTimeout((function(){f(!0)}),100);return function(){return clearTimeout(t)}}}),[r]),a.a.createElement(C,{onClick:e,className:E()({show:p})},a.a.createElement("img",{src:u,alt:"yes"}))};function I(){var n=Object(w.a)(["\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform:translate3d(0, -300px, 0);\n  transition: transform .2s ease-in-out;\n  position:absolute;\n  left:0; right:0;\n  & img {\n    max-width: 100%;\n    max-height: 100%;\n    height:230px;\n    margin-top:20px;\n  }\n  &.show {\n    transform:translate3d(0, 0, 0);\n  }\n"]);return I=function(){return n},n}var T=["26xBIgTMTE5b3Ware","XwnxEG9365aMw","l378nu4kJajdfCvUk","mcsE75zh9etKE","3o7aCYje2hvVsaTpio","QObQirfaL3arJiKxeW","llXSgLPOy6DfCNcJDp","4KFwpiwm1JYEZi5Gsq","28j6GjBumA7ZKmaKI9","9oICl27yHGp3wAXUW6","3d6WSrv3PbyZq1vdjC","3og0ILLYnJryuFD7Gw","3ohhwkMaNYF1TA0NJS","EEFEyXLO9E0YE","1d5ZfBGrEQXfzx4sYf","oX90d6Bqef02AmU45H","3og0IJHMqlmPzy7sGs","l378yQjDMER6TR8Q0","xT9IgGdsbmikX5wW4M","YneftWBHs3qmifiI1I","3Hxy8wKadIdMjRXc9k","26vIfVoRG8NrbjfQQ","l1J9EItyIZFodSNqg","SYlo8PolAVDkQ","LT5oQB6JY9A97Hlx6R","1VWybIFCQdLJblbPHu","SvciJUUsnE2iYFDIpm","zfKMfT85E2JJm","10UGj1H0J40JxK","vcC7toES0gZq","fCb8FBfkMCRzy","l3V0mVZqZONZSsx5C","1361EDTRvnRRza","LXy9atSZqVXMY","S4AxU8ZHb0KQQtWW30","ZxVNFSvi71Oy7r17c9","QZUpRxZSaqNa5eXzku","ZedIV6kL34KG27MTnb","VCt4exaVmW2sxFbv5z","2rAyK0sx8Zqb3o6p3D","3o7TKBxS1HArb73Pz2","26xBvIRIPi7C2mem4","ZgTzOTkabbk0zi3rU2","hqUUf3uBeJ0PLn9Qr5","dt6FPWcT2Ck3oE49Wv","1ZnIdpgcI3roMnL5nl","h59nN40mHLwRkCDX9k"],W=O.a.div(I()),z=function(n){var t=Object(i.useContext)(g),e=t.isWrong,r=t.wrong_duration,o=t.tryAgain,c=Object(i.useState)(null),u=Object(m.a)(c,2),s=u[0],l=u[1],d=Object(i.useState)(!1),p=Object(m.a)(d,2),f=p[0],x=p[1];Object(i.useEffect)((function(){if(e){var n=T[Math.floor(Math.random()*T.length)];l("https://i.giphy.com/media/".concat(n,"/giphy.gif"));var t=setTimeout((function(){x(!0);var n=setTimeout((function(){x(!1)}),r-250);return function(){return clearTimeout(n)}}),100);return function(){return clearTimeout(t)}}}),[e]);return a.a.createElement(W,{className:E()({show:f}),onClick:function(){x(!1),o()}},a.a.createElement("img",{src:s,alt:"nope"}))};function J(){var n=Object(w.a)(["\n  width: 100vw;\n  height: 100vh;\n  position:absolute;\n  top:0;\n  left:0;\n  background-image: url(https://media.giphy.com/media/WNJATm9pwnjpjI1i0g/giphy.gif);\n  background-repeat: repeat-x;\n  /* desktop */\n  @media (min-width: 769px) {\n    background-size: contain;\n  }\n  /* tablet & mobile */\n  @media (max-width: 768px) {\n    background-size: cover;\n  }\n"]);return J=function(){return n},n}var M=O.a.div(J()),Y=function(n){return a.a.createElement(M,{style:{backgroundImage:'url("https://media.giphy.com/media/WNJATm9pwnjpjI1i0g/giphy.gif")'}})},N=e(24);function K(){var n=Object(w.a)(["\n  z-index: 1;\n  background-color: #252525;\n  color: #fff;\n  border-radius:5px;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  font-weight:700;\n  \n  &:hover, &:active {\n    background-color: #333333;\n  }\n\n  /* desktop */\n  @media (min-width: 769px) {\n    height: 70px;\n    font-size:25px;\n  }\n  /* tablet */\n  @media (max-width: 768px) {\n    height: 70px;\n    font-size:25px\n  }\n\n  /*  phone */\n  @media only screen \n    and (min-device-width: 375px) \n    and (max-device-width: 667px) \n    and (-webkit-min-device-pixel-ratio: 2)\n    and (orientation: portrait) { \n      height: 55px;\n      font-size:18px\n  }\n"]);return K=function(){return n},n}var B=O.a.div(K()),L=function(n){return a.a.createElement(B,{style:Object(N.a)({},n.style),onClick:n.onClick},n.children)};function Q(){var n=Object(w.a)(["\n  display:grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n  padding: 20px;\n"]);return Q=function(){return n},n}var U=O.a.div(Q()),Z=function(n){for(var t=Object(i.useContext)(g),e=t.digitPress,r=t.checkResponse,o=t.isWrong,c=t.isCorrect,u=[],s=function(n){u.push(a.a.createElement(L,{key:n,onClick:function(){return!o&&!c&&e(n)}},n))},l=1;l<10;l++)s(l);return u.push(a.a.createElement(L,{key:0,onClick:function(){return!o&&!c&&e(0)}},"0")),u.push(a.a.createElement(L,{key:"ok",onClick:function(){return!o&&!c&&r()},style:{backgroundColor:"#2e86c0",gridColumn:"2/4"}},"OK")),a.a.createElement(U,null,u)};function F(){var n=Object(w.a)(["\n  width: 100%;\n  border: none;\n  background-color: #252525;\n  color: #fff;\n  padding: 0 30px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  border-radius: 5px;\n\n  /* desktop */\n  @media screen and (min-device-width: 1200px) {\n    height: 80px;\n    font-size: 5em;\n  }\n\n  /* tablet */\n  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n    height: 80px;\n    font-size: 5em;\n  }\n\n  /* phone */\n  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {\n    height: 70px;\n    font-size: 3.5em;\n  }\n"]);return F=function(){return n},n}var V=O.a.div(F()),D=function(n){var t=Object(i.useContext)(g).response;return a.a.createElement(V,{onClick:n.onClick},t)};function P(){var n=Object(w.a)(["\n  width: 95%;\n  max-width: 450px;\n  opacity: initial;\n  transition: opacity 0.2s ease-in-out;\n  &.wrong {\n    opacity: 30%;\n  }\n  &.correct {\n    visibility: hidden;\n  }\n\n  /* desktop */\n  @media screen and (min-device-width: 1200px) {\n    margin-top: 30px;\n    padding-top: 40px;\n  }\n\n  /* tablet */\n  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n    margin-top: 30px;\n    padding: 20px;\n  }\n\n  /* phone */\n  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {\n    margin-top: 30px;\n    padding: 20px;\n  }\n"]);return P=function(){return n},n}var q=O.a.section(P()),H=function(n){var t=Object(i.useContext)(g),e=t.setResponse,r=t.isWrong,o=t.isCorrect;return a.a.createElement(q,{className:E()({wrong:r,correct:o})},a.a.createElement(D,{onClick:function(){return!r&&e(null)}}),a.a.createElement(Z,null))};function R(){var n=Object(w.a)(["\n  font-size:2.5em;\n  text-align: center;\n  border-bottom: 5px dashed rgba(0, 0, 0, 0.7);\n  min-width: 150px;\n  \n  transition: background-color,color 0.2s ease-in-out;\n  &.wrong {\n    border-radius: 5px;\n    background-color: rgba(193, 0, 0, 1); \n    color:white;\n    border-bottom: none;\n  }\n  \n  /* desktop */\n  @media (min-width: 769px) {\n    padding:30px;\n  }\n  /* tablet */\n  @media (max-width: 768px) {\n    padding:20px;\n  }\n  /* phone */\n  @media only screen \n    and (min-device-width: 375px) \n    and (max-device-width: 667px) \n    and (-webkit-min-device-pixel-ratio: 2)\n    and (orientation: portrait) {\n      padding:15px;\n      font-size:2em;\n  }\n"]);return R=function(){return n},n}function X(){var n=Object(w.a)(["\n  z-index:1;\n"]);return X=function(){return n},n}var G=O.a.div(X()),A=O.a.h1(R()),_=function(n){var t=Object(i.useContext)(g),e=t.mathProblem,r=t.isCorrect,o=t.isWrong,c=t.startOver,u=t.tryAgain;return a.a.createElement(G,{onClick:function(){o?u():c()}},a.a.createElement(A,{className:E()({correct:r,wrong:o})},e))};function $(){var n=Object(w.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  transform: translate3d(0, 0, 0);\n  transition: transform 0.2s ease-in-out;\n\n  /* desktop */\n  @media screen and (min-device-width: 1200px) {\n    &.correct {\n      transform: translate3d(0, 450px, 0);\n    }\n    &.wrong {\n      transform: translate3d(0, 300px, 0);\n    }\n  }\n\n  /* tablet */\n  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n    &.correct {\n      transform: translate3d(0, 450px, 0);\n    }\n    &.wrong {\n      transform: translate3d(0, 400px, 0);\n    }\n  }\n\n  /* phone */\n  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {\n    &.correct {\n      transform: translate3d(0, 430px, 0);\n    }\n    &.wrong {\n      transform: translate3d(0, 280px, 0);\n    }\n  }\n"]);return $=function(){return n},n}var nn=O.a.section($()),tn=function(n){var t=Object(i.useContext)(g),e=t.isWrong,r=t.isCorrect,o=t.wrong_duration,c=Object(i.useState)(!1),u=Object(m.a)(c,2),s=u[0],l=u[1],d=Object(i.useState)(!1),p=Object(m.a)(d,2),f=p[0],x=p[1];return Object(i.useEffect)((function(){if(e){var n=setTimeout((function(){l(!0);var n=setTimeout((function(){l(!1)}),o);return function(){return clearTimeout(n)}}),100);return function(){return clearTimeout(n)}}l(!1)}),[e]),Object(i.useEffect)((function(){if(r){var n=setTimeout((function(){x(!0)}),100);return function(){return clearTimeout(n)}}x(!1)}),[r]),a.a.createElement(nn,{className:E()({wrong:s,correct:f})},a.a.createElement(_,null),a.a.createElement(H,null))};function en(){var n=Object(w.a)(["\n  border-radius: 50%;\n  animation: "," 20s linear 0s infinite;\n  /* desktop */\n  @media (min-width: 769px) {\n    font-size:1.5em;\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    font-size:1.3em;\n  }\n"]);return en=function(){return n},n}function an(){var n=Object(w.a)(["\n  from {\n    transform:rotate(0deg);\n  }\n  to {\n    transform:rotate(360deg);\n  }\n"]);return an=function(){return n},n}function rn(){var n=Object(w.a)(["\n  cursor: pointer;\n  position: absolute;\n  padding: 20px;\n  z-index: 2;\n  /* desktop */\n  @media (min-width: 769px) {\n    top: 0px;\n    right: 0px;\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    top: -13px;\n    right: -13px;\n  }\n"]);return rn=function(){return n},n}var on=O.a.div(rn()),cn=Object(O.b)(an()),un=O.a.div(en(),cn),sn=function(n){var t=Object(i.useContext)(g).setShowSettings;return a.a.createElement(on,{onClick:function(){return t(!0)}},a.a.createElement(un,null,"\u2699"))},ln=e(19),dn=e.n(ln);e(10);function mn(){var n=Object(w.a)(["\n  font-size:12px;\n  font-style:italic;\n  color:rgba(0,0,0,0.7);\n  margin-top:-3px;\n"]);return mn=function(){return n},n}function pn(){var n=Object(w.a)(["\n  padding: 10px;\n  font-size: 1.2em;\n  letter-spacing: 3px;\n  width: 85px;\n  margin-left:10px;\n"]);return pn=function(){return n},n}function fn(){var n=Object(w.a)(["\n  padding:15px 0;\n"]);return fn=function(){return n},n}function xn(){var n=Object(w.a)(["\n  display: flex;\n  align-items: center;\n"]);return xn=function(){return n},n}function hn(){var n=Object(w.a)(["\n  display: inline;\n  font-size: 1.2em;\n  margin: -2px 0 0 10px;\n"]);return hn=function(){return n},n}function gn(){var n=Object(w.a)(["\n  border-top:1px solid rgba(22, 154, 171, 1);\n  padding:10px;\n"]);return gn=function(){return n},n}var bn=O.a.section(gn()),vn=O.a.h2(hn()),wn=O.a.div(xn()),On=O.a.section(fn()),jn=O.a.input(pn()),En=O.a.div(mn()),yn=function(n){var t=n.hint,e=n.use,i=n.setUse,r=n.max,o=n.setMax,c=n.title;return a.a.createElement(bn,null,a.a.createElement(wn,null,a.a.createElement("label",null,a.a.createElement(dn.a,{checked:e,icons:{unchecked:!1},onChange:function(){return i(!e)}})),a.a.createElement(vn,{onClick:function(){return i(!e)}},c)),e?a.a.createElement(On,null,"Maximum Value:",a.a.createElement(jn,{type:"number",value:r||"",onChange:function(n){return o(n.target.value)}})):null,t?a.a.createElement(En,null,"For division, try to use a larger number. There's only so many ways to be able to divide 10.  Ya' know?"):null)};function kn(){var n=Object(w.a)(["\n  background-color: rgba(99, 205, 218, 1);\n  border-radius: 20px;\n  border: 5px dashed rgba(0, 0, 0, 0.4);\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  /* desktop */\n  @media (min-width: 769px) {\n    padding: 30px;\n    max-width: 800px;\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    margin-top:-50px;\n    padding: 15px;\n    width: 80vw;\n  }\n"]);return kn=function(){return n},n}function Cn(){var n=Object(w.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.7);\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items:center;\n  /* desktop */\n  @media (min-width: 769px) {\n    padding-top: 100px;\n  }\n  /* tablet & phone */\n  @media (max-width: 768px) {\n    padding-top: 50px;\n  }\n"]);return Cn=function(){return n},n}var Sn=O.a.div(Cn()),In=O.a.div(kn()),Tn=function(n){var t=Object(i.useContext)(g),e=t.showSettings,r=t.setShowSettings,o=t.settings,c=t.setSettingsUseOperation,u=t.setSettingsOperationMax;return a.a.createElement(a.a.Fragment,null,a.a.createElement(sn,null),e?a.a.createElement(Sn,{onClick:function(n){return r(!1)}},a.a.createElement(In,{onClick:function(n){return n.stopPropagation()}},a.a.createElement("h1",null,"Settings"),a.a.createElement(yn,{use:o.addition.use,setUse:function(n){return c("addition",n)},max:o.addition.max,setMax:function(n){return u("addition",n)},title:"Addition (+)"}),a.a.createElement(yn,{use:o.subtraction.use,setUse:function(n){return c("subtraction",n)},max:o.subtraction.max,setMax:function(n){return u("subtraction",n)},title:"Subtraction (-)"}),a.a.createElement(yn,{use:o.multiplication.use,setUse:function(n){return c("multiplication",n)},max:o.multiplication.max,setMax:function(n){return u("multiplication",n)},title:"Multiplication (x)"}),a.a.createElement(yn,{use:o.division.use,setUse:function(n){return c("division",n)},max:o.division.max,setMax:function(n){return u("division",n)},title:"Division (\xf7)",hint:!0}))):null)};function Wn(){var n=Object(w.a)(["\n  flex: 1;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content:  'center';\n  flex-direction: column;\n  position: relative;\n  /* desktop */\n  @media screen \n    and (min-device-width: 1200px)  { \n      padding-top:100px;\n  }\n\n  /* tablet */\n  @media only screen \n    and (min-device-width: 768px) \n    and (max-device-width: 1024px) {\n    padding-top:100px;\n  }\n\n  /* phone */\n  @media only screen \n    and (min-device-width: 375px) \n    and (max-device-width: 667px){ \n      padding-top:0px;\n  }\n"]);return Wn=function(){return n},n}function zn(){var n=Object(w.a)(["\n  display: flex;\n  width: 100vw;\n  position: relative;\n  /* desktop */\n  @media (min-width: 769px) {\n    height: 100vh;\n  }\n  /* tablet & phones */\n  @media (max-width: 768px) {\n    height: 100%;\n  }\n"]);return zn=function(){return n},n}var Jn=O.a.div(zn()),Mn=O.a.div(Wn()),Yn=function(n){var t=Object(i.useContext)(g),e=t.isWrong,r=t.isCorrect;return a.a.createElement(Jn,null,a.a.createElement(Mn,{style:{backgroundColor:function(n){var t="rgba(232, 67, 147,1.0)";return e||r?e?"#b2bec3":r?"#00b894":t:t}()}},r?a.a.createElement(a.a.Fragment,null,a.a.createElement(S,null),a.a.createElement(Y,null)):null,e?a.a.createElement(z,null):null,a.a.createElement(tn,null)),a.a.createElement(Tn,null))},Nn=function(n){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(v,null,a.a.createElement(Yn,null))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Nn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.0106a6d1.chunk.js.map