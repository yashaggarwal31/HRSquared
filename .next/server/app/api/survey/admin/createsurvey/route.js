"use strict";(()=>{var e={};e.id=318,e.ids=[318],e.modules={98860:e=>{e.exports=require("jsdom")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},35900:e=>{e.exports=require("pg")},81204:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>m,patchFetch:()=>v,requestAsyncStorage:()=>l,routeModule:()=>c,serverHooks:()=>x,staticGenerationAsyncStorage:()=>y});var s={};r.r(s),r.d(s,{POST:()=>d});var a=r(49303),o=r(88716),n=r(60670),i=r(87070),u=r(35592),p=r(92153);async function d(e){let t;console.log("hello");let r=await e.json();if(t=r.created_by,!r.title||"string"!=typeof r.title)return i.NextResponse.json({status:400,statusText:"title is not defined or is not a string"},{status:400});if(("number"!=typeof r.created_by||isNaN(r.created_by))&&(t=await (0,p.getUserIdFromClerkId)(r.created_by)),!r.closes_at||"string"!=typeof r.closes_at)return i.NextResponse.json({status:400,statusText:"closes_at is not defined or is not a string"},{status:400});let s=await (0,u.AddSurvey)(r,t);return console.log(s),i.NextResponse.json({Response:s})}let c=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/survey/admin/createsurvey/route",pathname:"/api/survey/admin/createsurvey",filename:"route",bundlePath:"app/api/survey/admin/createsurvey/route"},resolvedPagePath:"D:\\EX2Projects\\CurrentProjects\\HRSQUARED\\HRSquared\\src\\app\\api\\survey\\admin\\createsurvey\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:l,staticGenerationAsyncStorage:y,serverHooks:x}=c,m="/api/survey/admin/createsurvey/route";function v(){return(0,n.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:y})}}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[377,848,573,592],()=>r(81204));module.exports=s})();