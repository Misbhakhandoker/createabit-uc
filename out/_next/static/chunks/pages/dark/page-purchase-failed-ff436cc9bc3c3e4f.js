(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2494],{65121:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dark/page-purchase-failed",function(){return t(62010)}])},18918:function(e,s,t){"use strict";function r(e){let{preview:s,lightMode:t}=e,r=document.querySelector('link[href="/landing-preview/css/preview-style.css"]'),n=document.querySelector('link[href="/dark/assets/css/style.css"]'),l=document.querySelector('link[href="/light/assets/css/style.css"]'),c=document.querySelector('link[href="/dark/assets/css/plugins.css"]'),i=document.querySelector('link[href="/light/assets/css/plugins.css"]');if(t&&!s){document.querySelector("noscript").before(i),document.querySelector("noscript").before(l);let e=document.querySelectorAll('link[href="/light/assets/css/plugins.css"]');e.length>1&&e[0].remove();let s=document.querySelectorAll('link[href="/light/assets/css/style.css"]');s.length>1&&s[0].remove()}if(!t&&!s){document.querySelector("noscript").before(c),document.querySelector("noscript").before(n);let e=document.querySelectorAll('link[href="/dark/assets/css/plugins.css"]');e.length>1&&e[0].remove();let s=document.querySelectorAll('link[href="/dark/assets/css/style.css"]');s.length>1&&s[0].remove()}s&&r?(document.head.append(r),l&&l.remove(),i&&i.remove()):!s&&r&&r.remove()}t.d(s,{Z:function(){return r}})},83538:function(e,s,t){"use strict";var r=t(85893),n=t(67294);s.Z=function(){return(0,n.useEffect)(()=>{let e=document.querySelectorAll(".hover-this"),s=document.querySelector(".cursor"),t=function(e){let s=this.querySelector(".hover-anim"),{offsetX:t,offsetY:r}=e,{offsetWidth:n,offsetHeight:l}=this;s.style.transform="translate(".concat(t/n*50-25,"px, ").concat(r/l*50-25,"px)"),"mouseleave"===e.type&&(s.style.transform="")};e.forEach(e=>e.addEventListener("mousemove",t)),e.forEach(e=>e.addEventListener("mouseleave",t)),window.addEventListener("mousemove",e=>{let{clientX:t,clientY:r}=e;s.style.left=t+"px",s.style.top=r+"px"}),document.querySelectorAll("a, .cursor-pointer").forEach(e=>{e.addEventListener("mousemove",()=>{s.classList.add("cursor-active")}),e.addEventListener("mouseleave",()=>{s.classList.remove("cursor-active")})})},[]),(0,r.jsx)("div",{className:"cursor"})}},98876:function(e,s,t){"use strict";var r=t(85893),n=t(67294);s.Z=function(){return(0,n.useEffect)(()=>{let e=document.getElementById("svg"),s=gsap.timeline();s.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),s.to(e,{duration:.5,attr:{d:"M0 502S175 272 500 272s500 230 500 230V0H0Z"},ease:"power2.easeIn"}).to(e,{duration:.5,attr:{d:"M0 2S175 1 500 1s500 1 500 1V0H0Z"},ease:"power2.easeOut"}),s.to(".loader-wrap",{y:-1500}),s.to(".loader-wrap",{zIndex:-1,display:"none"}),s.from("header",{y:200},"-=1.5"),s.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")},[]),(0,r.jsxs)("div",{className:"loader-wrap",children:[(0,r.jsx)("svg",{viewBox:"0 0 1000 1000",preserveAspectRatio:"none",children:(0,r.jsx)("path",{id:"svg",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z"})}),(0,r.jsx)("div",{className:"loader-wrap-heading",children:(0,r.jsx)("span",{children:(0,r.jsxs)("h2",{className:"load-text",children:[(0,r.jsx)("span",{children:"L"}),(0,r.jsx)("span",{children:"o"}),(0,r.jsx)("span",{children:"a"}),(0,r.jsx)("span",{children:"d"}),(0,r.jsx)("span",{children:"i"}),(0,r.jsx)("span",{children:"n"}),(0,r.jsx)("span",{children:"g"})]})})})]})}},42037:function(e,s,t){"use strict";t.d(s,{Z:function(){return c}});var r=t(85893),n=t(67294),l=()=>{let e=document.querySelector(".progress-wrap"),s=document.querySelector(".progress-wrap path"),t=s.getTotalLength(),r=()=>{let e=window.pageYOffset,r=document.documentElement.scrollHeight-window.innerHeight;s.style.strokeDashoffset=t-e*t/r};e&&(s.style.transition=s.style.WebkitTransition="none",s.style.strokeDasharray=t+" "+t,s.style.strokeDashoffset=t,s.getBoundingClientRect(),s.style.transition=s.style.WebkitTransition="stroke-dashoffset 10ms linear",r(),window.addEventListener("scroll",r),window.addEventListener("scroll",function(){window.pageYOffset>150?e.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")}),e.addEventListener("click",function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},c=()=>((0,n.useEffect)(()=>{l()},[]),(0,r.jsx)("div",{className:"progress-wrap cursor-pointer",children:(0,r.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,r.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})}))},28235:function(e,s,t){"use strict";var r=t(85893),n=t(67294),l=t(9008),c=t.n(l),i=t(18918),a=t(83538),o=t(42037);s.Z=e=>{let{children:s,lightMode:t}=e;return(0,n.useEffect)(()=>{(0,i.Z)({lightMode:t})},[t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c(),{children:t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("link",{rel:"stylesheet",href:"/light/assets/css/plugins.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"/light/assets/css/style.css"})]}):(0,r.jsx)("link",{rel:"stylesheet",href:"/dark/assets/css/base.css"})}),(0,r.jsx)(a.Z,{}),(0,r.jsx)(o.Z,{}),s]})}},64300:function(e,s,t){"use strict";t.r(s);var r=t(85893),n=t(37513),l=t(41664),c=t.n(l);s.default=function(){return(0,r.jsx)("footer",{className:"sub-bg dark-footer",children:(0,r.jsxs)("div",{className:"footer-container",children:[(0,r.jsx)("div",{className:"container pb-80 pt-80 ontop",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-lg-3",children:[(0,r.jsx)("div",{className:"logo",style:{marginBottom:"20px"},children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("img",{src:"/dark/assets/imgs/logo-light.png",alt:""})})}),(0,r.jsx)("small",{children:"We tend to believe we are not just a company. We are incorporated but for the sake of representation. However, our actual belief is far beyond incorporation, this is a concept. A concept which sees ‘design’ as a medium to trigger the undiscovered “seventh sense” of the human psychology"})]}),(0,r.jsx)("div",{className:"col-lg-3 offset-lg-1",children:(0,r.jsxs)("div",{className:"colum md-mb50",children:[(0,r.jsx)("div",{className:"mb-20 tit",children:(0,r.jsx)("h6",{children:"Company"})}),(0,r.jsxs)("div",{className:"text",children:[(0,r.jsx)("p",{className:"mb-10",children:(0,r.jsx)("a",{href:"#0",children:"info@createabit.com"})}),(0,r.jsx)("h5",{children:(0,r.jsx)("a",{href:"#",children:"+703-347-6512"})})]})]})}),(0,r.jsxs)("div",{className:"col-lg-3 md-mb50",children:[(0,r.jsx)("div",{className:"mb-20 tit",children:(0,r.jsx)("h6",{children:"Sitemap"})}),(0,r.jsxs)("ul",{className:"rest social-text ",children:[(0,r.jsx)("li",{className:"mr-30",children:(0,r.jsx)(c(),{href:"/dark/page-team",children:"Our Team"})}),(0,r.jsx)("li",{className:"mr-30",children:(0,r.jsx)(c(),{href:"/dark/page-team",children:"Our Client"})}),(0,r.jsx)("li",{className:"mr-30",children:(0,r.jsx)(c(),{href:"/dark/blog-classic",children:"Our Blog"})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/dark/shop-list",children:"Shop"})})]})]}),(0,r.jsxs)("div",{className:"col-lg-2",children:[(0,r.jsx)("div",{className:"mb-20 tit",children:(0,r.jsx)("h6",{children:"Social"})}),(0,r.jsxs)("ul",{className:"rest social-text ",children:[(0,r.jsx)("li",{className:"mr-30",children:(0,r.jsx)(c(),{href:"https://www.facebook.com/CreateAbitDesigns",children:"Facebook"})}),(0,r.jsx)("li",{className:"mr-30",children:(0,r.jsx)(c(),{href:"",children:"Instagram"})}),(0,r.jsx)("li",{className:"mr-30",children:(0,r.jsx)(c(),{href:"",children:"Twitter"})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"",children:"LInkedin"})})]})]})]})}),(0,r.jsx)("div",{className:"pt-40 pb-40 sub-footer bord-thin-top ontop",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-lg-8",children:(0,r.jsx)("div",{className:"copyright d-flex",children:(0,r.jsx)("div",{className:"ml-auto",children:(0,r.jsxs)("p",{className:"fz-13",children:["\xa9 2023 Geekfolio is Proudly Powered by"," ",(0,r.jsxs)("span",{className:"underline",children:[" ",(0,r.jsx)("a",{href:n.a,children:n.v})]})]})})})})})})})]})})}},62010:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return m}});var r=t(85893),n=t(98876),l=()=>(0,r.jsxs)("div",{className:"payment",children:[(0,r.jsx)("h2",{children:"Payment Status"}),(0,r.jsx)("h3",{children:"Failed"})]}),c=t(28235),i=t(9008),a=t.n(i),o=t(67294),d=t(64300),h=t(21453);function u(){return(0,o.useEffect)(()=>(document.body.classList.add("main-bg"),()=>document.body.classList.remove("main-bg")),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"Createabit - Purchase Details"})}),(0,r.jsx)(n.Z,{}),(0,r.jsxs)("div",{id:"smooth-wrapper",children:[(0,r.jsx)(h.default,{}),(0,r.jsxs)("div",{id:"smooth-content",children:[(0,r.jsx)("main",{className:"main-bg",children:(0,r.jsx)(l,{})}),(0,r.jsx)(d.default,{})]})]})]})}u.getLayout=e=>(0,r.jsx)(c.Z,{children:e});var m=u},11163:function(e,s,t){e.exports=t(57875)},37513:function(e){"use strict";e.exports=JSON.parse('{"v":"ThemesCamp","a":"https://themeforest.net/user/themescamp"}')}},function(e){e.O(0,[1664,1453,9774,2888,179],function(){return e(e.s=65121)}),_N_E=e.O()}]);