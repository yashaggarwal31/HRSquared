import React, { Suspense } from 'react'
import AdminSurveyResponseList from './AdminSurveyResponseList'
import { GetSurveyResponses } from '@/lib/surveys';

async function AdminSurveyResponses({surveyID}:{surveyID:number}){

  console.log(surveyID)

    const surveyResponseData = await GetSurveyResponses(surveyID);
    console.log('Survey Response Data: ', surveyResponseData)

    return <AdminSurveyResponseList surveyResponseData={surveyResponseData} surveyID={surveyID}/>
}

export default function AdminSurveyPage({params}:{params:any}) {
  return (
    <div>
      <Suspense fallback={<p className={'text-center animate-bounce'}>Fetching Surveys Responses...</p>}>
        <AdminSurveyResponses surveyID={params['view-responses']}/>
      </Suspense>
    </div>
  )
}
