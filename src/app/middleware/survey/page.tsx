'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import Error from '../error';
import { useUser } from "@clerk/clerk-react";
import { checkUserPermissionForSurvey } from '@/lib/users';


export default function page() {
  const {user} = useUser();
    const surveyID = useSearchParams().get('id');
    const router = useRouter();
    const [showError,setShowError] = useState(false);
    console.log(surveyID)
    console.log(user)

    if(!user){
      console.log('no user')
    }

    if(surveyID){
        if(checkUserPermissionForSurvey(surveyID, user.id?user.id:null)){
          console.log('pushed')
          router.push(`/user/survey/${surveyID}`);
        }
        else{
          console.log('user id not allowed not found')
          // setShowError(true);
        }
        //CheckIFUserBelongsToThatCategory
        //If yes route to the page, else dont
    }
    else{
      console.log('userid found')
      // setShowError(true)
    }
  return (
    <div>
        {showError && <Error/>}
    </div>
  )
}
