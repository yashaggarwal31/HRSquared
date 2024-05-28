"use strict";(()=>{var e={};e.id=121,e.ids=[121],e.modules={98860:e=>{e.exports=require("jsdom")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},35900:e=>{e.exports=require("pg")},15263:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>p,patchFetch:()=>g,requestAsyncStorage:()=>f,routeModule:()=>d,serverHooks:()=>y,staticGenerationAsyncStorage:()=>m});var s={};t.r(s),t.d(s,{POST:()=>c,dynamic:()=>l});var a=t(49303),o=t(88716),n=t(60670),u=t(87070),i=t(35592);let l="force-dynamic";async function c(e){let r=await e.json();if("number"!=typeof r.survey_id||isNaN(r.survey_id))return u.NextResponse.json({status:400,statusText:"survey_id is not a number or is undefined"},{status:400});let t=await (0,i.addUserResponse)(r);return u.NextResponse.json({Response:t},{status:t.status})}let d=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/survey/fillsurvey/route",pathname:"/api/survey/fillsurvey",filename:"route",bundlePath:"app/api/survey/fillsurvey/route"},resolvedPagePath:"C:\\Users\\dhgupta\\Desktop\\HRSquared\\src\\app\\api\\survey\\fillsurvey\\route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:f,staticGenerationAsyncStorage:m,serverHooks:y}=d,p="/api/survey/fillsurvey/route";function g(){return(0,n.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:m})}},49303:(e,r,t)=>{e.exports=t(30517)},24925:(e,r,t)=>{let s;t.d(r,{C:()=>u});var a=t(35900);let{Pool:o}=t.n(a)(),n=new o({user:"tmsdb_stli_user",password:"e9xMpaWVMWOG6mepVfFQd8uY6XaUDv4F",host:"dpg-cof58cocmk4c7380j3l0-a.oregon-postgres.render.com",database:"tmsdb_stli",ssl:!0}),u=async()=>s||(s=await n.connect())},35592:(e,r,t)=>{t.r(r),t.d(r,{AddSurvey:()=>l,GetResponseById:()=>d,GetSurveyResponses:()=>c,addUserResponse:()=>m,createJsonFromLabels:()=>y,getGroups:()=>w,getRecentSurveys:()=>u,getSurveyById:()=>f,getUserSurveys:()=>i,jsonToCsv:()=>g,responsesToJson:()=>p});var s=t(24330);t(60166);var a=t(24925),o=t(98860),n=t(92153);async function u(){let e=await (0,a.C)(),r={text:`
      SELECT s.id AS survey_id, 
      s.title AS survey_title,
      s.createdat AS created_at,
      s.closes_at as closes_at,
      c.groupname as category,
      u.username AS creator_name,
      COUNT(sr.id) AS total_responses
      FROM surveys s
      LEFT JOIN surveyresponses sr ON s.id = sr.survey_id
      LEFT JOIN users u ON s.createdby = u.id
      LEFT JOIN "groups" c ON c.id = s.category
      GROUP BY s.id, s.title, s.createdat,c.groupname, u.username
      ORDER BY s.id DESC;
        `};return(await e.query(r)).rows}async function i(e){let r=await (0,a.C)(),t={text:`
    SELECT
    s.id AS survey_id,
    s.title AS survey_title,
    s.createdat AS created_at,
    s.closes_at AS closes_at,
    gr.groupname AS category,
    u.username AS creator_name
    FROM
        surveys s
    LEFT JOIN
        "userrole_mapping" urm ON urm.group_id = s.category
    LEFT JOIN
        "users" u ON u.id = urm.user_id
    LEFT JOIN
        "groups" gr ON gr.id = s.category
    WHERE
        (u.id = $1 OR s.category IS NULL)
    GROUP BY
        s.id, s.title, s.createdat, s.closes_at, gr.groupname, u.username
    ORDER BY
        s.id DESC;
      `,values:[await (0,n.getUserIdFromClerkId)(e)]};return(await r.query(t)).rows}async function l(e,r){let t=await (0,a.C)();try{console.log(e);let s=JSON.stringify(e.survey_fields),a={text:"insert into surveys (title, surveyfields, createdby, closes_at, category,survey_img) values ($1, $2, $3, $4, $5, $6)",values:[e.title,s,r,e.closes_at,e.category,e.survey_img]};console.log(a);let o=await t.query(a);return console.log(o),{status:200,statusText:`${o.command} completed successfully`,result:o}}catch(e){return{error:e,status:500,statusText:"Internal server error",message:e.message,data:null}}}async function c(e){let r=await (0,a.C)();try{let t={text:`select sr.id, u.username, sr.response_data, sr.createdat
      from surveyresponses sr 
      join users u
      on sr.user_id = u.id
      where sr.survey_id = $1; 
      `,values:[e]};return(await r.query(t)).rows}catch(e){return console.log(e),"error fetching"}}async function d(e){let r=await (0,a.C)();try{return(await r.query({text:"select * from surveyresponses where id = $1",values:[e]})).rows}catch(e){return console.log(e),"Error Fetching"}}async function f(e){let r=await (0,a.C)();try{return(await r.query({text:"select * from surveys where id = $1",values:[e]})).rows}catch(e){return console.log(e),"Error Fetching"}}async function m(e){let r=await (0,a.C)(),t=await (0,n.getUserIdFromClerkId)(e.user_id),s=JSON.stringify(e.response_data),o={text:"insert into surveyresponses (user_id, survey_id, response_data) values ($1, $2, $3)",values:[t,e.survey_id,s]};try{return await r.query(o)}catch(e){return"Error Fetching Data"}}async function y(e){let r=[],t={},s=[];return e.forEach(e=>{switch(e.label=e.label.trim(),s.push(e.label),e.type){case 0:case 1:t[e.label]=[];break;case 2:t[e.label]=[];case 5:case 3:t[e.label]=[]}}),r.push(s),r.push(t),console.log("our json !!!!",r),r}async function p(e,r,t){let s=t[1],a=t[0],n=0;for(let t of r){let r=JSON.parse(t=t.response_data);e=r[r.length-1].htmlString;let u=new o.JSDOM(e).window.document;for(let e of r)if(e.id){let r=u.querySelector(`#${e.id}`);if(r){let t,a,o,u;switch(r.type){case"text":t=(t=r.parentElement.firstChild.textContent).trim(),a=e.answer,t&&s[t]&&(s[t][n]=a);break;case"checkbox":t=(t=r.parentElement.parentElement.parentElement.firstChild.textContent).trim(),a=r.value,t&&s[t]&&(s[t][n]||(s[t][n]=[]),s[t][n].push(a));break;case"radio":o=(o=r.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.firstChild.textContent).trim(),u=(u=r.parentElement.parentElement.firstChild.textContent).trim(),a=r.value,t&&s[o][u]&&(s[o][u][n]=a);break;case"file":if(!e.answer){r.value="No file uploaded";continue}t=(t=r.parentElement.parentElement.firstChild.textContent).trim(),a=e.answer,t&&s[t]&&(s[t][n]=a);break;case"date":t=(t=r.parentElement.parentElement.firstChild.textContent).trim(),a=e.answer,t&&s[t]&&(s[t][n]=a);break;case"select-one":t=(t=r.parentNode.firstChild.textContent).trim(),a=e.answer,t&&s[t]&&(s[t][n]=a)}console.log("radio: ",o,"radio2",u,"JsonData ",s[o]),console.log("Label: ",t),console.log("Value: ",a)}}a.forEach(e=>{s[e][n]||(s[e][n]="n/a")}),n++}return console.log("Final JSONNNNN**********\n"),console.log(s),s}async function g(e){let r=Object.keys(e),t=r.join(",")+"\n",s=Math.max(...Object.values(e).map(e=>e.length));for(let a=0;a<s;a++)t+=r.map(r=>{let t=e[r];if(!(a<t.length))return'"n/a"';{let e=t[a];return Array.isArray(e)?`"${e.join("&")}"`:`"${e}"`}}).join(",")+"\n";return t}async function w(){let e=await (0,a.C)();return(await e.query("select * from groups")).rows}(0,t(40618).h)([u,i,l,c,d,f,m,y,p,g,w]),(0,s.j)("21e7f294fdf72e2909246d57f030821d1906acf8",u),(0,s.j)("23a6ab29ce2efdd84e7b6766ea700509da61cc7b",i),(0,s.j)("9da402cff7400ce570085b06bcce7f00964b21bf",l),(0,s.j)("1a04dd6aa70ee4b256fc611cfe8d48d49202deda",c),(0,s.j)("729b22647c0465584a99a1f9ef1c68f2d4a46663",d),(0,s.j)("3058ea433f829e772aa8835b885e03ddb0388ddc",f),(0,s.j)("36e269b5631775cd32cc25864455f5f99b65ffe8",m),(0,s.j)("1b68b974af1be2782b2742aa21cf18bea3d72bd8",y),(0,s.j)("3fba84b1fbd22c0a74a7dd62708154c3aecb36f4",p),(0,s.j)("935aef0941bfb58bede8245cde49877475d31734",g),(0,s.j)("596dc9554f70aab13c4e300b62e4346251a53b77",w)},92153:(e,r,t)=>{t.r(r),t.d(r,{checkUserExistence:()=>m,checkUserPermissionForSurvey:()=>w,createUser:()=>f,getAllUsers:()=>u,getAllUsersToAssign:()=>i,getUserById:()=>l,getUserFromDb:()=>n,getUserIdFromClerkId:()=>g,getUsersFormData:()=>d,updateUserRoleMapping:()=>c,userCreationFlow:()=>p});var s=t(24330);t(60166);var a=t(58585),o=t(24925);async function n(e,r){let t={text:`select u.id, u.username, u.email, r.rolename
        from users u
        left join userrole_mapping um
        on u.id = um.user_id
        left join roles r
        on um.role_id = r.id
        where u.email=$1 and password=$2;`,values:[e,r]},s=await (0,o.C)(),n=await s.query(t);if(n.rowCount>0)return n.rows;(0,a.notFound)()}async function u(){let e=`
    select users.id, users.username, users.email, roles.rolename, groups.groupname, category.categoryname, um.can_create_survey
    from userrole_mapping um
    left join users on users.id = um.user_id
    left join roles on roles.id = um.role_id
    left join groups on groups.id = um.group_id
    left join category on category.id = um.category_id
    where users.isActive = true;`,r=await (0,o.C)(),t=await r.query(e);if(t.rowCount>0)return t.rows;(0,a.notFound)()}async function i(){let e=await (0,o.C)(),r=await e.query("select u.id, u.username, u.email from users u;");if(r.rowCount>0)return r.rows;(0,a.notFound)()}async function l(e){let r={text:`
        select users.id, users.username, users.email, roles.rolename, groups.groupname, category.categoryname, um.can_create_survey
        from userrole_mapping um
        left join users on users.id = um.user_id
        left join roles on roles.id = um.role_id
        left join groups on groups.id = um.group_id
        left join category on category.id = um.category_id
        where users.isActive = true and users.id=$1`,values:[e]},t=await (0,o.C)(),s=await t.query(r);if(s.rowCount>0)return s.rows;(0,a.notFound)()}async function c(e){let r={text:`update userrole_mapping
    set role_id=$1, group_id=$2, category_id=$3,can_create_survey=$4
    where user_id=$5`,values:[e.role_id,e.group_id,e.category_id,e.can_create_survey,e.user_id]};try{let e=await (0,o.C)();await e.query(r)}catch(e){console.log(e),(0,a.notFound)()}}async function d(){let e=await (0,o.C)(),r=await e.query("select * from roles"),t=await e.query("select * from groups"),s=await e.query("select * from category");return{roles:r.rows,groups:t.rows,categories:s.rows}}async function f(e){let r=await (0,o.C)(),t={text:"insert into users (username, email, password, isactive, clerk_id) values ($1, $2, $3, $4, $5)",values:[e.username,e.email,e.password,e.isactive,e.clerk_id]};return(await r.query(t)).rows}async function m(e){let r=await (0,o.C)();return 0!=(await r.query({text:"select clerk_id from users where clerk_id=$1",values:[e]})).rows.length&&(console.log("user already exists"),!0)}async function y(e){if(!e)return;let r={username:`${e.firstName} ${e.lastName}`,email:`${e.emailAddresses[0].emailAddress}`,password:"clerk",isactive:!0,clerk_id:e.id};console.log(r),f(r)}async function p(e){if(e||console.log("user does not exist"),!await m(e.id))return y(e),"creating user"}async function g(e){let r=await (0,o.C)(),t=await r.query({text:'select id from "users" where clerk_id=$1',values:[e]});return null==t.rows[0].id?1:t.rows[0].id}async function w(e,r){if(null==r)return(0,a.notFound)();let t=await (0,o.C)(),s=await g(r);console.log("permission actual user id: ",s);let n=await t.query({text:"select category from surveys where id=$1",values:[e]});if(n.rows[0]?.category==null)return!0;let u={text:`select urm.id 
    from userrole_mapping urm
    join surveys s on s.category = urm.group_id
    where urm.user_id = $1  and s.id = $2
    `,values:[s,e]},i=await t.query(u);return console.log("***************this is result",i),i.rowCount>0}(0,t(40618).h)([n,u,i,l,c,d,f,m,p,g,w]),(0,s.j)("e2efa07395f6b5eef3b6d2f6bae60b4780d1f3ed",n),(0,s.j)("ad3fa980eb29ddc5515b6c81a8dd845a5595ed1c",u),(0,s.j)("c3efeaa8e756ca8251d4d7c13b18b0fc263ca573",i),(0,s.j)("e2140fb79d9b1206cc77a6622598a189ef464d00",l),(0,s.j)("c5c87f63730f10b32f23532552f606c5ce927141",c),(0,s.j)("c44f796dddee508d2690c0a56bfa35105b4ef06e",d),(0,s.j)("3b9f5381daf25ec350eef41c4522b870a90edcf5",f),(0,s.j)("ae096b2f57a48498d952cabcd0d481c0bea6f80f",m),(0,s.j)("9e55bf1e1fc4c00ed7818ab82e1f39f596a869a4",p),(0,s.j)("08893cc7b3568853778612b7009d9e0295b3d182",g),(0,s.j)("605fbd3cfa84bd30ec8d022f83bc673e1209f363",w)}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[377,42,341],()=>t(15263));module.exports=s})();