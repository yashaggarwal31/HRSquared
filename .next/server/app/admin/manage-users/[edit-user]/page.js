(()=>{var e={};e.id=523,e.ids=[523],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},35900:e=>{"use strict";e.exports=require("pg")},6113:e=>{"use strict";e.exports=require("crypto")},6005:e=>{"use strict";e.exports=require("node:crypto")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},49593:(e,a,r)=>{"use strict";r.r(a),r.d(a,{GlobalError:()=>d.a,__next_app__:()=>b,originalPathname:()=>u,pages:()=>i,routeModule:()=>f,tree:()=>l}),r(51837),r(9457),r(32029),r(35866);var t=r(23191),s=r(88716),n=r(37922),d=r.n(n),c=r(95231),o={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>c[e]);r.d(a,o);let l=["",{children:["admin",{children:["manage-users",{children:["[edit-user]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,51837)),"D:\\EX2Projects\\CurrentProjects\\HRSQUARED\\HRSquared\\src\\app\\admin\\manage-users\\[edit-user]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,9457)),"D:\\EX2Projects\\CurrentProjects\\HRSQUARED\\HRSquared\\src\\app\\admin\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,32029)),"D:\\EX2Projects\\CurrentProjects\\HRSQUARED\\HRSquared\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],i=["D:\\EX2Projects\\CurrentProjects\\HRSQUARED\\HRSquared\\src\\app\\admin\\manage-users\\[edit-user]\\page.tsx"],u="/admin/manage-users/[edit-user]/page",b={require:r,loadChunk:()=>Promise.resolve()},f=new t.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/admin/manage-users/[edit-user]/page",pathname:"/admin/manage-users/[edit-user]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},82803:(e,a,r)=>{let t={"258046a1e3860fa89174224a272f0cdf55590a87":()=>Promise.resolve().then(r.bind(r,92153)).then(e=>e.getAllUsersToAssign),"4858cff1d6c3cbafd4219b6ca1e3648ed5c80d77":()=>Promise.resolve().then(r.bind(r,92153)).then(e=>e.userCreationFlow),"5929f08dcffcabce9ece9ec262c4d1da2aec33a2":()=>Promise.resolve().then(r.bind(r,92153)).then(e=>e.updateUserRoleMapping),"8b3bb30f46c0d6e334351cdbc6f39faf04c6bdb7":()=>Promise.resolve().then(r.bind(r,92153)).then(e=>e.getUsersFormData),a448f998d28c1535f4ba9b2d14794207c3b56e92:()=>Promise.resolve().then(r.bind(r,92153)).then(e=>e.createUser),bfb948864d3a9223fe1b23007ea4ecc247e7419e:()=>Promise.resolve().then(r.bind(r,92153)).then(e=>e.getUserFromDb),c3a6fc5c59e2081ad90a6af0191920ab22d8d718:()=>Promise.resolve().then(r.bind(r,92153)).then(e=>e.checkUserPermissionForSurvey),d16ec756617f7017d927ecb303b422c45c2b5f8f:()=>Promise.resolve().then(r.bind(r,92153)).then(e=>e.checkUserExistence),deb9a62e45009688455aa5d6d724f09a72e9c0c6:()=>Promise.resolve().then(r.bind(r,92153)).then(e=>e.getUserIdFromClerkId),ef8258559ec09924b33df9cdb206b83c322e79bf:()=>Promise.resolve().then(r.bind(r,92153)).then(e=>e.getAllUsers),f7abf20a8088752418c2e27ab26067e3f68fe53d:()=>Promise.resolve().then(r.bind(r,92153)).then(e=>e.getUserById)};async function s(e,...a){return(await t[e]()).apply(null,a)}e.exports={"258046a1e3860fa89174224a272f0cdf55590a87":s.bind(null,"258046a1e3860fa89174224a272f0cdf55590a87"),"4858cff1d6c3cbafd4219b6ca1e3648ed5c80d77":s.bind(null,"4858cff1d6c3cbafd4219b6ca1e3648ed5c80d77"),"5929f08dcffcabce9ece9ec262c4d1da2aec33a2":s.bind(null,"5929f08dcffcabce9ece9ec262c4d1da2aec33a2"),"8b3bb30f46c0d6e334351cdbc6f39faf04c6bdb7":s.bind(null,"8b3bb30f46c0d6e334351cdbc6f39faf04c6bdb7"),a448f998d28c1535f4ba9b2d14794207c3b56e92:s.bind(null,"a448f998d28c1535f4ba9b2d14794207c3b56e92"),bfb948864d3a9223fe1b23007ea4ecc247e7419e:s.bind(null,"bfb948864d3a9223fe1b23007ea4ecc247e7419e"),c3a6fc5c59e2081ad90a6af0191920ab22d8d718:s.bind(null,"c3a6fc5c59e2081ad90a6af0191920ab22d8d718"),d16ec756617f7017d927ecb303b422c45c2b5f8f:s.bind(null,"d16ec756617f7017d927ecb303b422c45c2b5f8f"),deb9a62e45009688455aa5d6d724f09a72e9c0c6:s.bind(null,"deb9a62e45009688455aa5d6d724f09a72e9c0c6"),ef8258559ec09924b33df9cdb206b83c322e79bf:s.bind(null,"ef8258559ec09924b33df9cdb206b83c322e79bf"),f7abf20a8088752418c2e27ab26067e3f68fe53d:s.bind(null,"f7abf20a8088752418c2e27ab26067e3f68fe53d")}},88653:(e,a,r)=>{Promise.resolve().then(r.bind(r,666))},46242:(e,a,r)=>{"use strict";Object.defineProperty(a,"$",{enumerable:!0,get:function(){return s}});let t=r(15424);function s(e){let{createServerReference:a}=r(56493);return a(e,t.callServer)}},666:(e,a,r)=>{"use strict";r.d(a,{default:()=>o});var t=r(10326),s=r(93092),n=r(90434),d=r(17577),c=r(35047);function o({user:e,userFields:a}){let r=(0,c.useRouter)(),[o,l]=(0,d.useState)(()=>{let r=a.roles.find(a=>a.rolename===e.rolename);return r?r.id:""}),[i,u]=(0,d.useState)(()=>{let r=a.groups.find(a=>a.groupname===e.groupname);return r?r.id:""}),[b,f]=(0,d.useState)([]),[m,p]=(0,d.useState)(()=>{let r=a.categories.find(a=>a.categoryname===e.categoryname);return r?r.id:""}),[h,x]=(0,d.useState)(!1),[g,v]=(0,d.useState)(e.can_create_survey?"yes":"no"),y=async()=>{let a={user_id:e.id,role_id:o,category_id:m,group_id:i,can_create_survey:"yes"===g};try{x(!0),await (0,s.BF)(a),r.push("/admin/manage-users"),x(!1)}catch(e){}};return t.jsx("div",{className:"max-w-md mx-auto bg-white shadow-md rounded-md",children:(0,t.jsxs)("div",{className:"p-6",children:[(0,t.jsxs)("div",{className:"mb-4",children:[t.jsx("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"name",children:"Name:"}),t.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"name",value:e.username,disabled:!0})]}),(0,t.jsxs)("div",{className:"mb-4",children:[t.jsx("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"email",children:"Email:"}),t.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"email",type:"email",value:e.email,disabled:!0})]}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsxs)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"role",children:['Role: (Current "',e.rolename,'")']}),t.jsx("select",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"role",onChange:e=>l(e.target.value),value:o,children:a.roles.map((e,a)=>t.jsx("option",{value:e.id,children:e.rolename},a))})]}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsxs)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"group",children:['Group: (Current "',e.groupname,'")']}),(0,t.jsxs)("select",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"group",value:i,onChange:e=>{u(e.target.value),f(a.categories.filter(a=>a.group_id===e.target.value))},children:[a.groups.map((e,a)=>t.jsx("option",{value:e.id,children:e.groupname},a)),t.jsx("option",{value:"null",children:"None"})]})]}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsxs)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"category",children:['Category: (Current "',e.categoryname,'")']}),(0,t.jsxs)("select",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"category",value:m,onChange:e=>p(e.target.value),children:[b.map((e,a)=>t.jsx("option",{value:e.id,children:e.categoryname},a)),t.jsx("option",{value:"null",children:"None"})]})]}),(0,t.jsxs)("div",{className:"mb-4",children:[t.jsx("label",{className:"block text-gray-700 font-bold mb-2",children:"Can Create Survey?"}),(0,t.jsxs)("span",{className:"flex flex-row gap-6",children:[(0,t.jsxs)("div",{onClick:()=>v("yes"),children:[t.jsx("input",{type:"radio",id:"yes",value:"yes",checked:"yes"===g,onChange:()=>v("yes")}),t.jsx("label",{htmlFor:"yes",className:"ml-2",children:"Yes"})]}),(0,t.jsxs)("div",{onClick:()=>v("no"),children:[t.jsx("input",{type:"radio",id:"no",value:"no",checked:"no"===g,onChange:()=>v("no")}),t.jsx("label",{htmlFor:"no",className:"ml-2",children:"No"})]})]})]}),(0,t.jsxs)("div",{className:"flex flex-row items-center gap-6",children:[t.jsx("button",{className:"flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",onClick:y,disabled:h,children:h?"Saving Changes...":"Save Changes"}),t.jsx(n.default,{href:"/admin/manage-users",children:t.jsx("button",{className:"flex-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Cancle"})})]})]})})}},93092:(e,a,r)=>{"use strict";r.d(a,{BF:()=>n,_X:()=>s}),r(15424);var t=r(46242),s=(0,t.$)("c3a6fc5c59e2081ad90a6af0191920ab22d8d718");(0,t.$)("bfb948864d3a9223fe1b23007ea4ecc247e7419e"),(0,t.$)("ef8258559ec09924b33df9cdb206b83c322e79bf"),(0,t.$)("258046a1e3860fa89174224a272f0cdf55590a87"),(0,t.$)("f7abf20a8088752418c2e27ab26067e3f68fe53d");var n=(0,t.$)("5929f08dcffcabce9ece9ec262c4d1da2aec33a2");(0,t.$)("8b3bb30f46c0d6e334351cdbc6f39faf04c6bdb7"),(0,t.$)("a448f998d28c1535f4ba9b2d14794207c3b56e92"),(0,t.$)("d16ec756617f7017d927ecb303b422c45c2b5f8f"),(0,t.$)("4858cff1d6c3cbafd4219b6ca1e3648ed5c80d77"),(0,t.$)("deb9a62e45009688455aa5d6d724f09a72e9c0c6")},9457:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>c,metadata:()=>d});var t=r(19510),s=r(33266),n=r(24890);let d={title:"Next.js",description:"Generated by Next.js"};function c({children:e}){return t.jsx("html",{lang:"en",children:(0,t.jsxs)("body",{children:[t.jsx(n.ZP,{}),e,t.jsx(s.Z,{})]})})}},51837:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>b});var t=r(19510),s=r(71159),n=r(68570);let d=(0,n.createProxy)(String.raw`D:\EX2Projects\CurrentProjects\HRSQUARED\HRSquared\src\app\admin\manage-users\[edit-user]\UserEdit.tsx`),{__esModule:c,$$typeof:o}=d;d.default;let l=(0,n.createProxy)(String.raw`D:\EX2Projects\CurrentProjects\HRSQUARED\HRSquared\src\app\admin\manage-users\[edit-user]\UserEdit.tsx#default`);var i=r(92153);async function u({userID:e}){let a=await (0,i.getUserById)(e),r=await (0,i.getUsersFormData)();return t.jsx(l,{user:a[0],userFields:r})}function b({params:e}){return t.jsx("div",{children:t.jsx(s.Suspense,{fallback:(0,t.jsxs)("div",{className:"fixed top-0 left-0 w-screen h-screen z-[99999999999999] flex flex-col items-center justify-center bg-black/40",children:[t.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"})," ",t.jsx("h3",{children:"Fetching User ..."})," "]}),children:t.jsx(u,{userID:e["edit-user"]})})})}}};var a=require("../../../../webpack-runtime.js");a.C(e);var r=e=>a(a.s=e),t=a.X(0,[377,42,913,621,341,512,709],()=>r(49593));module.exports=t})();