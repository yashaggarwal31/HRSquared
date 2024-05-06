// import { authConfig } from '@/auth.config'
// import NextAuth from 'next-auth'
// const {auth} = NextAuth(authConfig);


import { auth } from "@/app/auth"

export default auth((req) => {
  const {nextUrl} = req;
  const isLoggedIn = !!req.auth;
  if (!isLoggedIn && nextUrl.pathname!==('/login')) {
    console.log('No Sessiond')
    // const url = req.url.replace(req.nextUrl.pathname, "/login")
    // return Response.redirect(url)
  }
  else console.log('Session yes')
})

// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/admin/(.*)', '/user/(.*)']
// }






// import NextAuth from 'next-auth'
// import { authConfig } from '@/auth.config'
// import { NextResponse } from 'next/server'
// import { auth } from '@/app/auth'

// export default NextAuth(authConfig).auth

// export async function middleware (request) {
//   const path = request.nextUrl.pathname
//   let session = await auth()
//   if (!session) {
//     console.log('No Session')
//     // if (request.url === '/') request.url = '/user/ticket'
//     return NextResponse.redirect(new URL('/login', request.url))
//   } else if (session && (path === '/login' || path === '/login')) {
//     return NextResponse.redirect(new URL('/user/ticket'))
//   } else {
//     console.log('Session is defined')
//   }
//   return NextResponse.next()
// }

// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/admin/(.*)', '/user/(.*)']
// }

// //   if (request.nextUrl.pathname.startsWith('/admin')) {
// //     return NextResponse.rewrite(new URL('/login', request.url))
// //   }
// // }
