import React, { Suspense } from 'react'
import UserSurveyList from './UserSurveyList'
import { getRecentSurveys } from '@/lib/surveys';

async function UserSurveys(){

    const surveyData = await getRecentSurveys();

    // console.log('users page, survey data: ',surveyData)

    return <UserSurveyList surveyData={surveyData}/>
}


export default function SurveyPage() {
  return (
    <div>
      <Suspense fallback={<div className="fixed top-0 left-0 w-screen h-screen z-[99999999999999] flex flex-col items-center justify-center bg-black/40">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div> <h3>Fetching Surveys ...</h3> </div>}>
        <UserSurveys/>
      </Suspense>
    </div>
  )
}
