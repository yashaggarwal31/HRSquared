import React, { Suspense } from 'react'
import SurveyResponse from './ResponsePage'
import { GetResponseById } from '@/lib/surveys';

async function Response({responseID}){
    const response = await GetResponseById(responseID);

    console.log('this is resposne ', response[0])

    return <SurveyResponse response={response[0]['response_data']}></SurveyResponse>
}

export default function SurveySingleResponsePage({params}:{params:any}) {
    // console.log(params['response'])
  return (
    <>
    <Suspense fallback={<p className={'text-center animate-bounce'}>Fetching Surveys Responses...</p>}>
      <Response responseID={params['response']}/>
    </Suspense>
    </>
  )
}
