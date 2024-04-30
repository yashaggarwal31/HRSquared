import React, { Suspense } from 'react'
import UserSurveyList from './UserSurveyList'
import { getRecentSurveys } from '@/lib/surveys';

async function UserSurveys(){

    const surveyData = await getRecentSurveys();

    console.log('users page, survey data: ',surveyData)

    return <UserSurveyList surveyData={surveyData}/>
}


export default function SurveyPage() {
  return (
    <div>
      <Suspense fallback={<p className={'text-center animate-bounce'}>Fetching Surveys...</p>}>
        <UserSurveys/>
      </Suspense>
    </div>
  )
}
