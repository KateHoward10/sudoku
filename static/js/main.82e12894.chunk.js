(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{17:function(n,e,t){n.exports=t(29)},22:function(n,e,t){},29:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(11),o=t.n(i),c=(t(22),t(14)),u=t(3);var l=t(4);function s(n){switch(Math.round(n)){case 0:return"Very Easy";case 1:return"Easy";case 2:return"Medium";case 3:return"Hard";case 4:return"Very Hard";case 5:return"Deadly";default:return null}}function f(n){return"".concat(Math.floor(n/60)<10?"0".concat(Math.floor(n/60)):Math.floor(n/60),":").concat(n%60<10?"0".concat(n%60):n%60)}var d=t(2),g=t(1);function m(){var n=Object(d.a)(["\n  font-size: 1rem;\n  background: transparent;\n"]);return m=function(){return n},n}function p(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 50px;\n"]);return p=function(){return n},n}var b=g.a.div(p()),v=g.a.button(m()),h=g.a.span((function(n){var e=n.rating;return"\n  background: linear-gradient(to right, #000 ".concat(e/5*100,"%, lightgrey ").concat(e/5*100,"%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n")}));var x=function(n){var e=n.status,t=n.start,r=n.giveUp,i=n.playing,o=n.rating;return a.a.createElement(b,null,a.a.createElement(v,{onClick:i?function(){window.confirm("Are you sure you want to give up?")&&r()}:t},i?"Give up":e?"Play again":"Play"),i&&a.a.createElement("div",null,s(o)," ",a.a.createElement(h,{rating:o},"\u2605\u2605\u2605\u2605\u2605")))};function y(){var n=Object(d.a)(["\n  font-size: 1rem;\n  background: transparent;\n  color: dodgerblue;\n  flex: 1;\n  padding: 0;\n  margin: 2px;\n"]);return y=function(){return n},n}function j(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 5px;\n  @media screen and (min-width: 600px) {\n    display: none;\n  }\n"]);return j=function(){return n},n}var O=g.a.div(j()),w=g.a.button(y());var E=function(n){var e=n.selectNumber;return a.a.createElement(O,null,Array.from(Array(9).keys()).map((function(n){return a.a.createElement(w,{key:n,value:n+1,onClick:e},n+1)})),a.a.createElement(w,{value:null,onClick:e},"\u2190"))};function k(){var n=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  font-family: 'Kalam', cursive;\n  color: grey;\n  background: transparent;\n  box-shadow: ",";\n  @media screen and (min-width: 600px) {\n    display: none;\n  }\n"]);return k=function(){return n},n}function z(){var n=Object(d.a)(["\n  width: 90%;\n  height: 90%;\n  border: none;\n  text-align: center;\n  font-size: 20px;\n  font-family: 'Kalam', cursive;\n  color: grey;\n  background: transparent;\n  @media screen and (max-width: 600px) {\n    display: none;\n  }\n"]);return z=function(){return n},n}var S=g.a.div((function(n){return"\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-right: ".concat(n.index%9===2||n.index%9===5?2:1,"px solid grey;\n  border-bottom: ").concat(n.index>17&&n.index<27||n.index>44&&n.index<54?2:1,"px\n    solid grey;\n  font-size: 20px;\n  box-shadow: ").concat(n.wrong?"inset 0 0 10px red":"none",";\n")})),C=g.a.input(z()),I=g.a.button(k(),(function(n){return n.focused?"inset 0 0 10px dodgerblue":"none"})),M=function(n){var e=n.index,t=n.number,r=n.onFocus,i=n.onChange,o=n.value,c=n.wrong,u=n.currentInput;return a.a.createElement(S,{index:e,wrong:c},t||a.a.createElement(a.a.Fragment,null,a.a.createElement(C,{type:"text",value:o,onChange:i}),a.a.createElement(I,{onClick:r,focused:u===e&&!c},o)))};function A(){var n=Object(d.a)(["\n  display: grid;\n  grid-template-rows: repeat(9, 10vw);\n  grid-template-columns: repeat(9, 10vw);\n  border: 1px solid grey;\n  border-top: 2px solid grey;\n  border-left: 2px solid grey;\n  background: transparent;\n  @media screen and (min-width: 600px) {\n    grid-template-rows: repeat(9, 50px);\n    grid-template-columns: repeat(9, 50px);\n  }\n"]);return A=function(){return n},n}var N=g.a.div(A());function G(){var n=Object(d.a)(["\n  font-size: 14px;\n  background: transparent;\n"]);return G=function(){return n},n}function H(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n"]);return H=function(){return n},n}var D=g.a.div(H()),J=g.a.button(G());var W=function(n){var e=n.time,t=n.openModal;return a.a.createElement(D,null,a.a.createElement("p",null,f(e)),a.a.createElement(J,{onClick:t},"Settings"))};function B(){var n=Object(d.a)(["\n  display: none;\n"]);return B=function(){return n},n}function F(){var n=Object(d.a)(["\n  width: 24px;\n  height: 24px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-left: 5px;\n  box-shadow: inset 0 0 5px ",";\n  color: dodgerblue;\n  font-size: 14px;\n"]);return F=function(){return n},n}function K(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return K=function(){return n},n}function P(){var n=Object(d.a)(["\n  border: none;\n  background: transparent;\n  align-self: flex-end;\n  font-size: 18px;\n"]);return P=function(){return n},n}function T(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  padding: 10px;\n  min-width: 300px;\n  max-width: 80vw;\n"]);return T=function(){return n},n}function U(){var n=Object(d.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return U=function(){return n},n}var V=g.a.div(U()),L=g.a.div(T()),R=g.a.button(P()),Y=g.a.div(K()),$=g.a.label(F(),(function(n){return n.highlight?"dodgerblue":"grey"})),q=g.a.input(B());var Q=function(n){var e=n.topGames,t=n.closeModal,r=n.thisTime,i=n.highlight,o=n.toggleHighlight;return a.a.createElement(V,null,a.a.createElement(L,null,a.a.createElement(R,{onClick:t},"\u2716"),r&&a.a.createElement("h2",null,"Solved in ",f(r),"!"),a.a.createElement("span",null,"Your top games:"),e.length?a.a.createElement("ol",null,e&&e.map((function(n,e){return a.a.createElement("li",{key:e},a.a.createElement("strong",null,n.date)," ",f(n.time)," (",s(n.rating),")")}))):a.a.createElement("p",null,"None yet..."),!r&&a.a.createElement(Y,null,"Highlight wrong numbers",a.a.createElement($,{highlight:i},a.a.createElement(q,{type:"checkbox",onChange:function(n){o(n.target.checked),localStorage.setItem("highlightWrongNumbers",n.target.checked)}}),i&&"\u2714"))))};var X=function(){var n=Object(r.useState)(!1),e=Object(u.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(0),s=Object(u.a)(o,2),f=s[0],d=s[1],g=Object(r.useState)(Array.from(Array(81))),m=Object(u.a)(g,2),p=m[0],b=m[1],v=Object(r.useState)(null),h=Object(u.a)(v,2),y=h[0],j=h[1],O=Object(r.useState)(null),w=Object(u.a)(O,2),k=w[0],z=w[1],S=Object(r.useState)(null),C=Object(u.a)(S,2),I=C[0],A=C[1],G=Object(r.useState)(!1),H=Object(u.a)(G,2),D=H[0],J=H[1],B=Object(r.useState)("true"===localStorage.getItem("highlightWrongNumbers")||!1),F=Object(u.a)(B,2),K=F[0],P=F[1],T=Object(r.useState)(null),U=Object(u.a)(T,2),V=U[0],L=U[1],R=Object(r.useState)(JSON.parse(localStorage.getItem("topGames"))||[]),Y=Object(u.a)(R,2),$=Y[0],q=Y[1];function X(n,e){if(n.preventDefault(),t){var r=k.map((function(t,r){return r===e?n.target.value?parseInt(n.target.value):null:t}));z(r)}}var Z=Object(r.useCallback)((function(n){if(n.length<5||f<n[n.length-1].time){var e=new Date,t=[{time:f,rating:y,date:e.toLocaleDateString("en-GB")}].concat(Object(c.a)(n));return(t=t.sort((function(n,e){return n.time-e.time}))).length>5&&(t=t.slice(0,5)),localStorage.setItem("topGames",JSON.stringify(t)),t}return n}),[f,y]);return function(n,e){var t=Object(r.useRef)();Object(r.useEffect)((function(){t.current=n}),[n]),Object(r.useEffect)((function(){if(null!==e){var n=setInterval((function(){t.current()}),e);return function(){clearInterval(n)}}}),[e])}((function(){return d(f+1)}),t?1e3:null),Object(r.useEffect)((function(){!I&&k&&Object(l.solvepuzzle)(p)&&k.join("")===Object(l.solvepuzzle)(p).map((function(n){return n+1})).join("")?(A("solved"),q((function(n){return Z(n)})),i(!1),J(!0)):k&&k.every((function(n){return"number"===typeof n}))&&A("filled")}),[I,k,p,Z]),a.a.createElement("div",null,a.a.createElement(x,{status:I,start:function(){b(Array.from(Array(81)).fill(9)),A(null),i(!0),d(0),L(null);var n=Object(l.makepuzzle)();b(n);var e=Object(l.ratepuzzle)(n,5);j(e),z(n.map((function(n){return null!==n?n+1:null})))},giveUp:function(){A("given up"),i(!1),z(Object(l.solvepuzzle)(p).map((function(n){return n+1})))},playing:t,rating:y}),a.a.createElement(E,{selectNumber:function(n){return X(n,V)}}),a.a.createElement(N,null,p.map((function(n,e){return a.a.createElement(M,{key:e,index:e,number:null!==n?n+1:null,onFocus:function(){return L(e)},onChange:function(n){return X(n,e)},value:k&&k[e]?k[e]:"",wrong:(K&&k&&k[e]||"filled"===I)&&Object(l.solvepuzzle)(p)[e]+1!==k[e],currentInput:V})}))),a.a.createElement(W,{time:f,openModal:function(){return J(!0)}}),D&&a.a.createElement(Q,{topGames:$,closeModal:function(){return J(!1)},thisTime:"solved"===I?f:null,highlight:K,toggleHighlight:P}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.82e12894.chunk.js.map