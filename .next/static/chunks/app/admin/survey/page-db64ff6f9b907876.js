(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[375],{10809:function(e,t,a){Promise.resolve().then(a.bind(a,69163))},69163:function(e,t,a){"use strict";a.d(t,{default:function(){return x}});var s,r,l=a(57437),n=a(2265),o=a(26615),c=a(87138),i=a(53751),d=a(73930);let u=(e,t,a)=>{let s=(t-1)*a;return e.slice(s,s+a)};function b(e){let{surveyData:t}=e,[a,s]=(0,n.useState)(1),[r,o]=(0,n.useState)(t),[b,x]=(0,n.useState)([]);return(0,n.useEffect)(()=>{o(t),s(1)},[t]),(0,n.useEffect)(()=>{x(u(t,a,11))},[t]),(0,n.useEffect)(()=>{let e=[];console.log("next page",e=u(t,a,11)),x(e)},[a]),(0,l.jsxs)("div",{className:" p-6 px-0 pb-2 pt-0 overflow-x-hidden",children:[(0,l.jsxs)("table",{className:"w-full min-w-[640px] table-auto pl-2 ml-2",children:[(0,l.jsx)("thead",{className:" text-base text-sky-900",children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{className:"border-blue-gray-50 border-b px-5 py-3 text-left",children:(0,l.jsx)("p",{className:"text-blue-gray-400 block font-sans  font-bold uppercase antialiased",children:"Survey Title"})}),(0,l.jsx)("th",{className:"border-blue-gray-50 border-b px-5 py-3 text-left",children:(0,l.jsx)("p",{className:"text-blue-gray-400 block font-sans  font-bold uppercase antialiased",children:"Survey Description"})}),(0,l.jsx)("th",{className:"border-blue-gray-50 border-b px-5 py-3 text-left",children:(0,l.jsx)("p",{className:"text-blue-gray-400 block font-sans  font-bold uppercase antialiased",children:"Belongs To"})}),(0,l.jsx)("th",{className:"border-blue-gray-50 border-b px-5 py-3 text-center",children:(0,l.jsx)("p",{className:"text-blue-gray-400 block font-sans  font-bold uppercase antialiased",children:"Created By"})}),(0,l.jsx)("th",{className:"border-blue-gray-50 border-b px-5 py-3 text-center",children:(0,l.jsx)("p",{className:"text-blue-gray-400 block font-sans  font-bold uppercase antialiased",children:"Created On"})}),(0,l.jsx)("th",{className:"border-blue-gray-50 border-b px-5 py-3 text-center",children:(0,l.jsx)("p",{className:"text-blue-gray-400 block font-sans  font-bold uppercase antialiased",children:"Closes On"})}),(0,l.jsx)("th",{})]})}),(0,l.jsx)("tbody",{children:b.map((e,t)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"border-blue-gray-50 border-b px-5 py-3 text-left",children:(0,l.jsx)("p",{className:"text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased",children:e.survey_title.split("%!@")[0]})}),(0,l.jsx)("td",{className:"border-blue-gray-50 border-b px-5 py-3 text-left",children:(0,l.jsx)("p",{className:"text-blue-gray-900 whitespace-nowrap overflow-hidden text-ellipsis block font-sans text-sm font-semibold leading-normal antialiased w-[8rem]",children:e.survey_title.split("%!@")[1]})}),(0,l.jsx)("td",{className:"border-blue-gray-50 border-b px-5 py-3 text-left",children:(0,l.jsx)("p",{className:"text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased",children:e.category?e.category:"Public"})}),(0,l.jsx)("td",{className:"border-blue-gray-50 border-b px-5 py-3 text-center",children:(0,l.jsx)("p",{className:"text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased",children:e.creator_name})}),(0,l.jsx)("td",{className:"border-blue-gray-50 border-b px-5 py-3 text-center",children:(0,l.jsx)("p",{className:"text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased",children:(0,i.I)(e.created_at)})}),(0,l.jsx)("td",{className:"border-blue-gray-50 border-b px-5 py-3 text-center",children:(0,l.jsx)("p",{className:"text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased",children:(0,i.I)(e.closes_at)})}),(0,l.jsx)("td",{className:"border-blue-gray-50 border-b px-5 py-3 text-center",children:(0,l.jsx)("p",{className:"text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased",children:(0,l.jsx)(c.default,{href:"survey/".concat(e.survey_id),children:(0,l.jsx)("button",{className:"mb-2 me-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-4 w-[100%] py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800",children:"View Responses"})})})})]},t))})]}),(0,l.jsx)(d.Z,{items:r.length,currentPage:a,pageSize:11,onPageChange:e=>{s(e)}})]})}(s=r||(r={}))[s.All=0]="All",s[s.Today=1]="Today",s[s.OneWeek=2]="OneWeek",s[s.OneMonth=3]="OneMonth",s[s.OneYear=4]="OneYear";var x=function(e){let{surveyData:t}=e,[a,s]=(0,n.useState)([]),[r,i]=(0,n.useState)(0),[d,u]=(0,n.useState)(),[x,g]=(0,n.useState)(""),[p,m]=(0,n.useState)([]);(0,n.useEffect)(()=>{s(t)},[]);let f=e=>{let t=e.target.value;i(t),console.log("Selection Value",t)};(0,n.useEffect)(()=>{h()},[r]);let h=()=>{let e=new Date;console.log("dropwdownValue is ",r,0,typeof r,"number");let t=parseInt(r);switch(console.log(0===r),t){case 0:u(new Date(e.getFullYear()-100,e.getMonth(),e.getDate())),console.log("all");break;case 1:u(new Date(e.getFullYear(),e.getMonth(),e.getDate()-1));break;case 2:u(new Date(e.getFullYear(),e.getMonth(),e.getDate()-7));break;case 3:u(new Date(e.getFullYear(),e.getMonth()-1,e.getDate()));break;case 4:u(new Date(e.getFullYear()-1,e.getMonth(),e.getDate()));break;default:console.log("The default case for dropdown was called")}};(0,n.useEffect)(()=>{y()},[d]);let y=()=>{m(t.filter(e=>{let t=new Date(e.created_at);return!d||d<t}))},j=e=>{g(e),s(p.filter(t=>t.survey_title.split("%!@")[0].toLowerCase().includes(e.toLowerCase())||t.survey_title.split("%!@")[1].toLowerCase().includes(e.toLowerCase())||t.creator_name.trim().toLowerCase().includes(e.toLowerCase())))};return(0,n.useEffect)(()=>{j(x)},[p]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex justify-between items-center relative mx-4 mt-2 mb-8",children:[(0,l.jsx)(o.Z,{onChangeCallback:j,placeholder:"Search Records"}),(0,l.jsxs)("div",{className:"flex justify-center items-center gap-2",children:[(0,l.jsx)("label",{htmlFor:"my-select",className:"font-medium text-gray-700",children:"Sort by:"}),(0,l.jsxs)("select",{id:"my-select",className:"w-[180px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",onChange:e=>f(e),children:[(0,l.jsx)("option",{value:0,children:"All Time"}),(0,l.jsx)("option",{value:1,children:"Today"}),(0,l.jsx)("option",{value:2,children:"Last one week"}),(0,l.jsx)("option",{value:3,children:"Last one month"}),(0,l.jsx)("option",{value:4,children:"Last one year"})]}),(0,l.jsx)(c.default,{href:"survey/create-survey",className:"text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2",children:"Create a new Survey"})]})]}),(0,l.jsx)(b,{surveyData:a})]})}},26615:function(e,t,a){"use strict";var s=a(57437),r=a(2265);t.Z=e=>{let{onChangeCallback:t,placeholder:a}=e,[l,n]=(0,r.useState)("");return(0,s.jsxs)("div",{className:"flex items-center gap-2 border-2 border-gray-300 rounded-full overflow-hidden px-2 has-[:focus]:border-sky-300",children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"25px",height:"25px",children:(0,s.jsx)("path",{d:"M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"})}),(0,s.jsx)("input",{className:" bg-white h-[2rem] px-5 rounded-lg text-sm focus:outline-none w-full",type:"search",value:l,onChange:e=>{let a=e.target.value;n(a),t&&t(a)},name:"search",placeholder:a})]})}},73930:function(e,t,a){"use strict";var s=a(57437),r=a(17278),l=a.n(r);t.Z=e=>{let{items:t,pageSize:a,currentPage:r,onPageChange:n}=e;console.log("items -> ",t);let o=Math.ceil(t/a);if(1===o)return null;let c=Array.from({length:o},(e,t)=>t+1);return(0,s.jsx)("div",{children:(0,s.jsx)("ul",{className:l().pagination,children:c.map(e=>(0,s.jsx)("li",{className:e===r?l().pageItemActive:l().pageItem,onClick:()=>n(e),children:(0,s.jsx)("a",{className:l().pageLink,children:e})},e))})})}},53751:function(e,t,a){"use strict";a.d(t,{I:function(){return s}});let s=e=>{if(!e)return"";let t=new Date(e),a=t.getTimezoneOffset(),s=new Date(t.getTime()+6e4*(a+330)),r=s.getMonth()+1,l=s.getFullYear(),n=s.getDate(),o=s.getHours(),c=s.getMinutes(),i=s.getSeconds(),d=["January","February","March","April","May","June","July","August","September","October","November","December"][r-1],u="".concat(d," ").concat(n,", ").concat(l),b="".concat(String(o).padStart(2,"0"),":").concat(String(c).padStart(2,"0"),":").concat(String(i).padStart(2,"0")," IST");return"".concat(u," ").concat(b)}},17278:function(e){e.exports={container:"Pagination_container__K2pXc",pagination:"Pagination_pagination__YO7tt",pageLink:"Pagination_pageLink__Dbtuc",pageItem:"Pagination_pageItem__S74oz",pageItemActive:"Pagination_pageItemActive__tUfHZ"}}},function(e){e.O(0,[180,138,971,23,744],function(){return e(e.s=10809)}),_N_E=e.O()}]);