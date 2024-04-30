import React, { Suspense } from 'react'
import AdminSurveyList from './AdminSurveyList'
import { getRecentSurveys } from '@/lib/surveys';


async function AdminSurveys(){

    const surveyData = await getRecentSurveys();

    return <AdminSurveyList surveyData={surveyData}/>
}

export default function AdminSurveyPage() {
  return (
    <div>
      <Suspense fallback={<p className={'text-center animate-bounce'}>Fetching Surveys...</p>}>
        <AdminSurveys/>
      </Suspense>
    </div>
  )
}
