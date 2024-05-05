import { GetSurveyResponses, getSurveyById, responsesToJson, createJsonFromLabels, jsonToCsv } from '@/lib/surveys';
import React, { Suspense } from 'react'
import ResponseToCSV from './ResponseToCSV';

let surveyID;
let title;
let description;



export async function ResponseDownloader(){

    console.log(surveyID)
    const surveyData = await getSurveyById(surveyID);
    console.log('SurveyDATATATATA ', surveyData[0].surveyfields)
    const JsonWithLabelSeqArr = await createJsonFromLabels(surveyData[0].surveyfields);


    const formFields = surveyData[0].surveyfields;
    const titles = surveyData[0].title;
    title = titles.split('%!@')[0];
    description=titles.split('%!@')[1];


    const surveyResponseData = await GetSurveyResponses(surveyID);
    // console.log('Survey Response Data: ', surveyResponseData)

    const responseJson = await responsesToJson(formFields,surveyResponseData,JsonWithLabelSeqArr);

    const csv = await jsonToCsv(responseJson);

    
    return <ResponseToCSV csv={csv}/>

    //get surveyResponses by id
    //take one response and make the base fields (title fields)
    //for other responses use answers only since sequence will be the same
    //convert created json to csv on client side and return that client side component button

}

export default function DownloadResponses(props) {
    surveyID = props['params'].download;
    console.log('surveyID::',surveyID)
  return (
    <Suspense fallback={<p className='animate-bounce'>Collecting all responses for you...</p>}>
        <ResponseDownloader/>
    </Suspense>
  )
}
