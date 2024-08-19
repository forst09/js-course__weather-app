System.register([],(function(e,t){"use strict";return{execute:function(){var e=document.createElement("style");async function n(e,t,n){t.classList.add("main__window--message"),n.classList.add("main__content--message"),n.innerHTML='\n        <img src="/icons/loader.svg" class="loader"></img>\n        <span>data is loading</span>\n    ';try{const o=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=891b887bed714e6c9c4191325241608&q=${e}&days=1&aqi=no&alerts=no`),i=await o.json();i.error?(t.classList.add("main__window--message"),n.classList.add("main__content--message"),n.innerHTML=`\n                <p>${i.error.message}</p>\n            `):(t.classList.remove("main__window--message"),n.classList.remove("main__content--message"),n.innerHTML=`\n                <h1 class="title main__title">Weather in ${i.location.country}, ${i.location.name}</h1>\n                <span class="main__temperature">${Math.round(i.current.temp_c)} &deg;C</span>\n                <span class="main__descr">${i.current.condition.text}</span>\n                <span class="main__humidity">Humidity: ${i.current.humidity}%</span>\n                <span class="main__wind">Wind Speed: ${Math.round(i.current.wind_kph/3.563)} m/s</span> \n            `,n.querySelector(".main__descr").style.setProperty("--icon-src",`url("${i.current.condition.icon}")`))}catch(o){t.classList.add("main__window--message"),n.classList.add("main__content--message"),n.innerHTML=`\n            <p>${o.message}</p>\n        `}}e.textContent='html,body,body div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,figure,footer,header,menu,nav,section,time,mark,audio,video,details,summary{margin:0;padding:0;border:0;background:transparent}article,aside,figure,footer,header,nav,section,details,summary{display:block}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}*{padding:0;margin:0;outline:none;box-sizing:border-box}object,embed{max-width:100%}img{max-width:none}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent;color:inherit}a{text-decoration:none}del{text-decoration:line-through}abbr[title],dfn[title]{border-bottom:1px dotted #000;cursor:help}table{border-collapse:collapse;border-spacing:0}th{font-weight:700;vertical-align:bottom}td{font-weight:400;vertical-align:top}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}input,select{vertical-align:middle}pre{white-space:pre;white-space:pre-wrap;white-space:pre-line;word-wrap:break-word}input[type=radio]{vertical-align:text-bottom}input[type=checkbox]{vertical-align:bottom}.ie7 input[type=checkbox]{vertical-align:baseline}.ie6 input{vertical-align:text-bottom}table{font-size:inherit;font:100%}small{font-size:85%}strong{font-weight:700}td,td img{vertical-align:top}sub,sup{font-size:75%;line-height:0;position:relative}sup{top:-.5em}sub{bottom:-.25em}pre,code,kbd,samp{font-family:monospace,sans-serif}.clickable,label,input[type=button],input[type=submit],input[type=file],button{cursor:pointer}button,input,select,textarea{margin:0}button,input[type=button]{overflow:visible}.ie7 img{-ms-interpolation-mode:bicubic}.clearfix:before,.clearfix:after{content:" ";display:block;height:0;overflow:hidden}.clearfix:after{clear:both}.clearfix{zoom:1}a,button,input,textarea{-webkit-appearance:none}button{outline:none;border:none}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}@font-face{font-family:Poppins;src:url('+new URL("../fonts/Poppins-ExtraBold.woff2",t.meta.url).href+') format("woff2"),url('+new URL("../fonts/Poppins-ExtraBold.woff",t.meta.url).href+') format("woff"),url('+new URL("../fonts/Poppins-ExtraBold.ttf",t.meta.url).href+') format("truetype");font-weight:800;font-style:normal;font-display:swap}@font-face{font-family:Poppins;src:url('+new URL("../fonts/Poppins-SemiBold.woff2",t.meta.url).href+') format("woff2"),url('+new URL("../fonts/Poppins-SemiBold.woff",t.meta.url).href+') format("woff"),url('+new URL("../fonts/Poppins-SemiBold.ttf",t.meta.url).href+') format("truetype");font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:Poppins;src:url('+new URL("../fonts/Poppins-Medium.woff2",t.meta.url).href+') format("woff2"),url('+new URL("../fonts/Poppins-Medium.woff",t.meta.url).href+') format("woff"),url('+new URL("../fonts/Poppins-Medium.ttf",t.meta.url).href+') format("truetype");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:Poppins;src:url('+new URL("../fonts/Poppins-Regular.woff2",t.meta.url).href+') format("woff2"),url('+new URL("../fonts/Poppins-Regular.woff",t.meta.url).href+') format("woff"),url('+new URL("../fonts/Poppins-Regular.ttf",t.meta.url).href+') format("truetype");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:Poppins;src:url('+new URL("../fonts/Poppins-Light.woff2",t.meta.url).href+') format("woff2"),url('+new URL("../fonts/Poppins-Light.woff",t.meta.url).href+') format("woff"),url('+new URL("../fonts/Poppins-Light.ttf",t.meta.url).href+') format("truetype");font-weight:300;font-style:normal;font-display:swap}:root{--bg-primary: #ffffff;--bg-opacity: rgba(255, 255, 255, .8);--text-primary: rgba(5, 5, 5, .98);--icon-color: #000000;--icon-hover: rgba(88, 88, 88, .3);--icon-light: #FFFFFF;--input-bg: rgba(88, 88, 88, .3);--input-text: #FFFFFF;--input-placeholder: #FFFFFF;--submit-bg: rgba(255, 255, 255, 1);--br-m: 55px;--br-s: 6px}html,body{position:relative;font-family:Poppins,sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:1.5em;color:var(--text-primary);height:100%}body{touch-action:pan-x pan-y;background-color:var(--bg-primary);overflow-x:hidden}.container{width:100%;margin:0 auto}.container--m{max-width:1286px;padding:0 30px}.container--l{max-width:1640px;padding:0 30px}.img{display:flex;align-items:center;justify-content:center}.img__img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.visually-hidden{border:0;clip:rect(0 0 0 0);height:auto;margin:0;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.title{font-family:Poppins,sans-serif;font-size:40px;font-weight:600;line-height:normal}.form__wrapper{display:flex;position:relative}.form__submit-wrapper{position:absolute;right:16px;top:50%;transform:translateY(-50%)}.form__search-input{width:100%;padding:17px 92px 17px 39px;background-color:var(--input-bg);border:unset;color:var(--input-text);font-family:Poppins,sans-serif;font-size:30px;font-weight:400;border-radius:var(--br-m)}.form__search-input::-moz-placeholder{color:var(--input-placeholder);font-family:Poppins,sans-serif;font-size:30px;font-weight:400;line-height:1.15em}.form__search-input::placeholder{color:var(--input-placeholder);font-family:Poppins,sans-serif;font-size:30px;font-weight:400;line-height:1.15em}.form__search-input::-webkit-search-cancel-button{-webkit-transition:opacity .3s ease;transition:opacity .3s ease;cursor:pointer}.form__submit-label{display:flex;align-items:center;justify-content:center;width:60px;aspect-ratio:1;border-radius:50%;background-color:var(--submit-bg)}.form__submit-label:after{content:"";width:30px;aspect-ratio:1;-webkit-mask-image:url('+new URL("../icons/search.svg",t.meta.url).href+");mask-image:url("+new URL("../icons/search.svg",t.meta.url).href+');-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:cover;mask-size:cover;-webkit-mask-position:center;mask-position:center;background-color:var(--icon-color);transition:background-color .3s ease}.loader{width:100px;aspect-ratio:1;margin:0 auto}.main{position:relative;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center}.main__bg{position:absolute;left:0;top:0;width:100%;height:100%;z-index:-1}.main__window{display:flex;flex-direction:column;background-color:var(--bg-opacity);padding:53px 70px;min-height:583px;max-width:760px;width:100%;border-radius:var(--br-m);font-weight:500}.main__window--message{min-height:357px}.main__title{margin-top:42px}.main__temperature{margin-top:19px;font-size:50px;font-weight:800;line-height:normal}.main__descr{--icon-src: "url('+new URL("../icons/sun.svg",t.meta.url).href+')";margin-top:8px;display:inline-flex;align-items:center;gap:10px}.main__descr:before{content:"";width:35px;aspect-ratio:1;background-size:cover;background-repeat:no-repeat;background-position:center;background-color:var(--icon-light);background-image:var(--icon-src);border-radius:50%}.main__humidity{margin-top:8px}.main__content{display:flex;flex-direction:column}.main__content--message{margin-top:95px;text-align:center;font-weight:600;gap:24px}@media (max-width: 1024px){.container{padding:0 16px}}@media (max-width: 767px){body{font-size:16px}}@media (hover: hover){.form__submit-label:hover:after{background-color:var(--icon-hover)}}\n',document.head.appendChild(e),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".main__window");if(e){const t=e.querySelector(".main__content");!function(){const e=document.querySelector(".main__window");if(e){const t=e.querySelector(".main__content");function o(o){const{latitude:i,longitude:a}=o.coords;n(`${i},${a}`,e,t)}function i(n){const{message:o}=n;e.classList.add("main__window--message"),t.classList.add("main__content--message"),t.innerHTML=`\n                <p>${o}</p>\n                <p>Please try again</p>\n            `}navigator.geolocation.getCurrentPosition(o,i)}}(),function(e,t){const o=document.querySelector("form");o&&o.addEventListener("submit",(i=>{i.preventDefault(),n(o.querySelector(".form__search-input").value,e,t)}))}(e,t)}}))}}}));
