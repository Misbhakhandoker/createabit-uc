(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5892],{26922:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dark/industry",function(){return t(74211)}])},18918:function(e,s,t){"use strict";function r(e){let{preview:s,lightMode:t}=e,r=document.querySelector('link[href="/landing-preview/css/preview-style.css"]'),n=document.querySelector('link[href="/dark/assets/css/style.css"]'),i=document.querySelector('link[href="/light/assets/css/style.css"]'),l=document.querySelector('link[href="/dark/assets/css/plugins.css"]'),c=document.querySelector('link[href="/light/assets/css/plugins.css"]');if(t&&!s){document.querySelector("noscript").before(c),document.querySelector("noscript").before(i);let e=document.querySelectorAll('link[href="/light/assets/css/plugins.css"]');e.length>1&&e[0].remove();let s=document.querySelectorAll('link[href="/light/assets/css/style.css"]');s.length>1&&s[0].remove()}if(!t&&!s){document.querySelector("noscript").before(l),document.querySelector("noscript").before(n);let e=document.querySelectorAll('link[href="/dark/assets/css/plugins.css"]');e.length>1&&e[0].remove();let s=document.querySelectorAll('link[href="/dark/assets/css/style.css"]');s.length>1&&s[0].remove()}s&&r?(document.head.append(r),i&&i.remove(),c&&c.remove()):!s&&r&&r.remove()}t.d(s,{Z:function(){return r}})},83538:function(e,s,t){"use strict";var r=t(85893),n=t(67294);s.Z=function(){return(0,n.useEffect)(()=>{let e=document.querySelectorAll(".hover-this"),s=document.querySelector(".cursor"),t=function(e){let s=this.querySelector(".hover-anim"),{offsetX:t,offsetY:r}=e,{offsetWidth:n,offsetHeight:i}=this;s.style.transform="translate(".concat(t/n*50-25,"px, ").concat(r/i*50-25,"px)"),"mouseleave"===e.type&&(s.style.transform="")};e.forEach(e=>e.addEventListener("mousemove",t)),e.forEach(e=>e.addEventListener("mouseleave",t)),window.addEventListener("mousemove",e=>{let{clientX:t,clientY:r}=e;s.style.left=t+"px",s.style.top=r+"px"}),document.querySelectorAll("a, .cursor-pointer").forEach(e=>{e.addEventListener("mousemove",()=>{s.classList.add("cursor-active")}),e.addEventListener("mouseleave",()=>{s.classList.remove("cursor-active")})})},[]),(0,r.jsx)("div",{className:"cursor"})}},98876:function(e,s,t){"use strict";var r=t(85893),n=t(67294);s.Z=function(){return(0,n.useEffect)(()=>{let e=document.getElementById("svg"),s=gsap.timeline();s.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),s.to(e,{duration:.5,attr:{d:"M0 502S175 272 500 272s500 230 500 230V0H0Z"},ease:"power2.easeIn"}).to(e,{duration:.5,attr:{d:"M0 2S175 1 500 1s500 1 500 1V0H0Z"},ease:"power2.easeOut"}),s.to(".loader-wrap",{y:-1500}),s.to(".loader-wrap",{zIndex:-1,display:"none"}),s.from("header",{y:200},"-=1.5"),s.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")},[]),(0,r.jsxs)("div",{className:"loader-wrap",children:[(0,r.jsx)("svg",{viewBox:"0 0 1000 1000",preserveAspectRatio:"none",children:(0,r.jsx)("path",{id:"svg",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z"})}),(0,r.jsx)("div",{className:"loader-wrap-heading",children:(0,r.jsx)("span",{children:(0,r.jsxs)("h2",{className:"load-text",children:[(0,r.jsx)("span",{children:"L"}),(0,r.jsx)("span",{children:"o"}),(0,r.jsx)("span",{children:"a"}),(0,r.jsx)("span",{children:"d"}),(0,r.jsx)("span",{children:"i"}),(0,r.jsx)("span",{children:"n"}),(0,r.jsx)("span",{children:"g"})]})})})]})}},42037:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var r=t(85893),n=t(67294),i=()=>{let e=document.querySelector(".progress-wrap"),s=document.querySelector(".progress-wrap path"),t=s.getTotalLength(),r=()=>{let e=window.pageYOffset,r=document.documentElement.scrollHeight-window.innerHeight;s.style.strokeDashoffset=t-e*t/r};e&&(s.style.transition=s.style.WebkitTransition="none",s.style.strokeDasharray=t+" "+t,s.style.strokeDashoffset=t,s.getBoundingClientRect(),s.style.transition=s.style.WebkitTransition="stroke-dashoffset 10ms linear",r(),window.addEventListener("scroll",r),window.addEventListener("scroll",function(){window.pageYOffset>150?e.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")}),e.addEventListener("click",function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},l=()=>((0,n.useEffect)(()=>{i()},[]),(0,r.jsx)("div",{className:"progress-wrap cursor-pointer",children:(0,r.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,r.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})}))},29066:function(e,s,t){"use strict";var r=t(85893),n=t(41664),i=t.n(n),l=t(5821);s.Z=function(){function e(e){var s=e.currentTarget.getAttribute("data-tab");if(document.querySelectorAll(".links-text li").forEach(e=>{e.classList.remove("current"),e.classList.add("no-active")}),e.currentTarget.classList.add("current"),e.currentTarget.classList.remove("no-active"),document.querySelectorAll(".links-img .img").forEach(e=>e.classList.remove("current")),document.querySelector("#"+s).classList.add("current"),e.currentTarget.classList.contains("current"))return!1}function s(){document.querySelectorAll(".links-text li").forEach(e=>e.classList.remove("current")),document.querySelectorAll(".links-img .img").forEach(e=>e.classList.remove("current")),document.querySelectorAll(".links-text li").forEach(e=>e.classList.remove("no-active"))}return(0,r.jsxs)("section",{className:"inter-links-center horizontal section-padding d-flex align-items-center",children:[(0,r.jsx)("div",{className:"container-xxl",children:(0,r.jsx)("div",{className:"row justify-content-center",children:(0,r.jsx)("div",{className:"col-lg-10",children:(0,r.jsx)("div",{className:"links-text d-flex justify-content-center",children:(0,r.jsx)("ul",{className:"rest",children:l.map(t=>(0,r.jsx)("li",{"data-tab":"tab-".concat(t.id),onMouseEnter:e,onMouseLeave:s,children:(0,r.jsxs)("h2",{children:[(0,r.jsxs)("span",{className:"num",children:[t.number,"."]}),(0,r.jsxs)(i(),{href:"/dark/project-details2",children:[(0,r.jsx)("span",{className:"tag sub-title",children:t.type})," ",(0,r.jsx)("span",{className:"text",children:t.title})]})]})},t.id))})})})})}),(0,r.jsx)("div",{className:"links-img",children:l.map(e=>(0,r.jsx)("div",{className:"img",id:"tab-".concat(e.id),children:(0,r.jsx)("img",{src:e.image,alt:""})},e.id))})]})}},28235:function(e,s,t){"use strict";var r=t(85893),n=t(67294),i=t(9008),l=t.n(i),c=t(18918),a=t(83538),o=t(42037);s.Z=e=>{let{children:s,lightMode:t}=e;return(0,n.useEffect)(()=>{(0,c.Z)({lightMode:t})},[t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l(),{children:t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("link",{rel:"stylesheet",href:"/light/assets/css/plugins.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"/light/assets/css/style.css"})]}):(0,r.jsx)("link",{rel:"stylesheet",href:"/dark/assets/css/base.css"})}),(0,r.jsx)(a.Z,{}),(0,r.jsx)(o.Z,{}),s]})}},64300:function(e,s,t){"use strict";t.r(s);var r=t(85893),n=t(37513),i=t(41664),l=t.n(i);s.default=function(){return(0,r.jsx)("footer",{className:"sub-bg dark-footer",children:(0,r.jsxs)("div",{className:"footer-container",children:[(0,r.jsx)("div",{className:"container pb-80 pt-80 ontop",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-lg-3",children:[(0,r.jsx)("div",{className:"logo",style:{marginBottom:"20px"},children:(0,r.jsx)("a",{href:"#",children:(0,r.jsx)("img",{src:"/dark/assets/imgs/logo-light.png",alt:""})})}),(0,r.jsx)("small",{children:"We tend to believe we are not just a company. We are incorporated but for the sake of representation. However, our actual belief is far beyond incorporation, this is a concept. A concept which sees ‘design’ as a medium to trigger the undiscovered “seventh sense” of the human psychology"})]}),(0,r.jsx)("div",{className:"col-lg-3 offset-lg-1",children:(0,r.jsxs)("div",{className:"colum md-mb50",children:[(0,r.jsx)("div",{className:"mb-20 tit",children:(0,r.jsx)("h6",{children:"Company"})}),(0,r.jsxs)("div",{className:"text",children:[(0,r.jsx)("p",{className:"mb-10",children:(0,r.jsx)("a",{href:"#0",children:"info@createabit.com"})}),(0,r.jsx)("h5",{children:(0,r.jsx)("a",{href:"#",children:"+703-347-6512"})})]})]})}),(0,r.jsxs)("div",{className:"col-lg-3 md-mb50",children:[(0,r.jsx)("div",{className:"mb-20 tit",children:(0,r.jsx)("h6",{children:"Sitemap"})}),(0,r.jsxs)("ul",{className:"rest social-text ",children:[(0,r.jsx)("li",{className:"mr-30",children:(0,r.jsx)(l(),{href:"/dark/page-team",children:"Our Team"})}),(0,r.jsx)("li",{className:"mr-30",children:(0,r.jsx)(l(),{href:"/dark/page-team",children:"Our Client"})}),(0,r.jsx)("li",{className:"mr-30",children:(0,r.jsx)(l(),{href:"/dark/blog-classic",children:"Our Blog"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"/dark/shop-list",children:"Shop"})})]})]}),(0,r.jsxs)("div",{className:"col-lg-2",children:[(0,r.jsx)("div",{className:"mb-20 tit",children:(0,r.jsx)("h6",{children:"Social"})}),(0,r.jsxs)("ul",{className:"rest social-text ",children:[(0,r.jsx)("li",{className:"mr-30",children:(0,r.jsx)(l(),{href:"https://www.facebook.com/CreateAbitDesigns",children:"Facebook"})}),(0,r.jsx)("li",{className:"mr-30",children:(0,r.jsx)(l(),{href:"",children:"Instagram"})}),(0,r.jsx)("li",{className:"mr-30",children:(0,r.jsx)(l(),{href:"",children:"Twitter"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l(),{href:"",children:"LInkedin"})})]})]})]})}),(0,r.jsx)("div",{className:"pt-40 pb-40 sub-footer bord-thin-top ontop",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col-lg-8",children:(0,r.jsx)("div",{className:"copyright d-flex",children:(0,r.jsx)("div",{className:"ml-auto",children:(0,r.jsxs)("p",{className:"fz-13",children:["\xa9 2023 Geekfolio is Proudly Powered by"," ",(0,r.jsxs)("span",{className:"underline",children:[" ",(0,r.jsx)("a",{href:n.a,children:n.v})]})]})})})})})})})]})})}},74211:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return f}});var r=t(85893),n=t(67294),i=t(9008),l=t.n(i),c=t(28235),a=t(98876),o=t(29066),d=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(o.Z,{})})},u=t(64300),h=t(21453);function m(){return(0,n.useEffect)(()=>(document.body.classList.add("main-bg"),()=>document.body.classList.remove("main-bg")),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l(),{children:(0,r.jsx)("title",{children:"Createabit - Grocery"})}),(0,r.jsx)(a.Z,{}),(0,r.jsx)(h.default,{}),(0,r.jsx)("main",{children:(0,r.jsx)(d,{})}),(0,r.jsx)(u.default,{})]})}m.getLayout=e=>(0,r.jsx)(c.Z,{children:e});var f=m},11163:function(e,s,t){e.exports=t(57875)},5821:function(e){"use strict";e.exports=JSON.parse('[{"id":1,"number":"01","type":"Design","title":"Everybody sunshine","image":"/dark/assets/imgs/works/full/1.jpg"},{"id":2,"number":"02","type":"Branding","title":"Who Dares Wins","image":"/dark/assets/imgs/works/full/2.jpg"},{"id":3,"number":"03","type":"Branding","title":"Fountain Studio","image":"/dark/assets/imgs/works/full/3.jpg"},{"id":4,"number":"04","type":"Photography","title":"April willow flower","image":"/dark/assets/imgs/works/full/4.jpg"},{"id":5,"number":"05","type":"Design","title":"Step Over","image":"/dark/assets/imgs/works/full/1.jpg"},{"id":6,"number":"06","type":"ART Design","title":"Snowy Zero","image":"/dark/assets/imgs/works/full/2.jpg"},{"id":7,"number":"07","type":"Design","title":"Fun Bike","image":"/dark/assets/imgs/works/full/3.jpg"},{"id":8,"number":"08","type":"Apps","title":"Mobile Apps","image":"/dark/assets/imgs/works/full/4.jpg"}]')},37513:function(e){"use strict";e.exports=JSON.parse('{"v":"ThemesCamp","a":"https://themeforest.net/user/themescamp"}')}},function(e){e.O(0,[1664,1453,9774,2888,179],function(){return e(e.s=26922)}),_N_E=e.O()}]);