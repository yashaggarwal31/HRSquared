(()=>{var e={};e.id=931,e.ids=[931],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},86080:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>d,originalPathname:()=>p,pages:()=>l,routeModule:()=>x,tree:()=>u}),r(35480),r(32029),r(35866);var s=r(23191),n=r(88716),a=r(37922),i=r.n(a),o=r(95231),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);r.d(t,c);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,35480)),"D:\\EX2Projects\\CurrentProjects\\HRSQUARED\\HRSquared\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,32029)),"D:\\EX2Projects\\CurrentProjects\\HRSQUARED\\HRSquared\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["D:\\EX2Projects\\CurrentProjects\\HRSQUARED\\HRSquared\\src\\app\\page.tsx"],p="/page",d={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},33886:(e,t,r)=>{let s={"826800917334aa83443215e717c189fa8995a73a":()=>Promise.resolve().then(r.bind(r,35480)).then(e=>e.$$ACTION_0)};async function n(e,...t){return(await s[e]()).apply(null,t)}e.exports={"826800917334aa83443215e717c189fa8995a73a":n.bind(null,"826800917334aa83443215e717c189fa8995a73a")}},41706:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},53495:()=>{},35303:()=>{},32029:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,metadata:()=>i});var s=r(19510),n=r(25384),a=r.n(n);r(5023);let i={title:"Home",description:"Generated by create next app"};async function o({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:a().className,children:e})})}},35480:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$ACTION_0:()=>c,default:()=>o});var s=r(19510),n=r(24330);r(60166),r(71159);var a=r(75571),i=r(46509);let o=(0,n.j)("826800917334aa83443215e717c189fa8995a73a",c);async function c(){let e=await (0,a.getServerSession)(i.v);return e.user.token.sub,console.log("ss",e),s.jsx("div",{children:"Welcome!"})}},46509:(e,t,r)=>{"use strict";r.d(t,{v:()=>s}),r(75571);let s={providers:[(0,r(77234).Z)({clientId:"1001501182863-7scpgm229vsc87dvn350klcg117hm9ab.apps.googleusercontent.com",clientSecret:"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"})],callbacks:{session:async({session:e,token:t})=>(console.log(t),e?.user&&(e.user.id=t.sub,e.user.token=t),e),jwt:async({user:e,token:t,account:r})=>(e&&(t.jti=r?.access_token,t.uid=e.id),t)},session:{strategy:"jwt"}}},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(66621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[377,848,923,349,621],()=>r(86080));module.exports=s})();