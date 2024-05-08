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

  // console.log('This is user', user['emailAddresses'][0].emailAddress);
  console.log('This is user', user['privateMetadata']['db-id']);
  // Use `user` to render user details or create UI elements
}