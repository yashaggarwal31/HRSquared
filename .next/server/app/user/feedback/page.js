(()=>{var e={};e.id=715,e.ids=[715],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},35900:e=>{"use strict";e.exports=require("pg")},6113:e=>{"use strict";e.exports=require("crypto")},6005:e=>{"use strict";e.exports=require("node:crypto")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},70847:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>c.a,__next_app__:()=>f,originalPathname:()=>u,pages:()=>l,routeModule:()=>b,tree:()=>i}),t(13674),t(59102),t(32029),t(35866);var a=t(23191),s=t(88716),n=t(37922),c=t.n(n),d=t(95231),o={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>d[e]);t.d(r,o);let i=["",{children:["user",{children:["feedback",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,13674)),"C:\\Users\\dhgupta\\Desktop\\HRSquared\\src\\app\\user\\feedback\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,59102)),"C:\\Users\\dhgupta\\Desktop\\HRSquared\\src\\app\\user\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,32029)),"C:\\Users\\dhgupta\\Desktop\\HRSquared\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["C:\\Users\\dhgupta\\Desktop\\HRSquared\\src\\app\\user\\feedback\\page.tsx"],u="/user/feedback/page",f={require:t,loadChunk:()=>Promise.resolve()},b=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/user/feedback/page",pathname:"/user/feedback",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:i}})},48512:(e,r,t)=>{let a={"481ef188fb9d8fd9d53b1f3aa02fb914ce5bcbfb":()=>Promise.resolve().then(t.bind(t,63258)).then(e=>e.addFeedback),"52ee6ceed72bf833aec2950c2452db2ee07ab561":()=>Promise.resolve().then(t.bind(t,63258)).then(e=>e.GetFeedbacks),"547d5aedb246b08746d219ba85522d837c74a18b":()=>Promise.resolve().then(t.bind(t,63258)).then(e=>e.MarkViewed),acdcae45394cfc0da999fe6884a4da2664cda181:()=>Promise.resolve().then(t.bind(t,63258)).then(e=>e.GetUserFeedbacks)};async function s(e,...r){return(await a[e]()).apply(null,r)}e.exports={"481ef188fb9d8fd9d53b1f3aa02fb914ce5bcbfb":s.bind(null,"481ef188fb9d8fd9d53b1f3aa02fb914ce5bcbfb"),"52ee6ceed72bf833aec2950c2452db2ee07ab561":s.bind(null,"52ee6ceed72bf833aec2950c2452db2ee07ab561"),"547d5aedb246b08746d219ba85522d837c74a18b":s.bind(null,"547d5aedb246b08746d219ba85522d837c74a18b"),acdcae45394cfc0da999fe6884a4da2664cda181:s.bind(null,"acdcae45394cfc0da999fe6884a4da2664cda181")}},15395:(e,r,t)=>{let a={"08893cc7b3568853778612b7009d9e0295b3d182":()=>Promise.resolve().then(t.bind(t,92153)).then(e=>e.getUserIdFromClerkId),"3b9f5381daf25ec350eef41c4522b870a90edcf5":()=>Promise.resolve().then(t.bind(t,92153)).then(e=>e.createUser),"605fbd3cfa84bd30ec8d022f83bc673e1209f363":()=>Promise.resolve().then(t.bind(t,92153)).then(e=>e.checkUserPermissionForSurvey),"9e55bf1e1fc4c00ed7818ab82e1f39f596a869a4":()=>Promise.resolve().then(t.bind(t,92153)).then(e=>e.userCreationFlow),ad3fa980eb29ddc5515b6c81a8dd845a5595ed1c:()=>Promise.resolve().then(t.bind(t,92153)).then(e=>e.getAllUsers),ae096b2f57a48498d952cabcd0d481c0bea6f80f:()=>Promise.resolve().then(t.bind(t,92153)).then(e=>e.checkUserExistence),c3efeaa8e756ca8251d4d7c13b18b0fc263ca573:()=>Promise.resolve().then(t.bind(t,92153)).then(e=>e.getAllUsersToAssign),c44f796dddee508d2690c0a56bfa35105b4ef06e:()=>Promise.resolve().then(t.bind(t,92153)).then(e=>e.getUsersFormData),c5c87f63730f10b32f23532552f606c5ce927141:()=>Promise.resolve().then(t.bind(t,92153)).then(e=>e.updateUserRoleMapping),e2140fb79d9b1206cc77a6622598a189ef464d00:()=>Promise.resolve().then(t.bind(t,92153)).then(e=>e.getUserById),e2efa07395f6b5eef3b6d2f6bae60b4780d1f3ed:()=>Promise.resolve().then(t.bind(t,92153)).then(e=>e.getUserFromDb)};async function s(e,...r){return(await a[e]()).apply(null,r)}e.exports={"08893cc7b3568853778612b7009d9e0295b3d182":s.bind(null,"08893cc7b3568853778612b7009d9e0295b3d182"),"3b9f5381daf25ec350eef41c4522b870a90edcf5":s.bind(null,"3b9f5381daf25ec350eef41c4522b870a90edcf5"),"605fbd3cfa84bd30ec8d022f83bc673e1209f363":s.bind(null,"605fbd3cfa84bd30ec8d022f83bc673e1209f363"),"9e55bf1e1fc4c00ed7818ab82e1f39f596a869a4":s.bind(null,"9e55bf1e1fc4c00ed7818ab82e1f39f596a869a4"),ad3fa980eb29ddc5515b6c81a8dd845a5595ed1c:s.bind(null,"ad3fa980eb29ddc5515b6c81a8dd845a5595ed1c"),ae096b2f57a48498d952cabcd0d481c0bea6f80f:s.bind(null,"ae096b2f57a48498d952cabcd0d481c0bea6f80f"),c3efeaa8e756ca8251d4d7c13b18b0fc263ca573:s.bind(null,"c3efeaa8e756ca8251d4d7c13b18b0fc263ca573"),c44f796dddee508d2690c0a56bfa35105b4ef06e:s.bind(null,"c44f796dddee508d2690c0a56bfa35105b4ef06e"),c5c87f63730f10b32f23532552f606c5ce927141:s.bind(null,"c5c87f63730f10b32f23532552f606c5ce927141"),e2140fb79d9b1206cc77a6622598a189ef464d00:s.bind(null,"e2140fb79d9b1206cc77a6622598a189ef464d00"),e2efa07395f6b5eef3b6d2f6bae60b4780d1f3ed:s.bind(null,"e2efa07395f6b5eef3b6d2f6bae60b4780d1f3ed")}},23760:(e,r,t)=>{Promise.resolve().then(t.bind(t,25802))},25802:(e,r,t)=>{"use strict";t.d(r,{default:()=>o});var a=t(10326),s=t(17577),n=t(7613),c=t(53219),d=t(45038);let o=function(){let[e,r]=(0,s.useState)(""),[t,o]=(0,s.useState)(""),[i,l]=(0,s.useState)(!1),[u,f]=(0,s.useState)(!1),[b,m]=(0,s.useState)(!1),[p,g]=(0,s.useState)(""),[y,h]=(0,s.useState)("text-red-700 font-semibold pt-1"),[x,w]=(0,s.useState)(!1),{user:v}=(0,d.aF)(),k=async()=>{if(console.log("hello dheeraj"),console.log("run"),""===e.trim()){g("Title is empty"),m(!1);return}if(""===t.trim()){g("Feedback is empty"),m(!1);return}if(!b&&!i){f(!0);return}let a={title:e,description:t,anonymous:i,userId:v.id};w(!0);try{await (0,n.cx)(JSON.parse(JSON.stringify(a))),g("Feedback submitted successfully"),h("text-green-700 font-semibold pt-1"),r(""),o(""),l(!1),m(!1),w(!1)}catch(e){g("Error while submitting feedback"),m(!1),w(!1)}};return(0,a.jsxs)("section",{className:"w-full pb-6",children:[u&&!i&&!b&&a.jsx("div",{className:"absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center bg-slate-500 bg-opacity-70",children:(0,a.jsxs)("div",{className:"flex w-fit max-w-sm flex-col items-center justify-center bg-white p-2 px-6 py-4",children:[a.jsx("p",{className:"px-2 py-4 text-center text-lg font-bold",children:"Your feedback will not be anonymous. Are you sure you want to proceed?"}),(0,a.jsxs)("div",{className:"flex flex-row gap-2",children:[a.jsx("button",{onClick:()=>{f(!1),m(!0)},className:"max-w-48 bg-red-600 px-4 py-2 text-white",children:"yes, proceed"}),a.jsx("button",{onClick:()=>{f(!1),l(!0),m(!0)},className:"max-w-40 bg-green-600 px-4 py-2 text-white",children:"Mark as Anonymous"})]})]})}),(0,a.jsxs)("div",{className:"flex flex-col items-center flex-1",children:[a.jsx(c.Z,{page:1}),a.jsx("h2",{className:"my-2 text-3xl font-bold text-black",children:"Feedback Form"}),a.jsx("p",{className:"text-sm",children:"We value your feedback!"}),(0,a.jsxs)("form",{className:"mt-2 text-start",children:[a.jsx("input",{type:"text",name:"title",value:e,onChange:e=>{r(e.target.value),m(!1),g("")},placeholder:"Enter the title",className:"w-full rounded-md border-2 p-2",required:!0}),a.jsx("textarea",{name:"feedback",id:"feedback",value:t,onChange:e=>{o(e.target.value),m(!1),g("")},cols:30,rows:10,className:"mt-4 w-full rounded-md border-2 p-2",placeholder:"Feedback",required:!0})]}),(0,a.jsxs)("div",{className:"mt-4 flex items-center",children:[a.jsx("input",{type:"checkbox",id:"anonymous",checked:i,onChange:()=>{l(!i),m(!1),g("")},className:"mr-2 size-4 cursor-pointer"}),a.jsx("label",{htmlFor:"anonymous",className:"text-lg",children:"Anonymous"})]}),a.jsx("p",{className:y,children:p}),a.jsx("button",{type:"button",className:"mt-2 bg-green-500 px-6 py-2 font-bold text-white hover:bg-green-600",onClick:async()=>{await k()},children:x?"Submitting":"Submit"})]})]})}},53219:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n});var a=t(10326),s=t(90434);function n({page:e}){let r="inline-block my-4 text-center px-4 py-2 bg-slate-300 transition duration-150 ease-linear hover:bg-slate-400",t="inline-block my-4 text-center px-4 py-2 bg-slate-600 text-white";return(0,a.jsxs)("div",{className:"py-2 flex flex-row w-full items-center justify-center bg-zinc-200 sticky top-0 mb-2",children:[a.jsx(s.default,{href:"/user/feedback",className:1===e?t:r,children:"Feedback Form"}),a.jsx(s.default,{href:"/user/feedback/[id]",as:"/user/feedback/1",className:2===e?t:r,children:"My Feedbacks"})]})}},7613:(e,r,t)=>{"use strict";t.d(r,{Cg:()=>n,cx:()=>s}),t(15424);var a=t(46242);(0,a.$)("acdcae45394cfc0da999fe6884a4da2664cda181");var s=(0,a.$)("481ef188fb9d8fd9d53b1f3aa02fb914ce5bcbfb");(0,a.$)("52ee6ceed72bf833aec2950c2452db2ee07ab561");var n=(0,a.$)("547d5aedb246b08746d219ba85522d837c74a18b")},13674:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var a=t(19510),s=t(71159),n=t(68570);let c=(0,n.createProxy)(String.raw`C:\Users\dhgupta\Desktop\HRSquared\src\app\user\feedback\feedbackForm.tsx`),{__esModule:d,$$typeof:o}=c;c.default;let i=(0,n.createProxy)(String.raw`C:\Users\dhgupta\Desktop\HRSquared\src\app\user\feedback\feedbackForm.tsx#default`);function l(){return a.jsx(s.Suspense,{fallback:(0,a.jsxs)("div",{className:"fixed top-0 left-0 w-screen h-screen z-[99999999999999] flex flex-col items-center justify-center bg-black/40",children:[a.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"})," "]}),children:a.jsx(i,{})})}},59102:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d,metadata:()=>c});var a=t(19510),s=t(24890),n=t(33266);let c={title:"Next.js",description:"Generated by Next.js"};function d({children:e}){return a.jsx("html",{lang:"en",children:(0,a.jsxs)("body",{children:[a.jsx(s.ZP,{}),e,a.jsx(n.Z,{})]})})}},63258:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GetFeedbacks:()=>o,GetUserFeedbacks:()=>l,MarkViewed:()=>i,addFeedback:()=>d});var a=t(27745);t(26461);var s=t(74739),n=t(94054),c=t(29115);async function d(e){console.log("hello add feedback"),console.log(e);let r=await (0,c.getUserIdFromClerkId)(e.userId),t=await (0,n.dbConnect)();try{let a={text:"insert into feedbacks (title, description, createdby, isanon) values ($1, $2, $3, $4)",values:[e.title,e.description,r,e.anonymous]};return await t.query(a),!0}catch(e){return console.log(e),t.end(),!1}}async function o(e){let r=await (0,n.dbConnect)();try{let t;t=e?`select feedbacks.*,
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
            on feedbacks.createdby = users.id`,t=`${t} ORDER BY createdat DESC`;let a=await r.query(t);if(a.rowCount>0)return a.rows;(0,s.notFound)()}catch(e){return r.end(),!1}}async function i(e){let r=await (0,n.dbConnect)();try{return await r.query({text:"update feedbacks set viewed = true where id = $1",values:[e]}),!0}catch(e){return r.end(),!1}}async function l(e,r){let t=await (0,n.dbConnect)(),a=await (0,c.getUserIdFromClerkId)(e);try{let e;e=r?`select feedbacks.*,
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
            on feedbacks.createdby = users.id where users.id=$1`;let s={text:`${e} ORDER BY createdat DESC`,values:[a]};return e=`${e} ORDER BY createdat DESC`,(await t.query(s)).rows}catch(e){console.log("**************************"),console.log(e),(0,s.notFound)()}}(0,t(85723).ensureServerEntryExports)([d,o,i,l]),(0,a.registerServerReference)("481ef188fb9d8fd9d53b1f3aa02fb914ce5bcbfb",d),(0,a.registerServerReference)("52ee6ceed72bf833aec2950c2452db2ee07ab561",o),(0,a.registerServerReference)("547d5aedb246b08746d219ba85522d837c74a18b",i),(0,a.registerServerReference)("acdcae45394cfc0da999fe6884a4da2664cda181",l)},94054:(e,r,t)=>{"use strict";let a;t.d(r,{dbConnect:()=>d});var s=t(35900);let{Pool:n}=t.n(s)(),c=new n({user:"tmsdb_stli_user",password:"e9xMpaWVMWOG6mepVfFQd8uY6XaUDv4F",host:"dpg-cof58cocmk4c7380j3l0-a.oregon-postgres.render.com",database:"tmsdb_stli",ssl:!0}),d=async()=>a||(a=await c.connect())},29115:(e,r,t)=>{"use strict";t.r(r),t.d(r,{checkUserExistence:()=>b,checkUserPermissionForSurvey:()=>y,createUser:()=>f,getAllUsers:()=>d,getAllUsersToAssign:()=>o,getUserById:()=>i,getUserFromDb:()=>c,getUserIdFromClerkId:()=>g,getUsersFormData:()=>u,updateUserRoleMapping:()=>l,userCreationFlow:()=>p});var a=t(27745);t(26461);var s=t(74739),n=t(94054);async function c(e,r){let t={text:`select u.id, u.username, u.email, r.rolename
        from users u
        left join userrole_mapping um
        on u.id = um.user_id
        left join roles r
        on um.role_id = r.id
        where u.email=$1 and password=$2;`,values:[e,r]},a=await (0,n.dbConnect)(),c=await a.query(t);if(c.rowCount>0)return c.rows;(0,s.notFound)()}async function d(){let e=`
    select users.id, users.username, users.email, roles.rolename, groups.groupname, category.categoryname, um.can_create_survey
    from userrole_mapping um
    left join users on users.id = um.user_id
    left join roles on roles.id = um.role_id
    left join groups on groups.id = um.group_id
    left join category on category.id = um.category_id
    where users.isActive = true;`,r=await (0,n.dbConnect)(),t=await r.query(e);if(t.rowCount>0)return t.rows;(0,s.notFound)()}async function o(){let e=await (0,n.dbConnect)(),r=await e.query("select u.id, u.username, u.email from users u;");if(r.rowCount>0)return r.rows;(0,s.notFound)()}async function i(e){let r={text:`
        select users.id, users.username, users.email, roles.rolename, groups.groupname, category.categoryname, um.can_create_survey
        from userrole_mapping um
        left join users on users.id = um.user_id
        left join roles on roles.id = um.role_id
        left join groups on groups.id = um.group_id
        left join category on category.id = um.category_id
        where users.isActive = true and users.id=$1`,values:[e]},t=await (0,n.dbConnect)(),a=await t.query(r);if(a.rowCount>0)return a.rows;(0,s.notFound)()}async function l(e){let r={text:`update userrole_mapping
    set role_id=$1, group_id=$2, category_id=$3,can_create_survey=$4
    where user_id=$5`,values:[e.role_id,e.group_id,e.category_id,e.can_create_survey,e.user_id]};try{let e=await (0,n.dbConnect)();await e.query(r)}catch(e){console.log(e),(0,s.notFound)()}}async function u(){let e=await (0,n.dbConnect)(),r=await e.query("select * from roles"),t=await e.query("select * from groups"),a=await e.query("select * from category");return{roles:r.rows,groups:t.rows,categories:a.rows}}async function f(e){let r=await (0,n.dbConnect)(),t={text:"insert into users (username, email, password, isactive, clerk_id) values ($1, $2, $3, $4, $5)",values:[e.username,e.email,e.password,e.isactive,e.clerk_id]};return(await r.query(t)).rows}async function b(e){let r=await (0,n.dbConnect)();return 0!=(await r.query({text:"select clerk_id from users where clerk_id=$1",values:[e]})).rows.length&&(console.log("user already exists"),!0)}async function m(e){if(!e)return;let r={username:`${e.firstName} ${e.lastName}`,email:`${e.emailAddresses[0].emailAddress}`,password:"clerk",isactive:!0,clerk_id:e.id};console.log(r),f(r)}async function p(e){if(e||console.log("user does not exist"),!await b(e.id))return m(e),"creating user"}async function g(e){let r=await (0,n.dbConnect)(),t=await r.query({text:'select id from "users" where clerk_id=$1',values:[e]});return null==t.rows[0].id?1:t.rows[0].id}async function y(e,r){if(null==r)return(0,s.notFound)();let t=await (0,n.dbConnect)(),a=await g(r);console.log("permission actual user id: ",a);let c=await t.query({text:"select category from surveys where id=$1",values:[e]});if(c.rows[0]?.category==null)return!0;let d={text:`select urm.id 
    from userrole_mapping urm
    join surveys s on s.category = urm.group_id
    where urm.user_id = $1  and s.id = $2
    `,values:[a,e]},o=await t.query(d);return console.log("***************this is result",o),o.rowCount>0}(0,t(85723).ensureServerEntryExports)([c,d,o,i,l,u,f,b,p,g,y]),(0,a.registerServerReference)("e2efa07395f6b5eef3b6d2f6bae60b4780d1f3ed",c),(0,a.registerServerReference)("ad3fa980eb29ddc5515b6c81a8dd845a5595ed1c",d),(0,a.registerServerReference)("c3efeaa8e756ca8251d4d7c13b18b0fc263ca573",o),(0,a.registerServerReference)("e2140fb79d9b1206cc77a6622598a189ef464d00",i),(0,a.registerServerReference)("c5c87f63730f10b32f23532552f606c5ce927141",l),(0,a.registerServerReference)("c44f796dddee508d2690c0a56bfa35105b4ef06e",u),(0,a.registerServerReference)("3b9f5381daf25ec350eef41c4522b870a90edcf5",f),(0,a.registerServerReference)("ae096b2f57a48498d952cabcd0d481c0bea6f80f",b),(0,a.registerServerReference)("9e55bf1e1fc4c00ed7818ab82e1f39f596a869a4",p),(0,a.registerServerReference)("08893cc7b3568853778612b7009d9e0295b3d182",g),(0,a.registerServerReference)("605fbd3cfa84bd30ec8d022f83bc673e1209f363",y)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[377,42,913,621,341,512,843,354],()=>t(70847));module.exports=a})();