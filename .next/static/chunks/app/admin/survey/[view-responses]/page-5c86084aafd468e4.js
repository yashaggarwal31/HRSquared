(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[948],{76939:function(e,t,r){Promise.resolve().then(r.bind(r,3049))},3049:function(e,t,r){"use strict";r.d(t,{default:function(){return g}});var a=r(57437),s=r(2265),n=r(26615),l=r(35123),i=r(87138),o=r(73930);let c=(e,t,r)=>{let a=(t-1)*r;return e.slice(a,a+r)};function d(e){let{surveyResponseData:t,surveyID:r,title:n,formFields:d}=e,u=n.split("%!@");n=u[0],u[1];let[x,m]=(0,s.useState)(1),[b,g]=(0,s.useState)(t),[f,p]=(0,s.useState)([]);return(0,s.useEffect)(()=>{g(t),m(1)},[t]),(0,s.useEffect)(()=>{p(c(t,x,11))},[t]),(0,s.useEffect)(()=>{let e=[];console.log("next page",e=c(t,x,11)),p(e)},[x]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:" p-6 px-0 pb-2 pt-0",children:[(0,a.jsxs)("table",{className:"w-full min-w-[640px] table-auto",children:[(0,a.jsx)("thead",{className:" text-base text-sky-900",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"border-blue-gray-50 border-b px-5 py-3 text-left",children:(0,a.jsx)("p",{className:"text-blue-gray-400 block font-sans  font-bold uppercase antialiased",children:"Survey Title"})}),(0,a.jsx)("th",{className:"border-blue-gray-50 border-b px-5 py-3 text-center",children:(0,a.jsx)("p",{className:"text-blue-gray-400 block font-sans  font-bold uppercase antialiased",children:"Response By"})}),(0,a.jsx)("th",{className:"border-blue-gray-50 border-b px-5 py-3 text-center",children:(0,a.jsx)("p",{className:"text-blue-gray-400 block font-sans  font-bold uppercase antialiased",children:"Response Date"})}),(0,a.jsx)("th",{})]})}),(0,a.jsx)("tbody",{children:f.map((e,t)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"border-blue-gray-50 border-b px-5 py-3 text-left",children:(0,a.jsx)("p",{className:"text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased",children:n})}),(0,a.jsx)("td",{className:"border-blue-gray-50 border-b px-5 py-3 text-center",children:(0,a.jsx)("p",{className:"text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased",children:e.username})}),(0,a.jsx)("td",{className:"border-blue-gray-50 border-b px-5 py-3 text-center",children:(0,a.jsx)("p",{className:"text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased",children:(0,l.i)(e.createdat)})}),(0,a.jsx)("td",{className:"border-blue-gray-50 border-b px-5 py-3 text-center",children:(0,a.jsx)("p",{className:"text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased",children:(0,a.jsx)(i.default,{href:"".concat(r,"/").concat(e.id),children:(0,a.jsx)("button",{children:"View Response"})})})})]},t))})]}),(0,a.jsx)(o.Z,{items:b.length,currentPage:x,pageSize:11,onPageChange:e=>{m(e)}})]})})}var u=r(21413),x=e=>{let{link:t}=e,[r,n]=(0,s.useState)(!1),l=async()=>{try{await navigator.clipboard.writeText(t),n(!0),setTimeout(()=>n(!1),2e3)}catch(e){console.error("Failed to copy: ",e)}};return(0,a.jsx)("div",{children:(0,a.jsx)("button",{onClick:l,children:r?"Copied!":"Copy"})})},m=e=>{let{link:t,title:r}=e;return(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("div",{className:"mb-2",children:(0,a.jsx)("label",{htmlFor:"website-url",className:" text-lg font-medium text-gray-900 dark:text-white text-center",children:"Share this survey"})}),(0,a.jsxs)("h4",{className:"mb-4 text-base font-medium text-green-600",children:[" ",r.split("%!@")[0]]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("span",{className:"flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg dark:bg-gray-600 dark:text-white dark:border-gray-600",children:"URL"}),(0,a.jsx)("div",{className:"relative w-full",children:(0,a.jsx)("input",{id:"website-url",type:"text","aria-describedby":"helper-text-explanation",className:"bg-gray-50 border border-e-0  border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500",value:t,readOnly:!0,disabled:!0})}),(0,a.jsx)("span",{className:"flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-blue-800 border border-gray-300 rounded-e-lg dark:bg-gray-600 dark:text-white dark:border-gray-600",children:(0,a.jsx)(x,{link:t})})]})]})};function b(e){let{surveyID:t,title:r}=e,s="".concat("https://hrsquared.exitest.com","/user/survey/").concat(t);return(0,a.jsx)("div",{className:"flex flex-col w-[100%]",children:(0,a.jsx)(m,{link:s,title:r})})}var g=function(e){let{surveyResponseData:t,surveyID:r,title:l,formFields:o}=e,[c,x]=(0,s.useState)([]);return(0,s.useEffect)(()=>{x(t)},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex justify-between relative mx-4 mt-2 mb-8",children:[(0,a.jsx)(n.Z,{onChangeCallback:e=>{x(t.filter(t=>t.username.toLowerCase().includes(e.toLowerCase())))},placeholder:"Search Records"}),(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsxs)(u.J2,{children:[(0,a.jsx)(u.xo,{className:"text-white bg-gradient-to-br from-sky-500 to-sky-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2",children:"Share"}),(0,a.jsx)(u.yk,{className:"w-[25rem]",children:(0,a.jsx)(b,{title:l,surveyID:r})})]}),(0,a.jsx)(i.default,{href:"download-responses/".concat(r),target:"_blank",className:"text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2",children:"Export Responses to Excel"})]})]}),(0,a.jsx)(d,{surveyResponseData:c,surveyID:r,title:l,formFields:o})]})}},26615:function(e,t,r){"use strict";var a=r(57437),s=r(2265);t.Z=e=>{let{onChangeCallback:t,placeholder:r}=e,[n,l]=(0,s.useState)("");return(0,a.jsxs)("div",{className:"flex items-center gap-2 border-2 border-gray-300 rounded-full overflow-hidden px-2 has-[:focus]:border-sky-300",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"25px",height:"25px",children:(0,a.jsx)("path",{d:"M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"})}),(0,a.jsx)("input",{className:" bg-white h-[2rem] px-5 rounded-lg text-sm focus:outline-none w-full",type:"search",value:n,onChange:e=>{let r=e.target.value;l(r),t&&t(r)},name:"search",placeholder:r})]})}},73930:function(e,t,r){"use strict";var a=r(57437),s=r(17278),n=r.n(s);t.Z=e=>{let{items:t,pageSize:r,currentPage:s,onPageChange:l}=e;console.log("items -> ",t);let i=Math.ceil(t/r);if(1===i)return null;let o=Array.from({length:i},(e,t)=>t+1);return(0,a.jsx)("div",{children:(0,a.jsx)("ul",{className:n().pagination,children:o.map(e=>(0,a.jsx)("li",{className:e===s?n().pageItemActive:n().pageItem,onClick:()=>l(e),children:(0,a.jsx)("a",{className:n().pageLink,children:e})},e))})})}},21413:function(e,t,r){"use strict";r.d(t,{J2:function(){return i},xo:function(){return o},yk:function(){return c}});var a=r(57437),s=r(2265),n=r(816),l=r(49354);let i=n.fC,o=n.xz,c=s.forwardRef((e,t)=>{let{className:r,align:s="center",sideOffset:i=4,...o}=e;return(0,a.jsx)(n.h_,{children:(0,a.jsx)(n.VY,{ref:t,align:s,sideOffset:i,className:(0,l.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...o})})});c.displayName=n.VY.displayName},35123:function(e,t,r){"use strict";r.d(t,{i:function(){return a}});let a=e=>{if(!e)return"";let t=new Date(e),r=t.getUTCMonth()+1,a=t.getUTCFullYear(),s=t.getUTCDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][r-1];return"".concat(n," ").concat(s,", ").concat(a)}},49354:function(e,t,r){"use strict";r.d(t,{cn:function(){return n}});var a=r(44839),s=r(96164);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,a.W)(t))}},17278:function(e){e.exports={container:"Pagination_container__K2pXc",pagination:"Pagination_pagination__YO7tt",pageLink:"Pagination_pageLink__Dbtuc",pageItem:"Pagination_pageItem__S74oz",pageItemActive:"Pagination_pageItemActive__tUfHZ"}}},function(e){e.O(0,[180,138,378,971,23,744],function(){return e(e.s=76939)}),_N_E=e.O()}]);