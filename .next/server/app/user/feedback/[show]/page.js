(()=>{var e={};e.id=893,e.ids=[893],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},35900:e=>{"use strict";e.exports=require("pg")},6113:e=>{"use strict";e.exports=require("crypto")},6005:e=>{"use strict";e.exports=require("node:crypto")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},98497:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>f,originalPathname:()=>b,pages:()=>o,routeModule:()=>u,tree:()=>l}),a(65112),a(59102),a(32029),a(35866);var r=a(23191),s=a(88716),d=a(37922),n=a.n(d),c=a(95231),i={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>c[e]);a.d(t,i);let l=["",{children:["user",{children:["feedback",{children:["[show]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,65112)),"C:\\Users\\dhgupta\\Desktop\\HRSquared\\src\\app\\user\\feedback\\[show]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,59102)),"C:\\Users\\dhgupta\\Desktop\\HRSquared\\src\\app\\user\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,32029)),"C:\\Users\\dhgupta\\Desktop\\HRSquared\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["C:\\Users\\dhgupta\\Desktop\\HRSquared\\src\\app\\user\\feedback\\[show]\\page.tsx"],b="/user/feedback/[show]/page",f={require:a,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/user/feedback/[show]/page",pathname:"/user/feedback/[show]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},29615:(e,t,a)=>{let r={"481ef188fb9d8fd9d53b1f3aa02fb914ce5bcbfb":()=>Promise.resolve().then(a.bind(a,47671)).then(e=>e.addFeedback),"52ee6ceed72bf833aec2950c2452db2ee07ab561":()=>Promise.resolve().then(a.bind(a,47671)).then(e=>e.GetFeedbacks),"547d5aedb246b08746d219ba85522d837c74a18b":()=>Promise.resolve().then(a.bind(a,47671)).then(e=>e.MarkViewed),acdcae45394cfc0da999fe6884a4da2664cda181:()=>Promise.resolve().then(a.bind(a,47671)).then(e=>e.GetUserFeedbacks),"08893cc7b3568853778612b7009d9e0295b3d182":()=>Promise.resolve().then(a.bind(a,92153)).then(e=>e.getUserIdFromClerkId),"3b9f5381daf25ec350eef41c4522b870a90edcf5":()=>Promise.resolve().then(a.bind(a,92153)).then(e=>e.createUser),"605fbd3cfa84bd30ec8d022f83bc673e1209f363":()=>Promise.resolve().then(a.bind(a,92153)).then(e=>e.checkUserPermissionForSurvey),"9e55bf1e1fc4c00ed7818ab82e1f39f596a869a4":()=>Promise.resolve().then(a.bind(a,92153)).then(e=>e.userCreationFlow),ad3fa980eb29ddc5515b6c81a8dd845a5595ed1c:()=>Promise.resolve().then(a.bind(a,92153)).then(e=>e.getAllUsers),ae096b2f57a48498d952cabcd0d481c0bea6f80f:()=>Promise.resolve().then(a.bind(a,92153)).then(e=>e.checkUserExistence),c3efeaa8e756ca8251d4d7c13b18b0fc263ca573:()=>Promise.resolve().then(a.bind(a,92153)).then(e=>e.getAllUsersToAssign),c44f796dddee508d2690c0a56bfa35105b4ef06e:()=>Promise.resolve().then(a.bind(a,92153)).then(e=>e.getUsersFormData),c5c87f63730f10b32f23532552f606c5ce927141:()=>Promise.resolve().then(a.bind(a,92153)).then(e=>e.updateUserRoleMapping),e2140fb79d9b1206cc77a6622598a189ef464d00:()=>Promise.resolve().then(a.bind(a,92153)).then(e=>e.getUserById),e2efa07395f6b5eef3b6d2f6bae60b4780d1f3ed:()=>Promise.resolve().then(a.bind(a,92153)).then(e=>e.getUserFromDb)};async function s(e,...t){return(await r[e]()).apply(null,t)}e.exports={"481ef188fb9d8fd9d53b1f3aa02fb914ce5bcbfb":s.bind(null,"481ef188fb9d8fd9d53b1f3aa02fb914ce5bcbfb"),"52ee6ceed72bf833aec2950c2452db2ee07ab561":s.bind(null,"52ee6ceed72bf833aec2950c2452db2ee07ab561"),"547d5aedb246b08746d219ba85522d837c74a18b":s.bind(null,"547d5aedb246b08746d219ba85522d837c74a18b"),acdcae45394cfc0da999fe6884a4da2664cda181:s.bind(null,"acdcae45394cfc0da999fe6884a4da2664cda181"),"08893cc7b3568853778612b7009d9e0295b3d182":s.bind(null,"08893cc7b3568853778612b7009d9e0295b3d182"),"3b9f5381daf25ec350eef41c4522b870a90edcf5":s.bind(null,"3b9f5381daf25ec350eef41c4522b870a90edcf5"),"605fbd3cfa84bd30ec8d022f83bc673e1209f363":s.bind(null,"605fbd3cfa84bd30ec8d022f83bc673e1209f363"),"9e55bf1e1fc4c00ed7818ab82e1f39f596a869a4":s.bind(null,"9e55bf1e1fc4c00ed7818ab82e1f39f596a869a4"),ad3fa980eb29ddc5515b6c81a8dd845a5595ed1c:s.bind(null,"ad3fa980eb29ddc5515b6c81a8dd845a5595ed1c"),ae096b2f57a48498d952cabcd0d481c0bea6f80f:s.bind(null,"ae096b2f57a48498d952cabcd0d481c0bea6f80f"),c3efeaa8e756ca8251d4d7c13b18b0fc263ca573:s.bind(null,"c3efeaa8e756ca8251d4d7c13b18b0fc263ca573"),c44f796dddee508d2690c0a56bfa35105b4ef06e:s.bind(null,"c44f796dddee508d2690c0a56bfa35105b4ef06e"),c5c87f63730f10b32f23532552f606c5ce927141:s.bind(null,"c5c87f63730f10b32f23532552f606c5ce927141"),e2140fb79d9b1206cc77a6622598a189ef464d00:s.bind(null,"e2140fb79d9b1206cc77a6622598a189ef464d00"),e2efa07395f6b5eef3b6d2f6bae60b4780d1f3ed:s.bind(null,"e2efa07395f6b5eef3b6d2f6bae60b4780d1f3ed")}},34996:(e,t,a)=>{Promise.resolve().then(a.bind(a,95722))},95722:(e,t,a)=>{"use strict";a.d(t,{UserFeedbacks:()=>b});var r=a(10326),s=a(17577),d=a(53219),n=a(27324);let c=function({feedback:e}){let{id:t,title:a,description:s,createdby:d,createdat:c,viewed:i,isanon:l}=e;return(0,r.jsxs)("div",{className:"mb-4 w-4/6 rounded-md bg-white p-4 shadow-lg",children:[(0,r.jsxs)("div",{className:"mb-2 flex items-center justify-between",children:[r.jsx("h3",{className:"text-lg font-semibold",children:a}),r.jsx("p",{className:"text-m rounded-lg bg-slate-200 px-2 py-1 text-black shadow-md",children:l?"Anonymous":d})]}),r.jsx("p",{className:"mb-2 text-base",children:s}),(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[r.jsx("p",{className:"text-sm text-gray-500",children:(0,n.i)(c)}),!i&&r.jsx("p",{className:"rounded-3xl bg-rose-500 px-2 py-1 text-white",children:"Not Viewed"})||r.jsx("p",{className:"rounded-3xl bg-green-500 px-2 py-1 text-white",children:"Viewed"})]})]})};var i=a(25988),l=a(36204);let o=(e,t,a)=>{let r=(t-1)*a;return e.slice(r,r+a)};function b({feedbacks:e}){let[t,a]=(0,s.useState)(1),[n,b]=(0,s.useState)(e),[f,u]=(0,s.useState)(e),[h,p]=(0,s.useState)([]),x=e=>{let a=e.target.id,r=[];"viewed"===a?console.log(r=n.filter(e=>e.viewed)):"not-viewed"===a?r=n.filter(e=>!e.viewed):"all"===a&&(r=n),p(o(r,t,5))};return(0,r.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[r.jsx(d.Z,{page:2}),(0,r.jsxs)("div",{className:"w-4/6 flex flex-row",children:[r.jsx(l.Z,{onChangeCallback:e=>{if(console.log(e),0===e.trim().length){p(()=>o(n,t,5));return}let a=n.filter(t=>t.title.toLowerCase().includes(e.toLowerCase()));console.log("arr ->",a),u(a),p(()=>o(f,t,5))},placeholder:"Search by Title"}),(0,r.jsxs)("ul",{className:"flex flex-row gap-2 ml-auto",children:[r.jsx("li",{className:"border-2 flex justify-center items-center border-sky-300 px-4 rounded-full hover:bg-sky-500 hover:text-white transition-all hover:cursor-pointer",onClick:x,id:"all",children:"All"}),r.jsx("li",{className:"border-2 flex justify-center items-center border-green-300 px-4 rounded-full hover:bg-green-500 hover:border-black hover:text-white transition-all hover:cursor-pointer",onClick:x,id:"viewed",children:"Viewed"}),r.jsx("li",{className:"border-2 flex justify-center items-center border-rose-300 px-4 rounded-full hover:bg-rose-500 hover:border-black hover:text-white transition-all hover:cursor-pointer",onClick:x,id:"not-viewed",children:"Not Viewed"})]})]}),h.map((e,t)=>r.jsx(c,{feedback:e},t)),r.jsx(i.Z,{items:f.length,currentPage:t,pageSize:5,onPageChange:e=>{a(e)}})]})}},53219:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var r=a(10326),s=a(90434);function d({page:e}){let t="inline-block my-4 text-center px-4 py-2 bg-slate-300 transition duration-150 ease-linear hover:bg-slate-400",a="inline-block my-4 text-center px-4 py-2 bg-slate-600 text-white";return(0,r.jsxs)("div",{className:"py-2 flex flex-row w-full items-center justify-center bg-zinc-200 sticky top-0 mb-2",children:[r.jsx(s.default,{href:"/user/feedback",className:1===e?a:t,children:"Feedback Form"}),r.jsx(s.default,{href:"/user/feedback/[id]",as:"/user/feedback/1",className:2===e?a:t,children:"My Feedbacks"})]})}},36204:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var r=a(10326),s=a(17577);let d=({onChangeCallback:e,placeholder:t})=>{let[a,d]=(0,s.useState)("");return(0,r.jsxs)("div",{className:"flex items-center gap-2 border-2 border-gray-300 rounded-full overflow-hidden px-2 has-[:focus]:border-sky-300",children:[r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"25px",height:"25px",children:r.jsx("path",{d:"M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"})}),r.jsx("input",{className:" bg-white h-[2rem] px-5 rounded-lg text-sm focus:outline-none w-full",type:"search",value:a,onChange:t=>{let a=t.target.value;d(a),e&&e(a)},name:"search",placeholder:t})]})}},25988:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(10326),s=a(71627),d=a.n(s);let n=({items:e,pageSize:t,currentPage:a,onPageChange:s})=>{console.log("items -> ",e);let n=Math.ceil(e/t);if(1===n)return null;let c=Array.from({length:n},(e,t)=>t+1);return r.jsx("div",{children:r.jsx("ul",{className:d().pagination,children:c.map(e=>r.jsx("li",{className:e===a?d().pageItemActive:d().pageItem,onClick:()=>s(e),children:r.jsx("a",{className:d().pageLink,children:e})},e))})})}},27324:(e,t,a)=>{"use strict";a.d(t,{i:()=>r});let r=e=>{if(!e)return"";let t=new Date(e),a=t.getUTCMonth()+1,r=t.getUTCFullYear(),s=t.getUTCDate(),d=["January","February","March","April","May","June","July","August","September","October","November","December"][a-1];return`${d} ${s}, ${r}`}},71627:e=>{e.exports={container:"Pagination_container__K2pXc",pagination:"Pagination_pagination__YO7tt",pageLink:"Pagination_pageLink__Dbtuc",pageItem:"Pagination_pageItem__S74oz",pageItemActive:"Pagination_pageItemActive__tUfHZ"}},65112:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var r=a(19510),s=a(71159),d=a(68570);let n=(0,d.createProxy)(String.raw`C:\Users\dhgupta\Desktop\HRSquared\src\app\user\feedback\[show]\userFeedbacks.tsx`),{__esModule:c,$$typeof:i}=n;n.default;let l=(0,d.createProxy)(String.raw`C:\Users\dhgupta\Desktop\HRSquared\src\app\user\feedback\[show]\userFeedbacks.tsx#UserFeedbacks`);var o=a(47671),b=a(35686);async function f(){let{userId:e}=(0,b.I)();console.log("feedback id",e);let t=await (0,o.GetUserFeedbacks)(e);return r.jsx(l,{feedbacks:t})}function u({params:e}){return r.jsx("div",{children:r.jsx(s.Suspense,{fallback:(0,r.jsxs)("div",{className:"fixed top-0 left-0 w-screen h-screen z-[99999999999999] flex flex-col items-center justify-center bg-black/40",children:[r.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"})," ",r.jsx("h3",{children:"Fetching Tickets ..."})," "]}),children:r.jsx(f,{})})})}},59102:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c,metadata:()=>n});var r=a(19510),s=a(24890),d=a(33266);let n={title:"Next.js",description:"Generated by Next.js"};function c({children:e}){return r.jsx("html",{lang:"en",children:(0,r.jsxs)("body",{children:[r.jsx(s.ZP,{}),e,r.jsx(d.Z,{})]})})}},47671:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GetFeedbacks:()=>i,GetUserFeedbacks:()=>o,MarkViewed:()=>l,addFeedback:()=>c});var r=a(24330);a(60166);var s=a(58585),d=a(24925),n=a(92153);async function c(e){console.log("hello add feedback"),console.log(e);let t=await (0,n.getUserIdFromClerkId)(e.userId),a=await (0,d.C)();try{let r={text:"insert into feedbacks (title, description, createdby, isanon) values ($1, $2, $3, $4)",values:[e.title,e.description,t,e.anonymous]};return await a.query(r),!0}catch(e){return console.log(e),a.end(),!1}}async function i(e){let t=await (0,d.C)();try{let a;a=e?`select feedbacks.*,
            case
                when feedbacks.createdby is not null then users.username
                else NULL
            END AS createdby
            from feedbacks
            left join users
            on feedbacks.createdby = users.id where viewed=false`:`select feedbacks.*,
            case
                when feedbacks.createdby is not null then users.username
                else NULL
            END AS createdby
            from feedbacks
            left join users
            on feedbacks.createdby = users.id`,a=`${a} ORDER BY createdat DESC`;let r=await t.query(a);if(r.rowCount>0)return r.rows;(0,s.notFound)()}catch(e){return t.end(),!1}}async function l(e){let t=await (0,d.C)();try{return await t.query({text:"update feedbacks set viewed = true where id = $1",values:[e]}),!0}catch(e){return t.end(),!1}}async function o(e,t){let a=await (0,d.C)(),r=await (0,n.getUserIdFromClerkId)(e);try{let e;e=t?`select feedbacks.*,
            case
                when feedbacks.createdby is not null then users.username
                else NULL
            END AS createdby
            from feedbacks
            left join users
            on feedbacks.createdby = users.id where viewed=false and users.id=$1`:`select feedbacks.*,
            case
                when feedbacks.createdby is not null then users.username
                else NULL
            END AS createdby
            from feedbacks
            left join users
            on feedbacks.createdby = users.id where users.id=$1`;let s={text:`${e} ORDER BY createdat DESC`,values:[r]};return e=`${e} ORDER BY createdat DESC`,(await a.query(s)).rows}catch(e){console.log("**************************"),console.log(e),(0,s.notFound)()}}(0,a(40618).h)([c,i,l,o]),(0,r.j)("481ef188fb9d8fd9d53b1f3aa02fb914ce5bcbfb",c),(0,r.j)("52ee6ceed72bf833aec2950c2452db2ee07ab561",i),(0,r.j)("547d5aedb246b08746d219ba85522d837c74a18b",l),(0,r.j)("acdcae45394cfc0da999fe6884a4da2664cda181",o)}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[377,42,913,621,341,512,354],()=>a(98497));module.exports=r})();