(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7064)}])},7064:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var s=n(5893),i=n(5459),r=n.n(i),a=(n(7294),n(2284));var l=function(e){var t=e.children;return(0,s.jsx)("div",{className:"flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10",children:t})};var o=function(){return(0,s.jsx)(a.Z,{children:(0,s.jsxs)(l,{children:[(0,s.jsxs)("div",{className:"flex flex-col space-y-8 pt-20 lg:w-1/2",children:[(0,s.jsx)("h1",{className:"text-6xl md:text-6xl ",children:"We build digital products"}),(0,s.jsx)("div",{className:"text-2xl md:text-4xl inline",children:(0,s.jsx)(r(),{options:{strings:["Mobile apps","Responsive websites","E-commerce stores","WordPress blogs","Landing pages","Corporate portals"],loop:!0,autoStart:!0,delay:20,deleteSpeed:10}})})]}),(0,s.jsx)("img",{src:"/illustrations/hero.svg",className:"lg:w-1/2"})]})})},c=n(3648),d=n(8849),m=n.n(d),u=n(1664),x=n.n(u);var h=function(e){return(0,s.jsx)(x(),{href:e.url,children:(0,s.jsxs)("div",{className:"bg-slate-800 hover:bg-slate-700 flex flex-col items-center rounded-lg p-10 lg:w-1/3 text-center cursor-pointer",children:[(0,s.jsx)(m(),{path:e.icon,title:e.title,size:2.5}),(0,s.jsx)("h3",{children:e.title}),(0,s.jsx)("p",{className:"text-base",children:e.description})]})})};var p=function(e){return(0,s.jsx)("section",{id:e.id,className:"space-y-8 py-20",children:e.children})};var g=function(){return(0,s.jsx)(p,{id:"About",children:(0,s.jsxs)(a.Z,{children:[(0,s.jsx)("h2",{children:"Our Services"}),(0,s.jsxs)(l,{children:[(0,s.jsx)(h,{icon:c.PPR,title:"Product Management",description:"Vision, strategy and roadmaps centered on outcomes",url:"/services/product-management"}),(0,s.jsx)(h,{icon:c.bBQ,title:"UX Design",description:"Prototype experiences in hours and days (not just pretty UI)",url:"/services/ux-design"}),(0,s.jsx)(h,{icon:c.GwV,title:"Software Development",description:"Develop in rapid vertical slices following agile methodologies",url:"/services/software-development"})]})]})})};var f=function(e){var t=e.children,n=200;return(0,s.jsxs)("div",{className:"flex flex-row space-x-5",children:[(0,s.jsx)("button",{onClick:function(){document.getElementById("carousel").scrollBy({left:-n,behavior:"smooth"})},className:"hidden lg:inline",children:(0,s.jsx)(m(),{path:c.J3k,size:2.5})}),(0,s.jsx)("span",{className:"flex flex-row space-x-5 md:space-x-10 no-scrollbar overflow-auto",id:"carousel",children:t}),(0,s.jsx)("button",{onClick:function(){document.getElementById("carousel").scrollBy({left:n,behavior:"smooth"})},className:"hidden lg:inline",children:(0,s.jsx)(m(),{path:c.aIO,size:2.5})})]})};var j=function(e){return(0,s.jsxs)("div",{className:" bg-slate-800 hover:bg-slate-700 rounded-lg p-10 max-w-md min-w-[90%] sm:min-w-[66%] md:min-w-[50%] lg:min-w-[40%] xl:min-w-[25%] cursor-pointer ",onClick:function(){return t=e.url,void window.open(t,"_blank");var t},children:[(0,s.jsx)("img",{src:e.imagePath,title:e.title,className:"rounded-lg w-full"}),(0,s.jsx)("h2",{children:e.title}),(0,s.jsx)("p",{className:"",children:e.caption})]})};var w=function(){return(0,s.jsxs)(p,{id:"Projects",children:[(0,s.jsx)("h2",{className:"text-center",children:"Showcase"}),(0,s.jsxs)(f,{children:[(0,s.jsx)(j,{title:"Tend",caption:"Tend is a mindfulness and meditation app aimed at a Gen-Z audience",imagePath:"/Tend.png",url:"https://www.thetendapp.com/"}),(0,s.jsx)(j,{title:"HandDeco",caption:"HandDeco is a handmade and custom embroidery start-up operating in Switzerland.",imagePath:"/HandDeco.jpeg",url:"https://www.handdeco.com/"}),(0,s.jsx)(j,{title:"Virgin Red",caption:"Virgin Red is a loyalty and rewards offering for customers of the Virgin Group.",imagePath:"/VirginRed.png",url:"https://www.virgin.com/virgin-red"}),(0,s.jsx)(j,{title:"Student Beans",caption:"Student Beans is a market leading student discount and rewards platform.",imagePath:"/StudentBeans.png",url:"https://www.studentbeans.com/uk"})]})]})};window.addEventListener("load",(function(){var e=document.getElementById("contact-form"),t=document.getElementById("Submit");e.addEventListener("submit",(function(n){n.preventDefault();var s=new FormData(e),i=n.target.action;t.disabled=!0,t.innerText="Sending...",fetch(i,{method:"POST",body:s,mode:"no-cors"}).then((function(){alert("Thanks, we'll get back to you soon!"),e.reset(),t.disabled=!1,t.innerText="Send"}))}))}));var v=function(){return(0,s.jsxs)("form",{action:"https://script.google.com/macros/s/AKfycbzeqJfpQc3ckStHuiF2bOGZJxEj8QC0z_k56HmUn3RvxKxVNH0-ncpOFQPIMvrHIHYMYQ/exec",method:"post",className:"flex flex-col w-full max-w-2xl",id:"contact-form",children:[(0,s.jsx)("label",{htmlFor:"name",children:"Your Name"}),(0,s.jsx)("input",{type:"text",id:"Name",name:"Name",placeholder:"Barry Allen",required:!0,className:"p-3 mb-5 mt-1 bg-slate-800 rounded-lg"}),(0,s.jsx)("label",{htmlFor:"email",children:"Your email address"}),(0,s.jsx)("input",{type:"email",id:"Email",name:"Email",placeholder:"name@example.com",required:!0,className:"p-3 mb-5 mt-1 bg-slate-800 rounded-lg"}),(0,s.jsx)("label",{htmlFor:"message",children:"Your message"}),(0,s.jsx)("textarea",{id:"Message",name:"Message",placeholder:"My exciting product idea..",rows:4,required:!0,className:"p-3 mb-5 mt-1 bg-slate-800 rounded-lg resize-none"}),(0,s.jsx)("button",{id:"Submit",type:"submit",className:"p-3 bg-slate-700 w-full max-w-xs rounded-lg justify-center self-center",children:"Send"})]})};var b=function(){return(0,s.jsx)(p,{id:"Contact",children:(0,s.jsxs)(a.Z,{children:[(0,s.jsx)("h2",{className:"text-center",children:"Contact Us"}),(0,s.jsxs)("p",{className:"text-center",children:["Want to work with us on the next exciting product? Fill in the details or email at",(0,s.jsx)("a",{className:"font-bold text-green-600 ",href:"mailto:hello@zero-1.studio",children:" hello@zero-1.studio"})]}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(v,{})})]})})},N=n(5),y={title:"Digital design and development agency"};function k(){return(0,s.jsxs)(N.T,{meta:y,children:[(0,s.jsx)(o,{}),(0,s.jsx)(g,{}),(0,s.jsx)(w,{}),(0,s.jsx)(b,{})]})}}},function(e){e.O(0,[702,10,459,5,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);