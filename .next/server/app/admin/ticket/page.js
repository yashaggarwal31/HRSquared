(()=>{var e={};e.id=394,e.ids=[394],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},35900:e=>{"use strict";e.exports=require("pg")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},6005:e=>{"use strict";e.exports=require("node:crypto")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},84420:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>f,originalPathname:()=>u,pages:()=>o,routeModule:()=>b,tree:()=>l}),s(58034),s(9457),s(32029),s(35866);var a=s(23191),r=s(88716),d=s(37922),i=s.n(d),c=s(95231),n={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>c[e]);s.d(t,n);let l=["",{children:["admin",{children:["ticket",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,58034)),"C:\\Users\\dhgupta\\Desktop\\HRSquared\\src\\app\\admin\\ticket\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,9457)),"C:\\Users\\dhgupta\\Desktop\\HRSquared\\src\\app\\admin\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,32029)),"C:\\Users\\dhgupta\\Desktop\\HRSquared\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["C:\\Users\\dhgupta\\Desktop\\HRSquared\\src\\app\\admin\\ticket\\page.tsx"],u="/admin/ticket/page",f={require:s,loadChunk:()=>Promise.resolve()},b=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/admin/ticket/page",pathname:"/admin/ticket",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},51090:(e,t,s)=>{let a={"06df5ce421b1d44c2075e400366042d4a3f9ada1":()=>Promise.resolve().then(s.bind(s,24871)).then(e=>e.getAssignedTickets),"0fe6fd47ae6e7a9c965696563943b633af759918":()=>Promise.resolve().then(s.bind(s,24871)).then(e=>e.getAllTickets),"28989300bf335d74cd220ccb6afddf3339d8afe3":()=>Promise.resolve().then(s.bind(s,24871)).then(e=>e.getUserTickets),"442168183208a1a6d90c2b721f790f2d83f37bf9":()=>Promise.resolve().then(s.bind(s,24871)).then(e=>e.getRowByCategory),"4ed999c52825de0416fa27627a5a3b0c4fd2d57f":()=>Promise.resolve().then(s.bind(s,24871)).then(e=>e.deligateTicket),"6805486b025ccddae1ed9e45adaffa37ee03c943":()=>Promise.resolve().then(s.bind(s,24871)).then(e=>e.getTicketFormData),"77da6ed9a7fdcd8e7784d5be0319ed4d5f81ad61":()=>Promise.resolve().then(s.bind(s,24871)).then(e=>e.AssignUser),cb3520da87add466fd10b27976ef5aa2c737f8f4:()=>Promise.resolve().then(s.bind(s,24871)).then(e=>e.updateStatus),d62d4f1a140ca3a0929303327b78d42ca617a3e2:()=>Promise.resolve().then(s.bind(s,24871)).then(e=>e.addTicket),"08893cc7b3568853778612b7009d9e0295b3d182":()=>Promise.resolve().then(s.bind(s,92153)).then(e=>e.getUserIdFromClerkId),"3b9f5381daf25ec350eef41c4522b870a90edcf5":()=>Promise.resolve().then(s.bind(s,92153)).then(e=>e.createUser),"605fbd3cfa84bd30ec8d022f83bc673e1209f363":()=>Promise.resolve().then(s.bind(s,92153)).then(e=>e.checkUserPermissionForSurvey),"9e55bf1e1fc4c00ed7818ab82e1f39f596a869a4":()=>Promise.resolve().then(s.bind(s,92153)).then(e=>e.userCreationFlow),ad3fa980eb29ddc5515b6c81a8dd845a5595ed1c:()=>Promise.resolve().then(s.bind(s,92153)).then(e=>e.getAllUsers),ae096b2f57a48498d952cabcd0d481c0bea6f80f:()=>Promise.resolve().then(s.bind(s,92153)).then(e=>e.checkUserExistence),c3efeaa8e756ca8251d4d7c13b18b0fc263ca573:()=>Promise.resolve().then(s.bind(s,92153)).then(e=>e.getAllUsersToAssign),c44f796dddee508d2690c0a56bfa35105b4ef06e:()=>Promise.resolve().then(s.bind(s,92153)).then(e=>e.getUsersFormData),c5c87f63730f10b32f23532552f606c5ce927141:()=>Promise.resolve().then(s.bind(s,92153)).then(e=>e.updateUserRoleMapping),e2140fb79d9b1206cc77a6622598a189ef464d00:()=>Promise.resolve().then(s.bind(s,92153)).then(e=>e.getUserById),e2efa07395f6b5eef3b6d2f6bae60b4780d1f3ed:()=>Promise.resolve().then(s.bind(s,92153)).then(e=>e.getUserFromDb)};async function r(e,...t){return(await a[e]()).apply(null,t)}e.exports={"06df5ce421b1d44c2075e400366042d4a3f9ada1":r.bind(null,"06df5ce421b1d44c2075e400366042d4a3f9ada1"),"0fe6fd47ae6e7a9c965696563943b633af759918":r.bind(null,"0fe6fd47ae6e7a9c965696563943b633af759918"),"28989300bf335d74cd220ccb6afddf3339d8afe3":r.bind(null,"28989300bf335d74cd220ccb6afddf3339d8afe3"),"442168183208a1a6d90c2b721f790f2d83f37bf9":r.bind(null,"442168183208a1a6d90c2b721f790f2d83f37bf9"),"4ed999c52825de0416fa27627a5a3b0c4fd2d57f":r.bind(null,"4ed999c52825de0416fa27627a5a3b0c4fd2d57f"),"6805486b025ccddae1ed9e45adaffa37ee03c943":r.bind(null,"6805486b025ccddae1ed9e45adaffa37ee03c943"),"77da6ed9a7fdcd8e7784d5be0319ed4d5f81ad61":r.bind(null,"77da6ed9a7fdcd8e7784d5be0319ed4d5f81ad61"),cb3520da87add466fd10b27976ef5aa2c737f8f4:r.bind(null,"cb3520da87add466fd10b27976ef5aa2c737f8f4"),d62d4f1a140ca3a0929303327b78d42ca617a3e2:r.bind(null,"d62d4f1a140ca3a0929303327b78d42ca617a3e2"),"08893cc7b3568853778612b7009d9e0295b3d182":r.bind(null,"08893cc7b3568853778612b7009d9e0295b3d182"),"3b9f5381daf25ec350eef41c4522b870a90edcf5":r.bind(null,"3b9f5381daf25ec350eef41c4522b870a90edcf5"),"605fbd3cfa84bd30ec8d022f83bc673e1209f363":r.bind(null,"605fbd3cfa84bd30ec8d022f83bc673e1209f363"),"9e55bf1e1fc4c00ed7818ab82e1f39f596a869a4":r.bind(null,"9e55bf1e1fc4c00ed7818ab82e1f39f596a869a4"),ad3fa980eb29ddc5515b6c81a8dd845a5595ed1c:r.bind(null,"ad3fa980eb29ddc5515b6c81a8dd845a5595ed1c"),ae096b2f57a48498d952cabcd0d481c0bea6f80f:r.bind(null,"ae096b2f57a48498d952cabcd0d481c0bea6f80f"),c3efeaa8e756ca8251d4d7c13b18b0fc263ca573:r.bind(null,"c3efeaa8e756ca8251d4d7c13b18b0fc263ca573"),c44f796dddee508d2690c0a56bfa35105b4ef06e:r.bind(null,"c44f796dddee508d2690c0a56bfa35105b4ef06e"),c5c87f63730f10b32f23532552f606c5ce927141:r.bind(null,"c5c87f63730f10b32f23532552f606c5ce927141"),e2140fb79d9b1206cc77a6622598a189ef464d00:r.bind(null,"e2140fb79d9b1206cc77a6622598a189ef464d00"),e2efa07395f6b5eef3b6d2f6bae60b4780d1f3ed:r.bind(null,"e2efa07395f6b5eef3b6d2f6bae60b4780d1f3ed")}},85645:(e,t,s)=>{Promise.resolve().then(s.bind(s,96453))},46242:(e,t,s)=>{"use strict";Object.defineProperty(t,"$",{enumerable:!0,get:function(){return r}});let a=s(15424);function r(e){let{createServerReference:t}=s(56493);return t(e,a.callServer)}},96453:(e,t,s)=>{"use strict";s.d(t,{default:()=>f});var a,r=s(10326),d=s(17577),i=s(36204),c=s(25988),n=s(27324);s(93092);var l=s(52396);let o=(e,t,s)=>{let a=(t-1)*s;return e.slice(a,a+s)};function u({surveyData:e}){console.log("SURVEY DATA",e);let[t,s]=(0,d.useState)(1),[a,i]=(0,d.useState)([{}]),[u,f]=(0,d.useState)(""),[b,x]=(0,d.useState)(e),[p,h]=(0,d.useState)([]),[m,g]=(0,d.useState)(!0),[y,v]=(0,d.useState)(null),[j,k]=(0,d.useState)(null),[w,N]=(0,d.useState)([]);async function _(e,t){let s=document.getElementById(t);s&&(s.innerHTML="Assigning...");try{await (0,l.dQ)(e,t),k(null),location.reload()}catch(e){}}function C({ticket:e}){return r.jsx("span",{className:"cursor-pointer rounded-lg bg-slate-500 px-2 py-1 text-white",onClick:()=>k(e),children:"Assign"})}let A=e=>{if(e==u){i([{}]),f("");return}f(e);let a=b.filter(t=>t.status==e);i(a),s(1),h(o(a,t,11))},S=()=>e=>{v(null),k(null),e.preventDefault()};async function $(e,t,s){let a=document.getElementById(e);a&&(a.innerHTML="Marking...");try{await (0,l.Nf)(t,s),v(null),location.reload()}catch(e){console.log(e)}}return r.jsx("div",{className:"",children:m?(0,r.jsxs)("div",{className:"fixed top-0 left-0 w-screen h-screen z-[99999999999999] flex flex-col items-center justify-center bg-black/40",children:[r.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"})," ",r.jsx("h3",{children:"Fetching Tickets ..."})," "]}):(0,r.jsxs)("div",{children:[y&&r.jsx("div",{className:"absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center bg-slate-500 bg-opacity-70 ",children:(0,r.jsxs)("div",{className:"relative rounded-md bg-white ",children:[r.jsx("div",{className:"absolute -right-3 -top-3  rounded-full bg-slate-600 px-3 py-1  text-white",children:r.jsx("button",{onClick:S(),children:"X"})}),r.jsx("div",{className:"flex w-fit max-w-sm flex-col items-center justify-center ",children:(0,r.jsxs)("div",{className:"flex flex-col gap-4 ",children:[(0,r.jsxs)("div",{className:"flex items-center gap-4  rounded-t-md bg-indigo-500 px-7 py-5 text-white",children:[(0,r.jsxs)("div",{children:["#",y.ticket_id]}),r.jsx("div",{className:"text-2xl",children:y.title}),r.jsx("div",{className:`${"Open"==y.status?"bg-red-500":"Resolved"==y.status?"bg-green-500 ":"bg-yellow-500 "}  rounded-full px-2 py-1 text-sm text-white`,children:y.status})]}),r.jsx("div",{className:"px-7  text-lg",children:y.description}),(0,r.jsxs)("div",{className:" px-7 py-5",children:[(0,r.jsxs)("div",{className:"bg-gray text-sm text-zinc-400",children:["Opened at : ",new Date(y.createdat).toLocaleString()]}),"Open"==y.status?(0,r.jsxs)("div",{className:"flex justify-center gap-4",children:[r.jsx("button",{id:"markAsClosed",className:"mt-2 rounded-md bg-black px-4 py-2 text-center text-white",onClick:()=>$("markAsClosed",y.ticket_id,4),children:"Mark Resolved"}),r.jsx("button",{id:"markAsAddressed",className:"mt-2 rounded-md bg-black px-4 py-2 text-center text-white",onClick:()=>$("markAsAddressed",y.ticket_id,5),children:"Mark being addressed"})]}):"Resolved"==y.status?(0,r.jsxs)("div",{className:"bg-gray text-sm text-zinc-400",children:["Closed at : ",new Date(y.closedat).toLocaleString()]}):r.jsx("div",{className:"flex justify-center gap-4",children:r.jsx("button",{id:"markAsClosed",className:"mt-2 rounded-md bg-black px-4 py-2 text-center text-white",onClick:()=>$("markAsClosed",y.ticket_id,4),children:"Mark Resolved"})})]})]})})]})}),j&&r.jsx("div",{className:"absolute bottom-0 left-0 right-0 top-0 min-w-96 flex flex-col items-center justify-center bg-slate-500 bg-opacity-70 ",children:(0,r.jsxs)("div",{className:"relative m-10 rounded-md bg-white",children:[r.jsx("div",{className:" absolute -right-3 -top-3  rounded-full bg-slate-600 px-3 py-1  text-white",children:r.jsx("button",{onClick:S(),children:"X"})}),r.jsx("div",{className:"flex w-fit max-w-sm flex-col items-center justify-center ",children:(0,r.jsxs)("div",{className:"flex flex-col gap-4 ",children:[(0,r.jsxs)("div",{className:"flex items-center gap-4 rounded-t-md  bg-indigo-500 px-7 py-5 text-white",children:[(0,r.jsxs)("div",{children:["#",j.ticket_id]}),r.jsx("div",{className:"text-2xl",children:j.title})]}),r.jsx("div",{className:"text-lg"}),r.jsx("div",{className:"scroll h-96 min-w-full overflow-auto px-5 pb-2 ",children:w.map(e=>(0,r.jsxs)("div",{className:" mb-2 grid cursor-pointer items-center overflow-hidden rounded-[10px] bg-white py-2.5 pl-2.5 pr-[30px] shadow-[0_5px_7px_-1px_rgba(51,51,51,0.23)] hover:scale-[1.05] hover:shadow-[0_9px_47px_11px_rgba(51,51,51,0.18)]",onClick:()=>_(j.ticket_id,e.id),children:[r.jsx("div",{id:e.id,children:e.username}),r.jsx("div",{className:"bg-gray text-sm text-zinc-400",children:e.email})]},e.id))})]})})]})}),(0,r.jsxs)("div",{className:"flex items-stretch",children:[(0,r.jsxs)("div",{className:" w-[18%] items-stretch bg-slate-100",children:[r.jsx("div",{className:"mx-2 my-1 mt-2 text-xl",children:"Filters"}),r.jsx("div",{className:`${"Resolved"==u?"border-sky-500 text-sky-500":"border-gray-300 text-gray-400"} m-2  inline-block cursor-pointer rounded-lg border-2 px-4 py-2`,onClick:()=>A("Resolved"),children:"Resolved"}),r.jsx("div",{className:`${"Open"==u?"border-sky-500 text-sky-500":"border-gray-300 text-gray-400"} inline-block  cursor-pointer rounded-lg border-2 px-4 py-2 `,onClick:()=>A("Open"),children:"Open"}),r.jsx("div",{className:`${"Addressing"==u?"border-sky-500 text-sky-500":"border-gray-300 text-gray-400"} inline-block  cursor-pointer rounded-lg border-2 px-4 py-2 `,onClick:()=>A("Addressing"),children:"Addressing"})]}),(0,r.jsxs)("div",{className:"w-[82%]",children:[(0,r.jsxs)("table",{className:"w-[100%]",children:[r.jsx("thead",{children:(0,r.jsxs)("tr",{className:" m-10 bg-gray-200/50",children:[r.jsx("th",{className:"px-10 py-3 text-left",children:"Creator"}),r.jsx("th",{className:"px-10 py-3 text-left",children:"Assigned To"}),r.jsx("th",{className:"px-10 py-3 text-left",children:"Title"}),r.jsx("th",{className:"px-10 py-3 text-left",children:"Status"}),r.jsx("th",{className:"px-10 py-3 text-left",children:"Created on"}),r.jsx("th",{className:"px-10 py-3 text-left",children:"Details"})]})}),r.jsx("tbody",{children:p.map(e=>(0,r.jsxs)("tr",{children:[r.jsx("td",{className:"border-b border-sky-500 px-10 py-3",children:e.createdby}),r.jsx("td",{className:"border-b border-sky-500 px-10 py-3",children:e.assignedto||r.jsx(C,{ticket:e})}),r.jsx("td",{className:"border-b border-sky-500 px-10 py-3",children:e.title}),r.jsx("td",{className:"border-b border-sky-500 px-10 py-3",children:r.jsx("span",{className:`${"Open"==e.status?"text-[#f03e3e] bg-[#f03e3e1a]":"Resolved"==e.status?"text-[#14ae6d] bg-[#e7f5f0]":"text-[#D68D00] bg-[#D68D001A] "}  rounded-full px-2 py-1 text-sm `,children:e.status})}),r.jsx("td",{className:"border-b border-sky-500 px-10 py-3",children:(0,n.i)(e.createdat)}),r.jsx("td",{className:"border-b border-sky-500",onClick:()=>v(e),children:r.jsx("span",{className:" cursor-pointer rounded-full bg-blue-200   px-3 py-1 text-sm text-blue-500 hover:bg-blue-100",children:"View Details"})})]},e.ticket_id))})]}),r.jsx(c.Z,{items:""==u?b.length:a.length,currentPage:t,pageSize:11,onPageChange:e=>{s(e)}})]}),(0,r.jsxs)("div",{className:"hidden w-[22%] bg-slate-200 p-5",id:"modal",children:[r.jsx("div",{className:"flex justify-end",children:r.jsx("button",{onClick:S(),children:"X"})}),r.jsx("div",{className:"header"}),r.jsx("div",{children:r.jsx("input",{type:"search"})}),r.jsx("div",{className:"all-users"})]})]})]})})}!function(e){e[e.All=0]="All",e[e.Today=1]="Today",e[e.OneWeek=2]="OneWeek",e[e.OneMonth=3]="OneMonth",e[e.OneYear=4]="OneYear"}(a||(a={}));let f=function({surveyData:e}){let[t,s]=(0,d.useState)([]),[a,c]=(0,d.useState)(0),[n,l]=(0,d.useState)(),[o,f]=(0,d.useState)(""),[b,x]=(0,d.useState)([]),p=e=>{let t=e.target.value;c(t),console.log("Selection Value",t)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex justify-between items-center relative mx-4 my-4",children:[r.jsx(i.Z,{onChangeCallback:e=>{f(e);let t=b.filter(t=>t.title.toLowerCase().includes(e.toLowerCase())||t.description.toLowerCase().includes(e.toLowerCase())||null!=t.assignedto&&t.assignedto.trim().toLowerCase().includes(e.toLowerCase()));console.log("bbb",t),s(t)},placeholder:"Search Tickets"}),(0,r.jsxs)("div",{className:"flex justify-center items-center gap-2",children:[r.jsx("label",{htmlFor:"my-select",className:"font-medium text-gray-700",children:"Sort by:"}),(0,r.jsxs)("select",{id:"my-select",className:"w-[180px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",onChange:e=>p(e),children:[r.jsx("option",{value:0,children:"All Time"}),r.jsx("option",{value:1,children:"Today"}),r.jsx("option",{value:2,children:"Last one week"}),r.jsx("option",{value:3,children:"Last one month"}),r.jsx("option",{value:4,children:"Last one year"})]})]})]}),r.jsx(u,{surveyData:t})]})}},36204:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var a=s(10326),r=s(17577);let d=({onChangeCallback:e,placeholder:t})=>{let[s,d]=(0,r.useState)("");return(0,a.jsxs)("div",{className:"flex items-center gap-2 border-2 border-gray-300 rounded-full overflow-hidden px-2 has-[:focus]:border-sky-300",children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"25px",height:"25px",children:a.jsx("path",{d:"M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"})}),a.jsx("input",{className:" bg-white h-[2rem] px-5 rounded-lg text-sm focus:outline-none w-full",type:"search",value:s,onChange:t=>{let s=t.target.value;d(s),e&&e(s)},name:"search",placeholder:t})]})}},25988:(e,t,s)=>{"use strict";s.d(t,{Z:()=>i});var a=s(10326),r=s(71627),d=s.n(r);let i=({items:e,pageSize:t,currentPage:s,onPageChange:r})=>{console.log("items -> ",e);let i=Math.ceil(e/t);if(1===i)return null;let c=Array.from({length:i},(e,t)=>t+1);return a.jsx("div",{children:a.jsx("ul",{className:d().pagination,children:c.map(e=>a.jsx("li",{className:e===s?d().pageItemActive:d().pageItem,onClick:()=>r(e),children:a.jsx("a",{className:d().pageLink,children:e})},e))})})}},27324:(e,t,s)=>{"use strict";s.d(t,{i:()=>a});let a=e=>{if(!e)return"";let t=new Date(e),s=t.getUTCMonth()+1,a=t.getUTCFullYear(),r=t.getUTCDate(),d=["January","February","March","April","May","June","July","August","September","October","November","December"][s-1];return`${d} ${r}, ${a}`}},52396:(e,t,s)=>{"use strict";s.d(t,{HM:()=>d,Nf:()=>c,OA:()=>r,dQ:()=>i,mu:()=>n}),s(15424);var a=s(46242),r=(0,a.$)("6805486b025ccddae1ed9e45adaffa37ee03c943");(0,a.$)("442168183208a1a6d90c2b721f790f2d83f37bf9");var d=(0,a.$)("d62d4f1a140ca3a0929303327b78d42ca617a3e2"),i=(0,a.$)("77da6ed9a7fdcd8e7784d5be0319ed4d5f81ad61"),c=(0,a.$)("cb3520da87add466fd10b27976ef5aa2c737f8f4"),n=(0,a.$)("4ed999c52825de0416fa27627a5a3b0c4fd2d57f");(0,a.$)("28989300bf335d74cd220ccb6afddf3339d8afe3"),(0,a.$)("0fe6fd47ae6e7a9c965696563943b633af759918"),(0,a.$)("06df5ce421b1d44c2075e400366042d4a3f9ada1")},93092:(e,t,s)=>{"use strict";s.d(t,{BF:()=>d,_X:()=>r}),s(15424);var a=s(46242),r=(0,a.$)("605fbd3cfa84bd30ec8d022f83bc673e1209f363");(0,a.$)("e2efa07395f6b5eef3b6d2f6bae60b4780d1f3ed"),(0,a.$)("ad3fa980eb29ddc5515b6c81a8dd845a5595ed1c"),(0,a.$)("c3efeaa8e756ca8251d4d7c13b18b0fc263ca573"),(0,a.$)("e2140fb79d9b1206cc77a6622598a189ef464d00");var d=(0,a.$)("c5c87f63730f10b32f23532552f606c5ce927141");(0,a.$)("c44f796dddee508d2690c0a56bfa35105b4ef06e"),(0,a.$)("3b9f5381daf25ec350eef41c4522b870a90edcf5"),(0,a.$)("ae096b2f57a48498d952cabcd0d481c0bea6f80f"),(0,a.$)("9e55bf1e1fc4c00ed7818ab82e1f39f596a869a4"),(0,a.$)("08893cc7b3568853778612b7009d9e0295b3d182")},71627:e=>{e.exports={container:"Pagination_container__K2pXc",pagination:"Pagination_pagination__YO7tt",pageLink:"Pagination_pageLink__Dbtuc",pageItem:"Pagination_pageItem__S74oz",pageItemActive:"Pagination_pageItemActive__tUfHZ"}},9457:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c,metadata:()=>i});var a=s(19510),r=s(33266),d=s(24890);let i={title:"Next.js",description:"Generated by Next.js"};function c({children:e}){return a.jsx("html",{lang:"en",children:(0,a.jsxs)("body",{children:[a.jsx(d.ZP,{}),e,a.jsx(r.Z,{})]})})}},58034:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f});var a=s(19510),r=s(71159),d=s(68570);let i=(0,d.createProxy)(String.raw`C:\Users\dhgupta\Desktop\HRSquared\src\app\admin\ticket\AdminTicketSearch.tsx`),{__esModule:c,$$typeof:n}=i;i.default;let l=(0,d.createProxy)(String.raw`C:\Users\dhgupta\Desktop\HRSquared\src\app\admin\ticket\AdminTicketSearch.tsx#default`);var o=s(24871);async function u(){let e=await (0,o.getAllTickets)();return a.jsx(l,{surveyData:e})}function f(){return a.jsx("div",{children:a.jsx(r.Suspense,{fallback:(0,a.jsxs)("div",{className:"fixed top-0 left-0 w-screen h-screen z-[99999999999999] flex flex-col items-center justify-center bg-black/40",children:[a.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"})," ",a.jsx("h3",{children:"Fetching Tickets ..."})," "]}),children:a.jsx(u,{})})})}},24871:(e,t,s)=>{"use strict";s.r(t),s.d(t,{AssignUser:()=>f,addTicket:()=>u,deligateTicket:()=>x,getAllTickets:()=>h,getAssignedTickets:()=>m,getRowByCategory:()=>o,getTicketFormData:()=>g,getUserTickets:()=>p,updateStatus:()=>b});var a=s(24330);s(60166);var r=s(24925),d=s(55245);let i=async e=>{let t=d.createTransport({service:"Gmail",auth:{user:process.env.EMAIL_ADDRESS,pass:process.env.EMAIL_PASSWORD}}),s={from:"ADMIN",to:e.to,subject:e.subject,html:e.message};await t.sendMail(s)};var c=s(92153),n=s(40618);let l=` SELECT
tickets.id as ticket_id,
tickets.title as title,
tickets.description as description,
category.categoryname AS category,
ticketpriority.name AS priority,
ticketstatus.name AS status,
users_createdby.username AS createdby,
tickets.createdat,
users_assignedto.username AS assignedto,
users_closedby.username AS closedby,
tickets.closedat
FROM
    tickets
LEFT JOIN
    category ON tickets.subcategory_id = category.id
LEFT JOIN
    ticketpriority ON tickets.priority = ticketpriority.id
LEFT JOIN
    ticketstatus ON tickets.status = ticketstatus.id
LEFT JOIN
    users AS users_createdby ON tickets.createdby = users_createdby.id
LEFT JOIN
    users AS users_assignedto ON tickets.assignedto = users_assignedto.id
LEFT JOIN
    users AS users_closedby ON tickets.closedby = users_closedby.id`;async function o(e){let t=await (0,r.C)(),s={text:`
    select * from userrole_mapping ur
    where ur.category_id = $1`,values:[e]};return await t.query(s)}async function u(e){let t=await (0,r.C)();try{let s=JSON.parse(e),a=await (0,c.getUserIdFromClerkId)(s.created_by);console.log("userId while posting ticket",a);let r=await o(s.sub_category_id),d={sub_category_id:s.sub_category_id,priority:s.priority,title:s.title,description:s.description,status_id:1,created_by:a,assigned_to:r.data&&0!=r.data.length?r.data[0].user_id:null},i={text:"insert into tickets (title, description, subcategory_id, priority, status, createdby, assignedto) values ($1, $2, $3, $4, $5, $6, $7)",values:[d.title,d.description,d.sub_category_id,d.priority,d.status_id,a,d.assigned_to]};return await t.query(i),!0}catch(e){return!1}}async function f(e,t){let s=await (0,r.C)();try{await s.query({text:"update tickets set assignedto = $1 where id = $2",values:[t,e]});let a=await s.query({text:"select email from Users where id = $1",values:[t]}),r=await s.query({text:"select title, description from tickets where id=$1",values:[e]});if(a.rowCount>0){let e=a.rows[0].email,t=r.rows[0].title,s=r.rows[0].description;console.log(e);let d={to:e,subject:"Update: New Ticket Assigned",message:`
      <h3>A new ticket has been assigned, please check your HrSquared Account!</h3>
      <h4>Title: ${t}</h4>
      <p>Description: ${s}</p>
      `};console.log(d,"**********"),await i(d)}return!0}catch(e){return!1}}async function b(e,t){let s=await (0,r.C)();try{await s.query({text:"update tickets set status = $1, closedat=CURRENT_TIMESTAMP where id = $2 RETURNING id",values:[t,e]});let a=await s.query({text:"select title, description, createdby from tickets where id=$1",values:[e]}),r=a.rows[0].createdby,d=(await s.query({text:"select username, email from users where id=$1",values:[r]})).rows[0].email,c=a.rows[0].title,n=a.rows[0].description,l=await s.query({text:"select name from ticketstatus where id=$1",values:[t]}),o={to:d,subject:`Update: Ticket #${e} Status Updated`,message:`
    <h3>Your ticket #${e} status has been updated</h3>
    <h4>Title: ${c}</h4>
    <p>Description: ${n}</p>
    <p>Current status: ${l.rows[0].name}</p>
    `};return console.log(o,"**********"),await i(o),!0}catch(e){return!1}}async function x(e){let t=await (0,r.C)();try{return await t.query({text:"update tickets set status = 1, assignedto=null where id = $1 RETURNING id",values:[e]}),!0}catch(e){return!1}}async function p(e){let t=await (0,r.C)(),s=await (0,c.getUserIdFromClerkId)(e);console.log("ID",s);let a={text:`${l} where users_createdby.id=$1 order by tickets.createdat desc;`,values:[s]};return(await t.query(a)).rows}async function h(){let e=await (0,r.C)(),t={text:`${l} order by tickets.createdat desc;`};return(await e.query(t)).rows}async function m(e){let t=await (0,r.C)(),s={text:`${l} where users_assignedto.id=$1;`,values:[await (0,c.getUserIdFromClerkId)(e)]};return(await t.query(s)).rows}async function g(){let e=await (0,r.C)(),t=await e.query("select * from groups"),s=await e.query("select * from category"),a=await e.query("select * from ticketpriority");return{groups:t.rowCount>0?t.rows:[],categories:s.rowCount>0?s.rows:[],ticketpriority:a.rowCount>0?a.rows:[]}}(0,n.h)([o,u,f,b,x,p,h,m,g]),(0,a.j)("442168183208a1a6d90c2b721f790f2d83f37bf9",o),(0,a.j)("d62d4f1a140ca3a0929303327b78d42ca617a3e2",u),(0,a.j)("77da6ed9a7fdcd8e7784d5be0319ed4d5f81ad61",f),(0,a.j)("cb3520da87add466fd10b27976ef5aa2c737f8f4",b),(0,a.j)("4ed999c52825de0416fa27627a5a3b0c4fd2d57f",x),(0,a.j)("28989300bf335d74cd220ccb6afddf3339d8afe3",p),(0,a.j)("0fe6fd47ae6e7a9c965696563943b633af759918",h),(0,a.j)("06df5ce421b1d44c2075e400366042d4a3f9ada1",m),(0,a.j)("6805486b025ccddae1ed9e45adaffa37ee03c943",g)}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[377,42,913,621,341,512,245,354],()=>s(84420));module.exports=a})();