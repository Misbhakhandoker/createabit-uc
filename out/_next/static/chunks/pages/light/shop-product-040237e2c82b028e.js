(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7597],{94332:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/light/shop-product",function(){return r(67677)}])},18918:function(e,s,r){"use strict";function l(e){let{preview:s,lightMode:r}=e,l=document.querySelector('link[href="/landing-preview/css/preview-style.css"]'),t=document.querySelector('link[href="/dark/assets/css/style.css"]'),c=document.querySelector('link[href="/light/assets/css/style.css"]'),i=document.querySelector('link[href="/dark/assets/css/plugins.css"]'),n=document.querySelector('link[href="/light/assets/css/plugins.css"]');if(r&&!s){document.querySelector("noscript").before(n),document.querySelector("noscript").before(c);let e=document.querySelectorAll('link[href="/light/assets/css/plugins.css"]');e.length>1&&e[0].remove();let s=document.querySelectorAll('link[href="/light/assets/css/style.css"]');s.length>1&&s[0].remove()}if(!r&&!s){document.querySelector("noscript").before(i),document.querySelector("noscript").before(t);let e=document.querySelectorAll('link[href="/dark/assets/css/plugins.css"]');e.length>1&&e[0].remove();let s=document.querySelectorAll('link[href="/dark/assets/css/style.css"]');s.length>1&&s[0].remove()}s&&l?(document.head.append(l),c&&c.remove(),n&&n.remove()):!s&&l&&l.remove()}r.d(s,{Z:function(){return l}})},83538:function(e,s,r){"use strict";var l=r(85893),t=r(67294);s.Z=function(){return(0,t.useEffect)(()=>{let e=document.querySelectorAll(".hover-this"),s=document.querySelector(".cursor"),r=function(e){let s=this.querySelector(".hover-anim"),{offsetX:r,offsetY:l}=e,{offsetWidth:t,offsetHeight:c}=this;s.style.transform="translate(".concat(r/t*50-25,"px, ").concat(l/c*50-25,"px)"),"mouseleave"===e.type&&(s.style.transform="")};e.forEach(e=>e.addEventListener("mousemove",r)),e.forEach(e=>e.addEventListener("mouseleave",r)),window.addEventListener("mousemove",e=>{let{clientX:r,clientY:l}=e;s.style.left=r+"px",s.style.top=l+"px"}),document.querySelectorAll("a, .cursor-pointer").forEach(e=>{e.addEventListener("mousemove",()=>{s.classList.add("cursor-active")}),e.addEventListener("mouseleave",()=>{s.classList.remove("cursor-active")})})},[]),(0,l.jsx)("div",{className:"cursor"})}},98876:function(e,s,r){"use strict";var l=r(85893),t=r(67294);s.Z=function(){return(0,t.useEffect)(()=>{let e=document.getElementById("svg"),s=gsap.timeline();s.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),s.to(e,{duration:.5,attr:{d:"M0 502S175 272 500 272s500 230 500 230V0H0Z"},ease:"power2.easeIn"}).to(e,{duration:.5,attr:{d:"M0 2S175 1 500 1s500 1 500 1V0H0Z"},ease:"power2.easeOut"}),s.to(".loader-wrap",{y:-1500}),s.to(".loader-wrap",{zIndex:-1,display:"none"}),s.from("header",{y:200},"-=1.5"),s.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")},[]),(0,l.jsxs)("div",{className:"loader-wrap",children:[(0,l.jsx)("svg",{viewBox:"0 0 1000 1000",preserveAspectRatio:"none",children:(0,l.jsx)("path",{id:"svg",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z"})}),(0,l.jsx)("div",{className:"loader-wrap-heading",children:(0,l.jsx)("span",{children:(0,l.jsxs)("h2",{className:"load-text",children:[(0,l.jsx)("span",{children:"L"}),(0,l.jsx)("span",{children:"o"}),(0,l.jsx)("span",{children:"a"}),(0,l.jsx)("span",{children:"d"}),(0,l.jsx)("span",{children:"i"}),(0,l.jsx)("span",{children:"n"}),(0,l.jsx)("span",{children:"g"})]})})})]})}},42037:function(e,s,r){"use strict";r.d(s,{Z:function(){return i}});var l=r(85893),t=r(67294),c=()=>{let e=document.querySelector(".progress-wrap"),s=document.querySelector(".progress-wrap path"),r=s.getTotalLength(),l=()=>{let e=window.pageYOffset,l=document.documentElement.scrollHeight-window.innerHeight;s.style.strokeDashoffset=r-e*r/l};e&&(s.style.transition=s.style.WebkitTransition="none",s.style.strokeDasharray=r+" "+r,s.style.strokeDashoffset=r,s.getBoundingClientRect(),s.style.transition=s.style.WebkitTransition="stroke-dashoffset 10ms linear",l(),window.addEventListener("scroll",l),window.addEventListener("scroll",function(){window.pageYOffset>150?e.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")}),e.addEventListener("click",function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},i=()=>((0,t.useEffect)(()=>{c()},[]),(0,l.jsx)("div",{className:"progress-wrap cursor-pointer",children:(0,l.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,l.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})}))},51317:function(e,s,r){"use strict";var l=r(85893),t=r(37513),c=r(41664),i=r.n(c);s.Z=function(e){let{lightMode:s}=e;return(0,l.jsx)("footer",{className:"sub-bg",children:(0,l.jsxs)("div",{className:"footer-container",children:[(0,l.jsx)("div",{className:"container pb-80 pt-80 ontop",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-3",children:(0,l.jsxs)("div",{className:"colum md-mb50",children:[(0,l.jsx)("div",{className:"tit mb-20",children:(0,l.jsx)("h6",{children:"Address"})}),(0,l.jsx)("div",{className:"text",children:(0,l.jsx)("p",{children:"901 South Highland St, Suite # 301,Arlington, VA 22041"})})]})}),(0,l.jsx)("div",{className:"col-lg-3 offset-lg-1",children:(0,l.jsxs)("div",{className:"colum md-mb50",children:[(0,l.jsx)("div",{className:"tit mb-20",children:(0,l.jsx)("h6",{children:"Company"})}),(0,l.jsxs)("div",{className:"text",children:[(0,l.jsx)("p",{className:"mb-10",children:(0,l.jsx)("a",{href:"#0",children:"info@createabit.com"})}),(0,l.jsx)("h5",{children:(0,l.jsx)("a",{href:"#",children:"+703-347-6512"})})]})]})}),(0,l.jsxs)("div",{className:"col-lg-2 md-mb50",children:[(0,l.jsx)("div",{className:"tit mb-20",children:(0,l.jsx)("h6",{children:"Information"})}),(0,l.jsxs)("ul",{className:"rest social-text ",children:[(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(i(),{href:"/".concat(s?"light":"dark","/page-team"),children:"Our Team"})}),(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(i(),{href:"/".concat(s?"light":"dark","/page-team"),children:"Our Client"})}),(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(i(),{href:"/".concat(s?"light":"dark","/blog-list/"),children:"Our Blog"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i(),{href:"/".concat(s?"light":"dark","/shop-list"),children:"Shop"})})]})]}),(0,l.jsxs)("div",{className:"col-lg-3",children:[(0,l.jsx)("div",{className:"tit mb-20",children:(0,l.jsx)("h6",{children:"Social"})}),(0,l.jsxs)("ul",{className:"rest social-text ",children:[(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(i(),{href:"/".concat(s?"light":"dark","/page-team"),children:"Facebook"})}),(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(i(),{href:"/".concat(s?"light":"dark","/page-team"),children:"Instagram"})}),(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(i(),{href:"/".concat(s?"light":"dark","/blog-list/"),children:"Twitter"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i(),{href:"/".concat(s?"light":"dark","/shop-list"),children:"LInkedin"})})]})]})]})}),(0,l.jsx)("div",{className:"sub-footer pt-40 pb-40 bord-thin-top ontop",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsx)("div",{className:"logo",children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("img",{src:"/dark/assets/imgs/logo-".concat(s?"dark":"light",".png"),alt:""})})})}),(0,l.jsx)("div",{className:"col-lg-8",children:(0,l.jsx)("div",{className:"copyright d-flex",children:(0,l.jsx)("div",{className:"ml-auto",children:(0,l.jsxs)("p",{className:"fz-13",children:["\xa9 2023 Geekfolio is Proudly Powered by"," ",(0,l.jsxs)("span",{className:"underline",children:[" ",(0,l.jsx)("a",{href:t.a,children:t.v})]})]})})})})]})})})]})})}},28235:function(e,s,r){"use strict";var l=r(85893),t=r(67294),c=r(9008),i=r.n(c),n=r(18918),a=r(83538),o=r(42037);s.Z=e=>{let{children:s,lightMode:r}=e;return(0,t.useEffect)(()=>{(0,n.Z)({lightMode:r})},[r]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i(),{children:r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("link",{rel:"stylesheet",href:"/light/assets/css/plugins.css"}),(0,l.jsx)("link",{rel:"stylesheet",href:"/light/assets/css/style.css"})]}):(0,l.jsx)("link",{rel:"stylesheet",href:"/dark/assets/css/base.css"})}),(0,l.jsx)(a.Z,{}),(0,l.jsx)(o.Z,{}),s]})}},68880:function(e,s,r){"use strict";r.r(s);var l=r(85893),t=r(37513),c=r(41664),i=r.n(c);s.default=function(){return(0,l.jsx)("footer",{className:"sub-bg",children:(0,l.jsxs)("div",{className:"footer-container",children:[(0,l.jsx)("div",{className:"container pb-80 pt-80 ontop",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-3",children:(0,l.jsxs)("div",{className:"colum md-mb50",children:[(0,l.jsx)("div",{className:"tit mb-20",children:(0,l.jsx)("h6",{children:"Address"})}),(0,l.jsx)("div",{className:"text",children:(0,l.jsx)("p",{children:"901 South Highland St, Suite # 301,Arlington, VA 22041"})})]})}),(0,l.jsx)("div",{className:"col-lg-3 offset-lg-1",children:(0,l.jsxs)("div",{className:"colum md-mb50",children:[(0,l.jsx)("div",{className:"tit mb-20",children:(0,l.jsx)("h6",{children:"Company"})}),(0,l.jsxs)("div",{className:"text",children:[(0,l.jsx)("p",{className:"mb-10",children:(0,l.jsx)("a",{href:"#0",children:"info@createabit.com"})}),(0,l.jsx)("h5",{children:(0,l.jsx)("a",{href:"#",children:"+703-347-6512"})})]})]})}),(0,l.jsxs)("div",{className:"col-lg-2 md-mb50",children:[(0,l.jsx)("div",{className:"tit mb-20",children:(0,l.jsx)("h6",{children:"Information"})}),(0,l.jsxs)("ul",{className:"rest social-text ",children:[(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(i(),{href:"/light/page-team",children:"Our Team"})}),(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(i(),{href:"/light/page-team",children:"Our Client"})}),(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(i(),{href:"/light/blog-classic",children:"Our Blog"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i(),{href:"/light/shop-list",children:"Shop"})})]})]}),(0,l.jsxs)("div",{className:"col-lg-3",children:[(0,l.jsx)("div",{className:"tit mb-20",children:(0,l.jsx)("h6",{children:"Social"})}),(0,l.jsxs)("ul",{className:"rest social-text ",children:[(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(i(),{href:"https://www.facebook.com/CreateAbitDesigns",children:"Facebook"})}),(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(i(),{href:"",children:"Instagram"})}),(0,l.jsx)("li",{className:"mr-30",children:(0,l.jsx)(i(),{href:"",children:"Twitter"})}),(0,l.jsx)("li",{children:(0,l.jsx)(i(),{href:"",children:"LInkedin"})})]})]})]})}),(0,l.jsx)("div",{className:"sub-footer pt-40 pb-40 bord-thin-top ontop",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsx)("div",{className:"logo",children:(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("img",{src:"/dark/assets/imgs/logo-dark.png",alt:""})})})}),(0,l.jsx)("div",{className:"col-lg-8",children:(0,l.jsx)("div",{className:"copyright d-flex",children:(0,l.jsx)("div",{className:"ml-auto",children:(0,l.jsxs)("p",{className:"fz-13",children:["\xa9 2023 Geekfolio is Proudly Powered by"," ",(0,l.jsxs)("span",{className:"underline",children:[" ",(0,l.jsx)("a",{href:t.a,children:t.v})]})]})})})})]})})})]})})}},67677:function(e,s,r){"use strict";r.r(s);var l=r(85893),t=r(67294),c=r(9008),i=r.n(c),n=r(28235),a=r(98876);r(51317);var o=r(71714),d=r(45169),h=r(68880);function m(){return(0,t.useEffect)(()=>(document.body.classList.add("main-bg"),gsap.registerPlugin(ScrollTrigger,ScrollSmoother),ScrollTrigger.normalizeScroll(!0),ScrollSmoother.create({smooth:2,effects:!0}),()=>document.body.classList.remove("main-bg")),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i(),{children:(0,l.jsx)("title",{children:"Createabit - Shop Product"})}),(0,l.jsx)(a.Z,{}),(0,l.jsxs)("div",{id:"smooth-wrapper",children:[(0,l.jsx)(d.default,{}),(0,l.jsxs)("div",{id:"smooth-content",children:[(0,l.jsx)("main",{className:"main-bg",children:(0,l.jsx)(o.Z,{})}),(0,l.jsx)(h.default,{})]})]})]})}m.getLayout=e=>(0,l.jsx)(n.Z,{lightMode:!0,children:e}),s.default=m},11163:function(e,s,r){e.exports=r(57875)},37513:function(e){"use strict";e.exports=JSON.parse('{"v":"ThemesCamp","a":"https://themeforest.net/user/themescamp"}')}},function(e){e.O(0,[1664,719,5169,1714,9774,2888,179],function(){return e(e.s=94332)}),_N_E=e.O()}]);