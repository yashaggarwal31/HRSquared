import React from 'react'
import { auth, currentUser } from "@clerk/nextjs/server";
import { userCreationFlow } from "@/lib/users";


export default function AuthHelper() {
    const { userId } = auth();

  async function checkDBforUser(){
    const user = await currentUser();
    // const userObj = {
    //   username:`${user.firstName} ${user.lastName}`,
    //   email:`${user.emailAddresses[0].emailAddress}`,
    //   password:'clerk',
    //   isactive:true,
    //   clerk_id:user.id
    // }
    // console.log()
    // console.log('user id: ', user)
    userCreationFlow(user);

  }
  
  if(userId){
    //check if user exist in db
    //else create user in db
    
    checkDBforUser()
  }

  return (
    <></>
  )
}
