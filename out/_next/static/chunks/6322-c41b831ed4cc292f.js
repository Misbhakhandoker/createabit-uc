(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6322],{18918:function(e,A,s){"use strict";function t(e){let{preview:A,lightMode:s}=e,t=document.querySelector('link[href="/landing-preview/css/preview-style.css"]'),l=document.querySelector('link[href="/dark/assets/css/style.css"]'),i=document.querySelector('link[href="/light/assets/css/style.css"]'),n=document.querySelector('link[href="/dark/assets/css/plugins.css"]'),r=document.querySelector('link[href="/light/assets/css/plugins.css"]');if(s&&!A){document.querySelector("noscript").before(r),document.querySelector("noscript").before(i);let e=document.querySelectorAll('link[href="/light/assets/css/plugins.css"]');e.length>1&&e[0].remove();let A=document.querySelectorAll('link[href="/light/assets/css/style.css"]');A.length>1&&A[0].remove()}if(!s&&!A){document.querySelector("noscript").before(n),document.querySelector("noscript").before(l);let e=document.querySelectorAll('link[href="/dark/assets/css/plugins.css"]');e.length>1&&e[0].remove();let A=document.querySelectorAll('link[href="/dark/assets/css/style.css"]');A.length>1&&A[0].remove()}A&&t?(document.head.append(t),i&&i.remove(),r&&r.remove()):!A&&t&&t.remove()}s.d(A,{Z:function(){return t}})},29061:function(e,A,s){"use strict";function t(e){e.selector&&e.callback&&(e.isElements?document.querySelectorAll(e.selector).forEach(A=>{new IntersectionObserver(A=>{A[0].isIntersecting?e.callback(A[0].target):e.whenOutOfView&&e.whenOutOfView(A[0].target)}).observe(A)}):new IntersectionObserver(A=>{A[0].isIntersecting?e.callback(A[0].target):e.whenOutOfView&&e.whenOutOfView(A[0].target)}).observe(document.querySelector(e.selector)))}s.d(A,{Z:function(){return t}})},16387:function(e,A,s){"use strict";function t(){let e=document.querySelectorAll("[data-background]");e.length>0&&e.forEach(e=>{let A=e.dataset.background;e.style.backgroundImage="url('".concat(A,"')")})}s.d(A,{Z:function(){return t}})},83538:function(e,A,s){"use strict";var t=s(85893),l=s(67294);A.Z=function(){return(0,l.useEffect)(()=>{let e=document.querySelectorAll(".hover-this"),A=document.querySelector(".cursor"),s=function(e){let A=this.querySelector(".hover-anim"),{offsetX:s,offsetY:t}=e,{offsetWidth:l,offsetHeight:i}=this;A.style.transform="translate(".concat(s/l*50-25,"px, ").concat(t/i*50-25,"px)"),"mouseleave"===e.type&&(A.style.transform="")};e.forEach(e=>e.addEventListener("mousemove",s)),e.forEach(e=>e.addEventListener("mouseleave",s)),window.addEventListener("mousemove",e=>{let{clientX:s,clientY:t}=e;A.style.left=s+"px",A.style.top=t+"px"}),document.querySelectorAll("a, .cursor-pointer").forEach(e=>{e.addEventListener("mousemove",()=>{A.classList.add("cursor-active")}),e.addEventListener("mouseleave",()=>{A.classList.remove("cursor-active")})})},[]),(0,t.jsx)("div",{className:"cursor"})}},98876:function(e,A,s){"use strict";var t=s(85893),l=s(67294);A.Z=function(){return(0,l.useEffect)(()=>{let e=document.getElementById("svg"),A=gsap.timeline();A.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),A.to(e,{duration:.5,attr:{d:"M0 502S175 272 500 272s500 230 500 230V0H0Z"},ease:"power2.easeIn"}).to(e,{duration:.5,attr:{d:"M0 2S175 1 500 1s500 1 500 1V0H0Z"},ease:"power2.easeOut"}),A.to(".loader-wrap",{y:-1500}),A.to(".loader-wrap",{zIndex:-1,display:"none"}),A.from("header",{y:200},"-=1.5"),A.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")},[]),(0,t.jsxs)("div",{className:"loader-wrap",children:[(0,t.jsx)("svg",{viewBox:"0 0 1000 1000",preserveAspectRatio:"none",children:(0,t.jsx)("path",{id:"svg",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z"})}),(0,t.jsx)("div",{className:"loader-wrap-heading",children:(0,t.jsx)("span",{children:(0,t.jsxs)("h2",{className:"load-text",children:[(0,t.jsx)("span",{children:"L"}),(0,t.jsx)("span",{children:"o"}),(0,t.jsx)("span",{children:"a"}),(0,t.jsx)("span",{children:"d"}),(0,t.jsx)("span",{children:"i"}),(0,t.jsx)("span",{children:"n"}),(0,t.jsx)("span",{children:"g"})]})})})]})}},42037:function(e,A,s){"use strict";s.d(A,{Z:function(){return n}});var t=s(85893),l=s(67294),i=()=>{let e=document.querySelector(".progress-wrap"),A=document.querySelector(".progress-wrap path"),s=A.getTotalLength(),t=()=>{let e=window.pageYOffset,t=document.documentElement.scrollHeight-window.innerHeight;A.style.strokeDashoffset=s-e*s/t};e&&(A.style.transition=A.style.WebkitTransition="none",A.style.strokeDasharray=s+" "+s,A.style.strokeDashoffset=s,A.getBoundingClientRect(),A.style.transition=A.style.WebkitTransition="stroke-dashoffset 10ms linear",t(),window.addEventListener("scroll",t),window.addEventListener("scroll",function(){window.pageYOffset>150?e.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")}),e.addEventListener("click",function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},n=()=>((0,l.useEffect)(()=>{i()},[]),(0,t.jsx)("div",{className:"progress-wrap cursor-pointer",children:(0,t.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,t.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})}))},86082:function(e,A,s){"use strict";s.d(A,{Z:function(){return m}});var t=s(85893),l=s(67294),i=s(29061),n=s(16387),r=s(62569),a=s(41664),c=s.n(a),o={src:"/_next/static/media/1.d06f1091.jpg",height:1e3,width:945,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAGwaf/EABYQAQEBAAAAAAAAAAAAAAAAAAMBEf/aAAgBAQABBQJJg//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABcQAQADAAAAAAAAAAAAAAAAABEAAUH/2gAIAQEABj8CSnJ//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAExIf/aAAgBAQABPyGyUe1T/9oADAMBAAIAAwAAABD7/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Qj//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/EK//xAAYEAEBAQEBAAAAAAAAAAAAAAABEUEAIf/aAAgBAQABPxAwmZuLUvmkx7//2Q==",blurWidth:8,blurHeight:8},d={src:"/_next/static/media/2.0a976087.jpg",height:1e3,width:945,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABoCzf/8QAFRABAQAAAAAAAAAAAAAAAAAAAgH/2gAIAQEAAQUCKjn/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAv/aAAgBAwEBPwG3/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Bj//EABcQAQADAAAAAAAAAAAAAAAAAAEAESL/2gAIAQEABj8Cscz/xAAWEAEBAQAAAAAAAAAAAAAAAAAhABH/2gAIAQEAAT8hWrBf/9oADAMBAAIAAwAAABD/AP/EABkRAQACAwAAAAAAAAAAAAAAAAEAESExsf/aAAgBAwEBPxBXSY31n//EABkRAAEFAAAAAAAAAAAAAAAAAAEAESFRsf/aAAgBAgEBPxAQIasX/8QAFxABAQEBAAAAAAAAAAAAAAAAARExAP/aAAgBAQABPxCfCZNVcszv/9k=",blurWidth:8,blurHeight:8},h={src:"/_next/static/media/3.64b106a7.jpg",height:1e3,width:945,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAAGAb//EABUQAQEAAAAAAAAAAAAAAAAAAAMU/9oACAEBAAEFAhBKP//EABURAQEAAAAAAAAAAAAAAAAAAAAx/9oACAEDAQE/AY//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAZEAABBQAAAAAAAAAAAAAAAAAAAQIREoH/2gAIAQEABj8Cu5Y0/8QAGBABAAMBAAAAAAAAAAAAAAAAAQARITH/2gAIAQEAAT8hOtS16n//2gAMAwEAAgADAAAAEPf/xAAXEQEAAwAAAAAAAAAAAAAAAAABABEx/9oACAEDAQE/EKyM/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAgEBPxC16f/EABkQAAIDAQAAAAAAAAAAAAAAAAERACExgf/aAAgBAQABPxBoq4CCzg5U/9k=",blurWidth:8,blurHeight:8},u=s(25675),g=s.n(u),m=function(e){let{lightMode:A}=e,{data:s,isLoading:a,isSuccess:u,isError:m,error:x}=(0,r.I)();function f(){(0,i.Z)({selector:".portfolio-fixed .sub-bg .cont",isElements:!0,callback(e){e.classList.add("current"),document.querySelector("#"+e.getAttribute("data-tab")).classList.add("current")},whenOutOfView(e){var A;e.classList.remove("current"),null===(A=document.querySelector("#"+e.getAttribute("data-tab")))||void 0===A||A.classList.remove("current")}});let e=document.getElementById("sticky_item");if(!e)return;let A=e.getBoundingClientRect().width,s=document.querySelector(".portfolio-fixed").getBoundingClientRect();s.top<75&&s.height/2<s.bottom+400?(e.style.position="fixed",e.style.top="0px",e.style.width=A+"px",e.classList.remove("is_stuck")):s.height/2>s.bottom+400?(e.style.position="absolute",e.style.top="auto",e.style.bottom="0",e.style.width=A+"px",e.classList.add("is_stuck")):(e.style.position="relative",e.style.top="unset",e.style.bottom="unset",e.style.width="auto")}return null==s||s.data,(0,l.useEffect)(()=>((0,n.Z)(),window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)),[]),(0,t.jsxs)("div",{children:[(0,t.jsx)("section",{className:"portfolio-fixed product_category",children:(0,t.jsx)("div",{className:"container-fluid rest",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-6 rest",style:{position:"relative"},children:(0,t.jsx)("div",{className:"left",id:"sticky_item",children:(0,t.jsx)("div",{id:"tab-$1",className:"img bg-img product_image",children:(0,t.jsx)(g(),{src:o,alt:""})})})}),(0,t.jsx)("div",{className:"col-lg-6 sub-bg right",children:(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("div",{className:"img-hiden",children:(0,t.jsx)(g(),{src:o,alt:""})}),(0,t.jsx)("h2",{className:"mb-15",children:"DIGITAL DISPLAY"}),(0,t.jsx)("div",{className:"row justify-content-center",children:(0,t.jsxs)("div",{className:"col-md-11",children:[(0,t.jsx)("p",{children:"Digital displays are getting quite popular now a day for it’s attractive features. We brought very new Digital displays with lots of features and technology. We Have various types of LCD Wall Video Displays, Wall Mount Displays, Stand Alone Signage, Touch Table, OutDoor Signage, Multimedia Kiosk."}),(0,t.jsxs)("ul",{className:"rest list-arrow mt-30",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 9 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",fill:"currentColor"})})}),(0,t.jsx)("h6",{className:"inline fz-16 fw-400",children:"Make your business visible online."})]}),(0,t.jsxs)("li",{className:"mt-5",children:[(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 9 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",fill:"currentColor"})})}),(0,t.jsx)("h6",{className:"inline fz-16 fw-400",children:"Make your eCommerce business stand out."})]}),(0,t.jsxs)("li",{className:"mt-5",children:[(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 9 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",fill:"currentColor"})})}),(0,t.jsx)("h6",{className:"inline fz-16 fw-400",children:"Grow with your audience."})]})]}),(0,t.jsx)(c(),{href:"/".concat(A?"light":"dark","/shop-list"),className:"mt-4 butn butn-md butn-bord radius-30",children:(0,t.jsx)("div",{className:"full-width",children:(0,t.jsx)("span",{className:"full-width",children:"View Details"})})})]})})]})})]})})}),(0,t.jsx)("section",{className:"portfolio-fixed product_category",children:(0,t.jsx)("div",{className:"container-fluid rest",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-6 rest",style:{position:"relative"},children:(0,t.jsx)("div",{className:"left",id:"sticky_item",children:(0,t.jsx)("div",{id:"tab-$1",className:"img bg-img product_image",children:(0,t.jsx)(g(),{src:h,alt:""})})})}),(0,t.jsx)("div",{className:"col-lg-6 sub-bg right",children:(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("div",{className:"img-hiden",children:(0,t.jsx)(g(),{src:h,alt:""})}),(0,t.jsx)("h2",{className:"mb-15",children:"3D HOLOGRAPHIC SIGNS"}),(0,t.jsx)("div",{className:"row justify-content-center",children:(0,t.jsxs)("div",{className:"col-md-11",children:[(0,t.jsx)("p",{children:"Digital displays are getting quite popular now a day for it’s attractive features. We brought very new Digital displays with lots of features and technology. We Have various types of LCD Wall Video Displays, Wall Mount Displays, Stand Alone Signage, Touch Table, OutDoor Signage, Multimedia Kiosk."}),(0,t.jsxs)("ul",{className:"rest list-arrow mt-30",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 9 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",fill:"currentColor"})})}),(0,t.jsx)("h6",{className:"inline fz-16 fw-400",children:"Make your business visible online."})]}),(0,t.jsxs)("li",{className:"mt-5",children:[(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 9 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",fill:"currentColor"})})}),(0,t.jsx)("h6",{className:"inline fz-16 fw-400",children:"Make your eCommerce business stand out."})]}),(0,t.jsxs)("li",{className:"mt-5",children:[(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 9 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",fill:"currentColor"})})}),(0,t.jsx)("h6",{className:"inline fz-16 fw-400",children:"Grow with your audience."})]})]}),(0,t.jsx)(c(),{href:"/".concat(A?"light":"dark","/page-productshop2"),className:"mt-4 butn butn-md butn-bord radius-30",children:(0,t.jsx)("div",{className:"full-width",children:(0,t.jsx)("span",{className:"full-width",children:"View Details"})})})]})})]})})]})})}),(0,t.jsx)("section",{className:"portfolio-fixed product_category",children:(0,t.jsx)("div",{className:"container-fluid rest",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-6 rest",style:{position:"relative"},children:(0,t.jsx)("div",{className:"left",id:"sticky_item",children:(0,t.jsx)("div",{id:"tab-$1",className:"img bg-img product_image",children:(0,t.jsx)(g(),{src:d,alt:""})})})}),(0,t.jsx)("div",{className:"col-lg-6 sub-bg right",children:(0,t.jsxs)("div",{className:"cont",children:[(0,t.jsx)("div",{className:"img-hiden",children:(0,t.jsx)(g(),{src:d,alt:""})}),(0,t.jsx)("h2",{className:"mb-15",children:"POS SYSTEMS"}),(0,t.jsx)("div",{className:"row justify-content-center",children:(0,t.jsxs)("div",{className:"col-md-11",children:[(0,t.jsx)("p",{children:"Digital displays are getting quite popular now a day for it’s attractive features. We brought very new Digital displays with lots of features and technology. We Have various types of LCD Wall Video Displays, Wall Mount Displays, Stand Alone Signage, Touch Table, OutDoor Signage, Multimedia Kiosk."}),(0,t.jsxs)("ul",{className:"rest list-arrow mt-30",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 9 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",fill:"currentColor"})})}),(0,t.jsx)("h6",{className:"inline fz-16 fw-400",children:"Make your business visible online."})]}),(0,t.jsxs)("li",{className:"mt-5",children:[(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 9 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",fill:"currentColor"})})}),(0,t.jsx)("h6",{className:"inline fz-16 fw-400",children:"Make your eCommerce business stand out."})]}),(0,t.jsxs)("li",{className:"mt-5",children:[(0,t.jsx)("span",{className:"icon",children:(0,t.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 9 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",fill:"currentColor"})})}),(0,t.jsx)("h6",{className:"inline fz-16 fw-400",children:"Grow with your audience."})]})]}),(0,t.jsx)(c(),{href:"/".concat(A?"light":"dark","/page-productshop3"),className:"mt-4 butn butn-md butn-bord radius-30",children:(0,t.jsx)("span",{className:"full-width",children:"View Details"})})]})})]})})]})})})]})}},28235:function(e,A,s){"use strict";var t=s(85893),l=s(67294),i=s(9008),n=s.n(i),r=s(18918),a=s(83538),c=s(42037);A.Z=e=>{let{children:A,lightMode:s}=e;return(0,l.useEffect)(()=>{(0,r.Z)({lightMode:s})},[s]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n(),{children:s?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("link",{rel:"stylesheet",href:"/light/assets/css/plugins.css"}),(0,t.jsx)("link",{rel:"stylesheet",href:"/light/assets/css/style.css"})]}):(0,t.jsx)("link",{rel:"stylesheet",href:"/dark/assets/css/base.css"})}),(0,t.jsx)(a.Z,{}),(0,t.jsx)(c.Z,{}),A]})}},11163:function(e,A,s){e.exports=s(57875)},37513:function(e){"use strict";e.exports=JSON.parse('{"v":"ThemesCamp","a":"https://themeforest.net/user/themescamp"}')}}]);