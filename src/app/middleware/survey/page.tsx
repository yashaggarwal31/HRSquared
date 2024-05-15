'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import Error from '../error';

export default function page() {
    const surveyID = useSearchParams().get('id');
    const router = useRouter();
    if(surveyID){
        //getSurveyCategoryID
        //CheckIFUserBelongsToThatCategory
        //If yes route to the page, else dont
        router.push(`/user/survey/${surveyID}`);
    }
  return (
    <div>
        {!surveyID && <Error/>}
    </div>
  )
}
