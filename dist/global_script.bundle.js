!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){let n=!1;const o=document.getElementById("mobile-navbar");document.getElementsByClassName("video-close");document.getElementById("hamburger").addEventListener("click",()=>{n?(n=!1,o.style.transform="translateY(-150%)",o.style.opacity="0"):(n=!0,o.style.transform="translateY(20%)",o.style.opacity="1")}),window.addEventListener("resize",()=>{const e=Math.max(document.documentElement.clientWidth,window.innerWidth||0);console.log(e),console.log(n),e>=900&&(n=!0,o.style.transform="translateY(20%)",o.style.opacity="1")}),document.getElementsByClassName("video-close").addEventListener("click",()=>{console.log("it is working")})}]);