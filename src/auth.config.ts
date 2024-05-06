import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
    signOut:'/signout'
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      
      return '/admin/dashboard';
    },
    authorized({ auth, request: { nextUrl } }) {
       

      const isLoggedIn = !!auth?.user;
      return true;
     
        if(isLoggedIn) return Response.redirect(new URL('/admin/dashboard'));
      
      
      //remove this customize for admin
    console.log('middleware')
      // const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/admin');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;