import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { auth, currentUser } from "@clerk/nextjs/server";


const isProtectedRoute = createRouteMatcher(['/user(.*)', '/admin(.*)'])

// const isLoginRoute = createRouteMatcher(['/signin'])

async function createUserInDB(){
  const user = await currentUser();
  const userObj = {
    username:`${user.firstName} ${user.lastName}`,
    email:`${user.emailAddresses[0].emailAddress}`,
    password:'clerk',
    isactive:true,
    clerk_id:user.id
  }
}

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();
  
  if(userId){
    //check if user exist in db
    //else create user in db
    // createUserInDB()
  }
  if (isProtectedRoute(req)) auth().protect()

  // if (isLoginRoute(req)) {
  //   const userId = auth()
  //   if (userId == null) {
  //     console.log(userId)
  //     redirect('/user/ticket')
  //   }
  // }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}
