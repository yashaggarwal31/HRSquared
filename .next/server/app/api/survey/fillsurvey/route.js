"use strict";(()=>{var e={};e.id=121,e.ids=[121],e.modules={98860:e=>{e.exports=require("jsdom")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},35900:e=>{e.exports=require("pg")},49798:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>x,patchFetch:()=>m,requestAsyncStorage:()=>c,routeModule:()=>l,serverHooks:()=>y,staticGenerationAsyncStorage:()=>v});var s={};t.r(s),t.d(s,{POST:()=>d,dynamic:()=>p});var n=t(49303),u=t(88716),a=t(60670),i=t(87070),o=t(35592);let p="force-dynamic";async function d(e){let r=await e.json();if("number"!=typeof r.survey_id||isNaN(r.survey_id))return i.NextResponse.json({status:400,statusText:"survey_id is not a number or is undefined"},{status:400});let t=await (0,o.addUserResponse)(r);return i.NextResponse.json({Response:t},{status:t.status})}let l=new n.AppRouteRouteModule({definition:{kind:u.x.APP_ROUTE,page:"/api/survey/fillsurvey/route",pathname:"/api/survey/fillsurvey",filename:"route",bundlePath:"app/api/survey/fillsurvey/route"},resolvedPagePath:"D:\\EX2Projects\\CurrentProjects\\HRSQUARED\\HRSquared\\src\\app\\api\\survey\\fillsurvey\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:c,staticGenerationAsyncStorage:v,serverHooks:y}=l,x="/api/survey/fillsurvey/route";function m(){return(0,a.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:v})}}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[377,848,573,592],()=>t(49798));module.exports=s})();