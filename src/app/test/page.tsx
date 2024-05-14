import { createUser } from "@/lib/users";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Page() {

  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();

  // if (userId) {
  //   // Query DB for user specific information or display assets only to signed in users
  // }

  console.log("this is userId", userId);

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser()
  console.log('this is user: ', user)

  // console.log('This is user', user['emailAddresses'][0].emailAddress);
  console.log('This is user', user['privateMetadata']['db-id']);
  // Use `user` to render user details or create UI elements

  async function createUserInDB(){
    const user = await currentUser();
    const userObj = {
      username:`clerkTest`,
      email:`clerkTest@123`,
      password:'clerk',
      isactive:true,
      clerk_id:'12323rfcfdf'
    }
    createUser(userObj)
  }

  createUserInDB();

  return<>
  <h1>Test Page</h1>
  </>
}