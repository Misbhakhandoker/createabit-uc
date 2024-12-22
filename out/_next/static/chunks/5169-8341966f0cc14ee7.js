"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5169],{45169:function(e,s,l){l.r(s);var a=l(85893),c=l(9944),i=l(5551),n=l(41664),r=l.n(n),t=l(11163),d=l(67294);s.default=function(e){let{lightMode:s,alwaysDark:l,darkOnScroll:n}=e;(0,t.useRouter)();let o=localStorage.getItem("userId"),{data:h,isLoading:m,isError:x,error:u}=(0,i.G1)(o),[j,g]=(0,d.useState)([]);(0,d.useEffect)(()=>{x?console.error("Error fetching cart data:",u):!m&&h&&h.data&&g(h.data)},[h,m,x,u]);let N=(0,c.jl)();function v(e){document.querySelectorAll("ul.main-menu li").forEach(e=>{e.classList.add("hoverd")}),e.currentTarget.classList.remove("hoverd")}function p(){document.querySelectorAll("ul.main-menu li").forEach(e=>e.classList.remove("hoverd"))}function f(e){let s=e.currentTarget.querySelector(".sub-menu");s&&(s.classList.contains("sub-open")?(document.querySelectorAll(".sub-menu").forEach(e=>{e.classList.remove("sub-open"),e.style.maxHeight="0",e.previousElementSibling.children[0].classList.remove("dopen")}),s.classList.remove("sub-open"),s.style.maxHeight="0",s.previousElementSibling.children[0].classList.remove("dopen")):s.classList.contains("sub-open")||(document.querySelectorAll(".sub-menu").forEach(e=>{e.classList.remove("sub-open"),e.style.maxHeight="0",e.previousElementSibling.children[0].classList.remove("dopen")}),s.classList.add("sub-open"),s.style.maxHeight="400px",s.previousElementSibling.children[0].classList.add("dopen")))}return(0,d.useEffect)(()=>{if(n){let e=document.querySelector("#navi");window.addEventListener("scroll",()=>{window.scrollY>500?(e.className="topnav dark change nav-scroll",e.querySelector("img").src="/dark/assets/imgs/logo-dark.png"):(e.className="topnav",e.querySelector("img").src="/dark/assets/imgs/logo-light.png")})}},[n]),(0,a.jsx)("div",{className:"hamenu",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",style:{marginTop:"80px"},children:[(0,a.jsxs)("div",{className:"col-lg-2",children:[(0,a.jsx)("div",{className:"menu-text",style:{marginTop:"65px"},children:(0,a.jsx)("div",{className:"text",children:(0,a.jsx)("h2",{children:"Menu"})})}),(0,a.jsx)("div",{id:"navi",className:"topnav ".concat(l&&"navlit"),children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"logo icon-img-120",children:(0,a.jsx)(r(),{href:"/light/home-creative-agency/",children:(0,a.jsx)("img",{src:"/dark/assets/imgs/logo-dark.png",alt:""})})}),j.length&&N>0&&(0,a.jsxs)("div",{className:"addtocart",children:[(0,a.jsx)(r(),{href:"/light/shop-cart",className:"icon ml-30",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1.8em",viewBox:"0 0 576 512",fill:"black",children:(0,a.jsx)("path",{d:"M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c-2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"})})}),(0,a.jsx)("p",{className:" notification",children:null==j?void 0:j.length})]}),(0,a.jsxs)("div",{className:"cursor-pointer menu-icon text-dark mobile_navbar mr-10",onClick:function(e){let a=document.querySelector(".hamenu"),c=document.querySelector("#navi");e.currentTarget.classList.contains("open")?(e.currentTarget.classList.remove("open"),null==a||a.classList.remove("open"),a.style.left="-100%",s&&!l&&(c.classList.remove("navlit"),c.querySelector("img").src="/dark/assets/imgs/logo-light.png")):(e.currentTarget.classList.add("open"),null==a||a.classList.add("open"),a.style.left=0,s&&!l&&(c.classList.add("navlit"),c.querySelector("img").src="/dark/assets/imgs/logo-dark.png"))},children:[(0,a.jsx)("span",{className:"icon",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 448 512",children:(0,a.jsx)("path",{d:"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"})})}),(0,a.jsx)("span",{className:"text",children:(0,a.jsx)("span",{className:"word",children:"Menu"})})]}),(0,a.jsx)("div",{className:"ml-50 ",children:(0,a.jsx)(r(),{href:"/dark/home-creative-agency/",className:"classic butn butn-md butn-bord radius-30",style:{marginTop:"-5px"},children:(0,a.jsx)("span",{className:"word",children:"Dark Mode"})})})]})})]}),(0,a.jsx)("div",{className:"col-lg-5",children:(0,a.jsx)("div",{className:"menu-links",children:(0,a.jsxs)("ul",{className:"main-menu rest",children:[(0,a.jsx)("li",{onMouseEnter:v,onMouseLeave:p,children:(0,a.jsx)("div",{className:"o-hidden",children:(0,a.jsx)(r(),{href:"/light/home-creative-agency/",className:"link",children:(0,a.jsx)("span",{className:"fill-text","data-text":"Home",children:"Home"})})})}),(0,a.jsx)("li",{onMouseEnter:v,onMouseLeave:p,children:(0,a.jsx)("div",{className:"o-hidden",children:(0,a.jsx)(r(),{href:"/light/page-abouts/",className:"link",children:(0,a.jsx)("span",{className:"fill-text","data-text":"Who We Are",children:"Who We Are"})})})}),(0,a.jsxs)("li",{onMouseEnter:v,onMouseLeave:p,onClick:f,children:[(0,a.jsx)("div",{className:"o-hidden",children:(0,a.jsxs)("div",{className:"cursor-pointer link dmenu",children:[(0,a.jsx)(r(),{href:"/light/page-product/",className:"",children:(0,a.jsx)("span",{className:"fill-text ","data-text":"Product Solution",children:"Product Solution"})}),(0,a.jsx)("i",{})]})}),(0,a.jsx)("div",{className:"sub-menu",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"text-black",children:(0,a.jsx)(r(),{href:"/light/page-product-category1/",className:"sub-link ",children:"Dynamic Digital Products"})}),(0,a.jsx)("li",{className:"text-black",children:(0,a.jsx)(r(),{href:"/light/page-product-category2/",className:"sub-link",children:"Intelligent TECH Products"})}),(0,a.jsx)("li",{className:"text-black",children:(0,a.jsx)(r(),{href:"/light/page-product-category3/",className:"sub-link",children:"INTERACTIVE WOW PRODUCTION"})})]})})]}),(0,a.jsxs)("li",{onMouseEnter:v,onMouseLeave:p,onClick:f,children:[(0,a.jsx)("div",{className:"o-hidden",children:(0,a.jsxs)("div",{className:"cursor-pointer link dmenu",children:[(0,a.jsx)(r(),{href:"/light/page-services/",className:"",children:(0,a.jsx)("span",{className:"fill-text","data-text":"Service",children:"Service"})}),(0,a.jsx)("i",{})]})}),(0,a.jsx)("div",{className:"sub-menu",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"text-black",children:(0,a.jsx)(r(),{href:"/light/page-service1/",className:"sub-link",children:"WEBSITE DEVELOPMENT"})}),(0,a.jsx)("li",{className:"text-black",children:(0,a.jsx)(r(),{href:"/light/page-service2/",className:"sub-link",children:"WEB APPLICATION"})}),(0,a.jsx)("li",{className:"text-black",children:(0,a.jsx)(r(),{href:"/light/page-service3/",className:"sub-link",children:"MOBILE APPS DEVELOPMENT"})}),(0,a.jsx)("li",{className:"text-black",children:(0,a.jsx)(r(),{href:"/light/page-service4/",className:"sub-link",children:"DIGITAL MARKETING & SEO"})}),(0,a.jsx)("li",{className:"text-black",children:(0,a.jsx)(r(),{href:"/light/page-service5/",className:"sub-link",children:"GRAPHICS DESIGN & PRINTING"})}),(0,a.jsx)("li",{className:"text-black",children:(0,a.jsx)(r(),{href:"/light/page-service6/",className:"sub-link",children:"VIDEO & ANIMATION"})})]})})]}),(0,a.jsx)("li",{onMouseEnter:v,onMouseLeave:p,children:(0,a.jsx)("div",{className:"o-hidden",children:(0,a.jsx)(r(),{href:"/light/showcase-interactive-center-horizontal/",className:"link",children:(0,a.jsx)("span",{className:"fill-text","data-text":"Software",children:"Software"})})})}),(0,a.jsx)("li",{onMouseEnter:v,onMouseLeave:p,children:(0,a.jsx)("div",{className:"o-hidden",children:(0,a.jsx)(r(),{href:"/light/login/",className:"link",children:(0,a.jsx)("span",{className:"fill-text","data-text":"Login",children:"Login"})})})}),(0,a.jsx)("li",{onMouseEnter:v,onMouseLeave:p,children:(0,a.jsx)("div",{className:"o-hidden",children:(0,a.jsx)(r(),{href:"/dark/home-creative-agency/",className:"link",children:(0,a.jsx)("span",{className:"fill-text classic_btn","data-text":"Classic Mode",children:"Dark Mode"})})})})]})})}),(0,a.jsx)("div",{className:"col-lg-3 d-flex align-items-end",children:(0,a.jsxs)("div",{className:"cont-info full-width",children:[(0,a.jsxs)("div",{className:"item",children:[(0,a.jsx)("h5",{className:"mb-15",children:"Get In Touch"}),(0,a.jsx)("p",{children:"541 Melville Geek, Palo Alto, CA 94301"}),(0,a.jsx)("p",{className:"mt-5 mb-5 underline main-color",children:(0,a.jsx)("a",{href:"#0",children:"+1 840 841 25 69"})}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"#0",children:"GeekFolio_website@gmail.com"})})]}),(0,a.jsx)("div",{className:"search-form",children:(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("input",{type:"text",name:"search",placeholder:"Search"}),(0,a.jsx)("button",{children:(0,a.jsx)("span",{className:"pe-7s-search"})})]})}),(0,a.jsxs)("ul",{className:"rest social-text d-flex mt-50 fz-13",children:[(0,a.jsx)("li",{className:"mr-20",children:(0,a.jsx)("a",{href:"#0",className:"hover-this",children:(0,a.jsx)("span",{className:"hover-anim",children:"Facebook"})})}),(0,a.jsx)("li",{className:"mr-20",children:(0,a.jsx)("a",{href:"#0",className:"hover-this",children:(0,a.jsx)("span",{className:"hover-anim",children:"Twitter"})})}),(0,a.jsx)("li",{className:"mr-20",children:(0,a.jsx)("a",{href:"#0",className:"hover-this",children:(0,a.jsx)("span",{className:"hover-anim",children:"LinkedIn"})})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#0",className:"hover-this",children:(0,a.jsx)("span",{className:"hover-anim",children:"Instagram"})})})]})]})})]})})})}}}]);