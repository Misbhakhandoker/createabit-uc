(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9069],{43023:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/light/page-team",function(){return i(77121)}])},18918:function(e,s,i){"use strict";function a(e){let{preview:s,lightMode:i}=e,a=document.querySelector('link[href="/landing-preview/css/preview-style.css"]'),t=document.querySelector('link[href="/dark/assets/css/style.css"]'),r=document.querySelector('link[href="/light/assets/css/style.css"]'),n=document.querySelector('link[href="/dark/assets/css/plugins.css"]'),l=document.querySelector('link[href="/light/assets/css/plugins.css"]');if(i&&!s){document.querySelector("noscript").before(l),document.querySelector("noscript").before(r);let e=document.querySelectorAll('link[href="/light/assets/css/plugins.css"]');e.length>1&&e[0].remove();let s=document.querySelectorAll('link[href="/light/assets/css/style.css"]');s.length>1&&s[0].remove()}if(!i&&!s){document.querySelector("noscript").before(n),document.querySelector("noscript").before(t);let e=document.querySelectorAll('link[href="/dark/assets/css/plugins.css"]');e.length>1&&e[0].remove();let s=document.querySelectorAll('link[href="/dark/assets/css/style.css"]');s.length>1&&s[0].remove()}s&&a?(document.head.append(a),r&&r.remove(),l&&l.remove()):!s&&a&&a.remove()}i.d(s,{Z:function(){return a}})},32479:function(e,s,i){"use strict";function a(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.8,i=arguments.length>2?arguments[2]:void 0,a=document.querySelector(e),t=a.getAttribute("data-background");t||(t=window.getComputedStyle(a).backgroundImage);let r=a.getBoundingClientRect().top*s;a.style.backgroundImage='url("'.concat(t,'")'),a.style.backgroundSize="cover",a.style.backgroundRepeat="no-repeat",a.style.backgroundAttachment="fixed",a.style.backgroundPosition="center ".concat(void 0!==i?i:r,"px"),window.addEventListener("scroll",()=>{r=a.getBoundingClientRect().top*s,a.style.backgroundPosition="center ".concat(r,"px")})}i.d(s,{Z:function(){return a}})},83538:function(e,s,i){"use strict";var a=i(85893),t=i(67294);s.Z=function(){return(0,t.useEffect)(()=>{let e=document.querySelectorAll(".hover-this"),s=document.querySelector(".cursor"),i=function(e){let s=this.querySelector(".hover-anim"),{offsetX:i,offsetY:a}=e,{offsetWidth:t,offsetHeight:r}=this;s.style.transform="translate(".concat(i/t*50-25,"px, ").concat(a/r*50-25,"px)"),"mouseleave"===e.type&&(s.style.transform="")};e.forEach(e=>e.addEventListener("mousemove",i)),e.forEach(e=>e.addEventListener("mouseleave",i)),window.addEventListener("mousemove",e=>{let{clientX:i,clientY:a}=e;s.style.left=i+"px",s.style.top=a+"px"}),document.querySelectorAll("a, .cursor-pointer").forEach(e=>{e.addEventListener("mousemove",()=>{s.classList.add("cursor-active")}),e.addEventListener("mouseleave",()=>{s.classList.remove("cursor-active")})})},[]),(0,a.jsx)("div",{className:"cursor"})}},98876:function(e,s,i){"use strict";var a=i(85893),t=i(67294);s.Z=function(){return(0,t.useEffect)(()=>{let e=document.getElementById("svg"),s=gsap.timeline();s.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),s.to(e,{duration:.5,attr:{d:"M0 502S175 272 500 272s500 230 500 230V0H0Z"},ease:"power2.easeIn"}).to(e,{duration:.5,attr:{d:"M0 2S175 1 500 1s500 1 500 1V0H0Z"},ease:"power2.easeOut"}),s.to(".loader-wrap",{y:-1500}),s.to(".loader-wrap",{zIndex:-1,display:"none"}),s.from("header",{y:200},"-=1.5"),s.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")},[]),(0,a.jsxs)("div",{className:"loader-wrap",children:[(0,a.jsx)("svg",{viewBox:"0 0 1000 1000",preserveAspectRatio:"none",children:(0,a.jsx)("path",{id:"svg",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z"})}),(0,a.jsx)("div",{className:"loader-wrap-heading",children:(0,a.jsx)("span",{children:(0,a.jsxs)("h2",{className:"load-text",children:[(0,a.jsx)("span",{children:"L"}),(0,a.jsx)("span",{children:"o"}),(0,a.jsx)("span",{children:"a"}),(0,a.jsx)("span",{children:"d"}),(0,a.jsx)("span",{children:"i"}),(0,a.jsx)("span",{children:"n"}),(0,a.jsx)("span",{children:"g"})]})})})]})}},42037:function(e,s,i){"use strict";i.d(s,{Z:function(){return n}});var a=i(85893),t=i(67294),r=()=>{let e=document.querySelector(".progress-wrap"),s=document.querySelector(".progress-wrap path"),i=s.getTotalLength(),a=()=>{let e=window.pageYOffset,a=document.documentElement.scrollHeight-window.innerHeight;s.style.strokeDashoffset=i-e*i/a};e&&(s.style.transition=s.style.WebkitTransition="none",s.style.strokeDasharray=i+" "+i,s.style.strokeDashoffset=i,s.getBoundingClientRect(),s.style.transition=s.style.WebkitTransition="stroke-dashoffset 10ms linear",a(),window.addEventListener("scroll",a),window.addEventListener("scroll",function(){window.pageYOffset>150?e.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")}),e.addEventListener("click",function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},n=()=>((0,t.useEffect)(()=>{r()},[]),(0,a.jsx)("div",{className:"progress-wrap cursor-pointer",children:(0,a.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,a.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})}))},74537:function(e,s,i){"use strict";var a=i(85893);s.Z=function(){return(0,a.jsx)("header",{className:"page-header section-padding pb-0",children:(0,a.jsx)("div",{className:"container mt-80",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-lg-8",children:[(0,a.jsxs)("div",{className:"caption",children:[(0,a.jsx)("h6",{className:"sub-title",children:"Our Staff"}),(0,a.jsx)("h1",{className:"fz-80",children:"Talented team."})]}),(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-lg-9 offset-lg-1",children:(0,a.jsx)("div",{className:"text mt-30",children:(0,a.jsx)("p",{children:"We’re a diverse team that works as fancies attention to details, enjoys beers on Friday nights and aspires to design the dent in the universe."})})})})]}),(0,a.jsx)("div",{className:"col-lg-3 valign justify-end",children:(0,a.jsx)("div",{className:"ml-auto explore",children:(0,a.jsx)("a",{href:"#0",children:(0,a.jsxs)("div",{className:"circle-button",children:[(0,a.jsx)("div",{className:"rotate-circle fz-30 text-u",children:(0,a.jsxs)("svg",{className:"textcircle",viewBox:"0 0 500 500",children:[(0,a.jsx)("defs",{children:(0,a.jsx)("path",{id:"textcircle",d:"M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"})}),(0,a.jsx)("text",{children:(0,a.jsx)("textPath",{xlinkHref:"#textcircle",textLength:"900",children:"Join Our Team - Join Our Team -"})})]})}),(0,a.jsx)("div",{className:"arrow",children:(0,a.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})})})]})})})})]})})})}},47570:function(e,s,i){"use strict";var a=i(85893),t=i(41664),r=i.n(t),n=i(67294),l=i(32479);s.Z=function(e){let{lightMode:s,innerPageStyle:i}=e;return(0,n.useEffect)(()=>{(0,l.Z)(".sec-bg-img.parallaxie",.4)},[]),(0,a.jsx)("section",{className:"call-action-img",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"sec-bg-img bg-img parallaxie","data-background":"/dark/assets/imgs/background/2.jpg"}),(0,a.jsx)("div",{className:"sec-lg-head section-padding",children:(0,a.jsx)("div",{className:"row ontop",children:(0,a.jsxs)("div",{className:"col-11 d-flex align-items-center",children:[(0,a.jsx)("div",{className:"valign",children:(0,a.jsxs)("h2",{className:"fz-50 d-rotate wow",children:[(0,a.jsx)("span",{className:"rotate-text",children:"Do you have an exciting project idea?"}),(0,a.jsxs)("span",{className:"rotate-text",children:["Let’s"," ",(0,a.jsx)("span",{className:i?"":"sub-font",children:"get to work"}),"."]})]})}),(0,a.jsx)("div",{className:"ml-auto",children:(0,a.jsxs)(r(),{href:"/dark/page-contact",className:"butn-circle d-flex align-items-center text-center m-auto",children:[(0,a.jsxs)("div",{className:"full-width",children:[(0,a.jsx)("span",{children:(0,a.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})})}),(0,a.jsx)("span",{className:"full-width",children:"Get In Touch"})]}),(0,a.jsx)("img",{src:"/".concat(s?"light":"dark","/assets/imgs/svg-assets/circle-star.svg"),alt:"",className:"circle-star"})]})})]})})})]})})}},28235:function(e,s,i){"use strict";var a=i(85893),t=i(67294),r=i(9008),n=i.n(r),l=i(18918),c=i(83538),o=i(42037);s.Z=e=>{let{children:s,lightMode:i}=e;return(0,t.useEffect)(()=>{(0,l.Z)({lightMode:i})},[i]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n(),{children:i?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("link",{rel:"stylesheet",href:"/light/assets/css/plugins.css"}),(0,a.jsx)("link",{rel:"stylesheet",href:"/light/assets/css/style.css"})]}):(0,a.jsx)("link",{rel:"stylesheet",href:"/dark/assets/css/base.css"})}),(0,a.jsx)(c.Z,{}),(0,a.jsx)(o.Z,{}),s]})}},68880:function(e,s,i){"use strict";i.r(s);var a=i(85893),t=i(37513),r=i(41664),n=i.n(r);s.default=function(){return(0,a.jsx)("footer",{className:"sub-bg",children:(0,a.jsxs)("div",{className:"footer-container",children:[(0,a.jsx)("div",{className:"container pb-80 pt-80 ontop",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-3",children:(0,a.jsxs)("div",{className:"colum md-mb50",children:[(0,a.jsx)("div",{className:"tit mb-20",children:(0,a.jsx)("h6",{children:"Address"})}),(0,a.jsx)("div",{className:"text",children:(0,a.jsx)("p",{children:"901 South Highland St, Suite # 301,Arlington, VA 22041"})})]})}),(0,a.jsx)("div",{className:"col-lg-3 offset-lg-1",children:(0,a.jsxs)("div",{className:"colum md-mb50",children:[(0,a.jsx)("div",{className:"tit mb-20",children:(0,a.jsx)("h6",{children:"Company"})}),(0,a.jsxs)("div",{className:"text",children:[(0,a.jsx)("p",{className:"mb-10",children:(0,a.jsx)("a",{href:"#0",children:"info@createabit.com"})}),(0,a.jsx)("h5",{children:(0,a.jsx)("a",{href:"#",children:"+703-347-6512"})})]})]})}),(0,a.jsxs)("div",{className:"col-lg-2 md-mb50",children:[(0,a.jsx)("div",{className:"tit mb-20",children:(0,a.jsx)("h6",{children:"Information"})}),(0,a.jsxs)("ul",{className:"rest social-text ",children:[(0,a.jsx)("li",{className:"mr-30",children:(0,a.jsx)(n(),{href:"/light/page-team",children:"Our Team"})}),(0,a.jsx)("li",{className:"mr-30",children:(0,a.jsx)(n(),{href:"/light/page-team",children:"Our Client"})}),(0,a.jsx)("li",{className:"mr-30",children:(0,a.jsx)(n(),{href:"/light/blog-classic",children:"Our Blog"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/light/shop-list",children:"Shop"})})]})]}),(0,a.jsxs)("div",{className:"col-lg-3",children:[(0,a.jsx)("div",{className:"tit mb-20",children:(0,a.jsx)("h6",{children:"Social"})}),(0,a.jsxs)("ul",{className:"rest social-text ",children:[(0,a.jsx)("li",{className:"mr-30",children:(0,a.jsx)(n(),{href:"https://www.facebook.com/CreateAbitDesigns",children:"Facebook"})}),(0,a.jsx)("li",{className:"mr-30",children:(0,a.jsx)(n(),{href:"",children:"Instagram"})}),(0,a.jsx)("li",{className:"mr-30",children:(0,a.jsx)(n(),{href:"",children:"Twitter"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"",children:"LInkedin"})})]})]})]})}),(0,a.jsx)("div",{className:"sub-footer pt-40 pb-40 bord-thin-top ontop",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsx)("div",{className:"logo",children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("img",{src:"/dark/assets/imgs/logo-dark.png",alt:""})})})}),(0,a.jsx)("div",{className:"col-lg-8",children:(0,a.jsx)("div",{className:"copyright d-flex",children:(0,a.jsx)("div",{className:"ml-auto",children:(0,a.jsxs)("p",{className:"fz-13",children:["\xa9 2023 Geekfolio is Proudly Powered by"," ",(0,a.jsxs)("span",{className:"underline",children:[" ",(0,a.jsx)("a",{href:t.a,children:t.v})]})]})})})})]})})})]})})}},77121:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return w}});var a=i(85893),t=i(67294),r=i(9008),n=i.n(r),l=i(28235),c=i(98876),o=i(74537),d=JSON.parse('[{"id":1,"image":"/dark/assets/imgs/team/1.jpg","name":"adrian parody","position":"Co-Founder"},{"id":2,"image":"/dark/assets/imgs/team/2.jpg","name":"adrian parody","position":"Co-Founder"},{"id":3,"image":"/dark/assets/imgs/team/3.jpg","name":"adrian parody","position":"Co-Founder"},{"id":4,"image":"/dark/assets/imgs/team/4.jpg","name":"adrian parody","position":"Co-Founder"},{"id":5,"image":"/dark/assets/imgs/team/1.jpg","name":"adrian parody","position":"Co-Founder"},{"id":6,"image":"/dark/assets/imgs/team/2.jpg","name":"adrian parody","position":"Co-Founder"}]'),h=function(){return(0,a.jsx)("section",{className:"team-crev section-padding sub-bg",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row md-marg",children:d.map(e=>(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsx)("div",{className:"swiper-slide mb-50",children:(0,a.jsxs)("div",{className:"item",children:[(0,a.jsx)("div",{className:"img",children:(0,a.jsx)("img",{src:e.image,alt:""})}),(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)("div",{className:"main-marq team-position",children:(0,a.jsxs)("div",{className:"slide-har st1 non-strok",children:[(0,a.jsx)("div",{className:"box",children:[,,,,,].fill().map((s,i)=>(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("h4",{children:e.position})},i))}),(0,a.jsx)("div",{className:"box",children:[,,,,,].fill().map((s,i)=>(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("h4",{children:e.position})},i))})]})}),(0,a.jsx)("div",{className:"main-marq team-name",children:(0,a.jsxs)("div",{className:"slide-har st1 non-strok",children:[(0,a.jsx)("div",{className:"box",children:[,,,,,].fill().map((s,i)=>(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("h4",{children:e.name})},i))}),(0,a.jsx)("div",{className:"box",children:[,,,,,].fill().map((s,i)=>(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("h4",{children:e.name})},i))})]})})]})]})})},e.id))})})})},m=i(30719),x=i(88116),u=JSON.parse('[{"id":1,"content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.","image":"/dark/assets/imgs/testim/1.jpg","author":"Leonard Heiser","position":"CEO"},{"id":2,"content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.","image":"/dark/assets/imgs/testim/2.jpg","author":"Leonard Heiser","position":"CEO"},{"id":3,"content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.","image":"/dark/assets/imgs/testim/1.jpg","author":"Leonard Heiser","position":"CEO"},{"id":4,"content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.","image":"/dark/assets/imgs/testim/2.jpg","author":"Leonard Heiser","position":"CEO"}]');let j={modules:[x.W_,x.tl],loop:!0,spaceBetween:30,speed:1e3,slidesPerView:2,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".testim-controls .swiper-button-next",prevEl:".testim-controls .swiper-button-prev"},breakpoints:{0:{slidesPerView:1},640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:2}}};var g=function(){let[e,s]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{s(!0)},[]),(0,a.jsx)("section",{className:"testim-crv section-padding",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-4 valign",children:(0,a.jsxs)("div",{className:"sec-lg-head md-mb80",children:[(0,a.jsxs)("div",{className:"position-re",children:[(0,a.jsx)("h6",{className:"dot-titl-non mb-10",children:"What Clients Says?"}),(0,a.jsx)("h2",{className:"fz-50",children:"Testimonials"})]}),(0,a.jsxs)("div",{className:"swiper-controls testim-controls arrow-out d-flex mt-50",children:[(0,a.jsx)("div",{className:"swiper-button-prev",children:(0,a.jsx)("span",{className:"left",children:(0,a.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",fill:"currentColor"})})})}),(0,a.jsx)("div",{className:"swiper-button-next ml-50",children:(0,a.jsx)("span",{className:"right",children:(0,a.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z",fill:"currentColor"})})})})]})]})}),(0,a.jsx)("div",{className:"col-lg-8",children:(0,a.jsx)("div",{className:"testim-swiper2",children:e&&(0,a.jsx)(m.tq,{...j,id:"content-carousel-container-unq-testim",className:"swiper-container",children:u.map(e=>(0,a.jsx)(m.o5,{children:(0,a.jsxs)("div",{className:"item",children:[(0,a.jsxs)("div",{className:"cont mb-40",children:[(0,a.jsx)("div",{className:"rate-stars mb-20 fz-12",children:(0,a.jsxs)("span",{className:"rate main-color",children:[(0,a.jsx)("i",{className:"fas fa-star"}),(0,a.jsx)("i",{className:"fas fa-star"}),(0,a.jsx)("i",{className:"fas fa-star"}),(0,a.jsx)("i",{className:"fas fa-star"}),(0,a.jsx)("i",{className:"fas fa-star"})]})}),(0,a.jsx)("p",{className:"fw-400",children:e.content})]}),(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"img circle-60",children:(0,a.jsx)("img",{src:e.image,alt:"",className:"circle-img"})})}),(0,a.jsx)("div",{className:"ml-30",children:(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)("h6",{className:"fz-16",children:e.author}),(0,a.jsx)("span",{className:"opacity-7 sub-title",children:e.position})]})})]})]})},e.id))})})})]})})})},p=i(47570),f=i(45169),v=i(68880);function N(){return(0,t.useEffect)(()=>(document.body.classList.add("main-bg"),()=>document.body.classList.remove("main-bg")),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n(),{children:(0,a.jsx)("title",{children:"Createabit - Our Team"})}),(0,a.jsx)(c.Z,{}),(0,a.jsx)(f.default,{}),(0,a.jsxs)("main",{children:[(0,a.jsx)(o.Z,{}),(0,a.jsx)(h,{}),(0,a.jsx)(g,{}),(0,a.jsx)(p.Z,{innerPageStyle:!0})]}),(0,a.jsx)(v.default,{})]})}N.getLayout=e=>(0,a.jsx)(l.Z,{lightMode:!0,children:e});var w=N},11163:function(e,s,i){e.exports=i(57875)},37513:function(e){"use strict";e.exports=JSON.parse('{"v":"ThemesCamp","a":"https://themeforest.net/user/themescamp"}')}},function(e){e.O(0,[1664,719,5169,9774,2888,179],function(){return e(e.s=43023)}),_N_E=e.O()}]);