(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[893],{84656:function(e,t,r){Promise.resolve().then(r.bind(r,60490))},60490:function(e,t,r){"use strict";r.d(t,{UserFeedbacks:function(){return u}});var n=r(57437),s=r(2265),l=r(2593),i=r(35123),a=function(e){let{feedback:t}=e,{id:r,title:s,description:l,createdby:a,createdat:c,viewed:o,isanon:d}=t;return(0,n.jsxs)("div",{className:"mb-4 w-4/6 rounded-md bg-white p-4 shadow-lg",children:[(0,n.jsxs)("div",{className:"mb-2 flex items-center justify-between",children:[(0,n.jsx)("h3",{className:"text-lg font-semibold",children:s}),(0,n.jsx)("p",{className:"text-m rounded-lg bg-slate-200 px-2 py-1 text-black shadow-md",children:d?"Anonymous":a})]}),(0,n.jsx)("p",{className:"mb-2 text-base",children:l}),(0,n.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,n.jsx)("p",{className:"text-sm text-gray-500",children:(0,i.i)(c)}),!o&&(0,n.jsx)("p",{className:"rounded-3xl bg-rose-500 px-2 py-1 text-white",children:"Not Viewed"})||(0,n.jsx)("p",{className:"rounded-3xl bg-green-500 px-2 py-1 text-white",children:"Viewed"})]})]})},c=r(73930),o=r(26615);let d=(e,t,r)=>{let n=(t-1)*r;return e.slice(n,n+r)};function u(e){let{feedbacks:t}=e,[r,i]=(0,s.useState)(1),[u,x]=(0,s.useState)(t),[h,f]=(0,s.useState)(t),[m,g]=(0,s.useState)([]);(0,s.useEffect)(()=>{g(d(u,r,5))},[]),(0,s.useEffect)(()=>{g(()=>d(h,r,5))},[r]);let p=e=>{let t=e.target.id,n=[];"viewed"===t?console.log(n=u.filter(e=>e.viewed)):"not-viewed"===t?n=u.filter(e=>!e.viewed):"all"===t&&(n=u),g(d(n,r,5))};return(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,n.jsx)(l.Z,{page:2}),(0,n.jsxs)("div",{className:"w-4/6 flex flex-row",children:[(0,n.jsx)(o.Z,{onChangeCallback:e=>{if(console.log(e),0===e.trim().length){g(()=>d(u,r,5));return}let t=u.filter(t=>t.title.toLowerCase().includes(e.toLowerCase()));console.log("arr ->",t),f(t),g(()=>d(h,r,5))},placeholder:"Search by Title"}),(0,n.jsxs)("ul",{className:"flex flex-row gap-2 ml-auto",children:[(0,n.jsx)("li",{className:"border-2 flex justify-center items-center border-sky-300 px-4 rounded-full hover:bg-sky-500 hover:text-white transition-all hover:cursor-pointer",onClick:p,id:"all",children:"All"}),(0,n.jsx)("li",{className:"border-2 flex justify-center items-center border-green-300 px-4 rounded-full hover:bg-green-500 hover:border-black hover:text-white transition-all hover:cursor-pointer",onClick:p,id:"viewed",children:"Viewed"}),(0,n.jsx)("li",{className:"border-2 flex justify-center items-center border-rose-300 px-4 rounded-full hover:bg-rose-500 hover:border-black hover:text-white transition-all hover:cursor-pointer",onClick:p,id:"not-viewed",children:"Not Viewed"})]})]}),m.map((e,t)=>(0,n.jsx)(a,{feedback:e},t)),(0,n.jsx)(c.Z,{items:h.length,currentPage:r,pageSize:5,onPageChange:e=>{i(e)}})]})}},2593:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(57437),s=r(87138);function l(e){let{page:t}=e,r="inline-block my-4 text-center px-4 py-2 bg-slate-300 transition duration-150 ease-linear hover:bg-slate-400",l="inline-block my-4 text-center px-4 py-2 bg-slate-600 text-white";return(0,n.jsxs)("div",{className:"py-2 flex flex-row w-full items-center justify-center bg-zinc-200 sticky top-0 mb-2",children:[(0,n.jsx)(s.default,{href:"/user/feedback",className:1===t?l:r,children:"Feedback Form"}),(0,n.jsx)(s.default,{href:"/user/feedback/[id]",as:"/user/feedback/".concat(1),className:2===t?l:r,children:"My Feedbacks"})]})}},26615:function(e,t,r){"use strict";var n=r(57437),s=r(2265);t.Z=e=>{let{onChangeCallback:t,placeholder:r}=e,[l,i]=(0,s.useState)("");return(0,n.jsxs)("div",{className:"flex items-center gap-2 border-2 border-gray-300 rounded-full overflow-hidden px-2 has-[:focus]:border-sky-300",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"25px",height:"25px",children:(0,n.jsx)("path",{d:"M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"})}),(0,n.jsx)("input",{className:" bg-white h-[2rem] px-5 rounded-lg text-sm focus:outline-none w-full",type:"search",value:l,onChange:e=>{let r=e.target.value;i(r),t&&t(r)},name:"search",placeholder:r})]})}},73930:function(e,t,r){"use strict";var n=r(57437),s=r(17278),l=r.n(s);t.Z=e=>{let{items:t,pageSize:r,currentPage:s,onPageChange:i}=e;console.log("items -> ",t);let a=Math.ceil(t/r);if(1===a)return null;let c=Array.from({length:a},(e,t)=>t+1);return(0,n.jsx)("div",{children:(0,n.jsx)("ul",{className:l().pagination,children:c.map(e=>(0,n.jsx)("li",{className:e===s?l().pageItemActive:l().pageItem,onClick:()=>i(e),children:(0,n.jsx)("a",{className:l().pageLink,children:e})},e))})})}},35123:function(e,t,r){"use strict";r.d(t,{i:function(){return n}});let n=e=>{if(!e)return"";let t=new Date(e),r=t.getUTCMonth()+1,n=t.getUTCFullYear(),s=t.getUTCDate(),l=["January","February","March","April","May","June","July","August","September","October","November","December"][r-1];return"".concat(l," ").concat(s,", ").concat(n)}},17278:function(e){e.exports={container:"Pagination_container__K2pXc",pagination:"Pagination_pagination__YO7tt",pageLink:"Pagination_pageLink__Dbtuc",pageItem:"Pagination_pageItem__S74oz",pageItemActive:"Pagination_pageItemActive__tUfHZ"}}},function(e){e.O(0,[180,138,971,23,744],function(){return e(e.s=84656)}),_N_E=e.O()}]);