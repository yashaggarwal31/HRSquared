
import React, { Suspense} from 'react'
import FormFiller from './FormFiller';
import { getSurveyById } from '@/lib/surveys';

let surveyID;

async function SurveyForm({surveyID}){

    const surveyData = await getSurveyById(surveyID);
    const formFields = surveyData[0].surveyfields;
    const title = surveyData[0].title;

    return <>
    <FormFiller surveyFields={formFields} title={title} surveyID={surveyID}/>
    </>

}


export default function FillSurveyPage({params}) {

    let surveyID = params['fill-survey'];

    // const [dataFetched,setDataFetched] = useState(false);
    // const [surveyFields,setSurveyFields] = useState([]);
    // const [title, setTitle] = useState('');

    // const dummyResponse = {
    //     survey_id: 1,
    //     response_data: [{"question":"How would you rate the overall organization of the event?","response":"Good"},{"question":"Did you find the event content relevant and engaging?","response":"Yes"},{"question":"Would you recommend this event to others?","response":"Maybe"}]
    //   }
    //   const submitResponse = async (responseData) => {
    //     console.log("sending with response data: ",responseData);
    //     try {
    //       await fetch(url_add_response, {
    //         method: 'POST',
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(responseData),
    //       })
    //       .then(response => response.json())
    //       .then(result =>  console.log('this was reached',result))
    //       .catch(err => console.log(err));
    //     } catch(error) {
    //       console.log("error while fetching:", error);
    //     }
    //   }

    //   const GetSurveyById = async (surveyID) => {
    //     try {
    //       return await fetch(`${url_get_survey_by_id}${surveyID}`)
    //       .then(response => response.json())
    //       .then(result => {console.log(result); return result})
    //       .catch(err => console.log(err))
    //     } catch(error) {
    //       console.log("error while fetching:", error);
    //     }
    //   }

    //   GetSurveyById(surveyID).then((res)=>{
        
    //     // console.log(res.Response.result[0]);
    //     setTitle(res.Response.result[0].title);
    //     setSurveyFields(res.Response.result[0].surveyfields);
    //     checkDataFetched();
        
    //   })
    
  return <>
    <Suspense fallback={<p className={'text-center animate-bounce'}>Fetching Survey...</p>}>
        <SurveyForm surveyID={surveyID}/>
    </Suspense>
  </>
}

