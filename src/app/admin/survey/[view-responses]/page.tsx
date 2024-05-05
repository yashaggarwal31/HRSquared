import React, { Suspense } from 'react'
import AdminSurveyResponseList from './AdminSurveyResponseList'
import { GetSurveyResponses, getSurveyById } from '@/lib/surveys';
import Link from 'next/link';
import DownloadResponses from '../download-responses/[download]/page';



async function AdminSurveyResponses({surveyID}:{surveyID:number}){
  

    console.log(surveyID)
    const surveyData = await getSurveyById(surveyID);
    const formFields = surveyData[0].surveyfields;
    const title = surveyData[0].title;

    const surveyResponseData = await GetSurveyResponses(surveyID);
    // console.log('Survey Response Data: ', surveyResponseData)

    return <AdminSurveyResponseList surveyResponseData={surveyResponseData} surveyID={surveyID} title={title} formFields={formFields}/>
}

export default function AdminSurveyPage({params}:{params:any}) {
  

  const surveyID = params['view-responses'];
  return (
    <div className="mb-8 mt-12 flex flex-col gap-12 ">
      <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="flex justify-between relative mx-4 -mt-6 mb-8 rounded-xl bg-gradient-to-tr from-blue-900 to-blue-800 bg-clip-border p-6 text-white shadow-lg shadow-gray-900/20">
          <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-white antialiased">
            Survey Responses
          </h6>
          <Link href={`download-responses/${surveyID}`} target="_blank" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">
            Export Responses to Excel
          </Link>
          
        </div>

        <Suspense fallback={<p className={'text-center animate-bounce'}>Fetching Surveys Responses...</p>}>
            <AdminSurveyResponses surveyID={params['view-responses']}/>
        </Suspense>
      
      </div>
    </div>
          
     
  )
}
