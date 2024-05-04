import NextAuth from 'next-auth'
import { authConfig } from '@/auth.config'
import { NextResponse } from 'next/server'
import { auth } from "@/app/auth"

export default NextAuth(authConfig).auth
 
export async function middleware(request) {
  const path = request.nextUrl.pathname;

    const session = await auth();
    if (!session) {
        return NextResponse.redirect(new URL('/login', request.url))
    } else if (session && (path === '/login' || path === '/signup')) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
  
}

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/admin/(.*)','/user/(.*)']
}
 
//   if (request.nextUrl.pathname.startsWith('/admin')) {
//     return NextResponse.rewrite(new URL('/login', request.url))
//   }
// }
