(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[972,91],{63005:function(e,s,t){Promise.resolve().then(t.bind(t,49455))},16463:function(e,s,t){"use strict";var r=t(71169);t.o(r,"useParams")&&t.d(s,{useParams:function(){return r.useParams}}),t.o(r,"usePathname")&&t.d(s,{usePathname:function(){return r.usePathname}}),t.o(r,"useRouter")&&t.d(s,{useRouter:function(){return r.useRouter}}),t.o(r,"useSearchParams")&&t.d(s,{useSearchParams:function(){return r.useSearchParams}})},49455:function(e,s,t){"use strict";var r=t(57437),a=t(2265),n=t(87138),d=t(16463),u=t(10741),i=t(66648);s.default=()=>{let e=(0,d.useRouter)(),s=(0,d.usePathname)(),[t,m]=(0,a.useState)(()=>!s.includes("admin"));return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("nav",{className:"bg-sky-950",children:(0,r.jsx)("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"relative flex h-16 items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",children:[(0,r.jsx)("div",{className:"flex flex-shrink-0 items-center",children:(0,r.jsx)(i.default,{width:100,height:100,className:"w-auto h-7 sm:h-8",src:"https://merakiui.com/images/logo.svg",alt:""})}),(0,r.jsx)("div",{className:"hidden sm:ml-6 sm:block",children:(0,r.jsx)("div",{className:"flex space-x-4",children:t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.default,{href:"/user/ticket",className:"rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:"Tickets"}),(0,r.jsx)(n.default,{href:"/user/feedback",className:"rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:"Feedbacks"}),(0,r.jsx)(n.default,{href:"/user/survey",className:"rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer",children:"Surveys"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.default,{href:"/admin/dashboard",className:"rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer",children:"DashBoard"}),(0,r.jsx)(n.default,{href:"/admin/ticket",className:"rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:"Tickets"}),(0,r.jsx)(n.default,{href:"/admin/feedback",className:"rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:"Feedbacks"}),(0,r.jsx)(n.default,{href:"/admin/survey",className:"rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:"Surveys"}),(0,r.jsx)(n.default,{href:"/admin/manage-users",className:"rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white",children:"Manange Users"})]})})})]}),(0,r.jsxs)("button",{className:"rounded-md min-w-20 bg-gray-700 px-3 py-2 mx-10 text-sm font-medium text-gray-200 hover:bg-gray-950 hover:text-white",onClick:function(){if(s.includes("user")){if(s.includes("feedback"))e.push("/admin/feedback");else if(s.includes("survey"))e.push("/admin/survey");else{let t=s.replace("user","admin");e.push(t)}}else if(s.includes("admin")){if(s.includes("dashboard")||s.includes("manage-users"))e.push("/user/ticket");else if(s.includes("survey"))e.push("/user/survey");else{let t=s.replace("admin","user");e.push(t)}}},children:["SWITCH TO ",t&&(0,r.jsx)(r.Fragment,{children:"ADMIN"})||(0,r.jsx)(r.Fragment,{children:"USER"})]}),(0,r.jsx)(u.l8,{})]})})})})}}},function(e){e.O(0,[741,138,648,971,23,744],function(){return e(e.s=63005)}),_N_E=e.O()}]);