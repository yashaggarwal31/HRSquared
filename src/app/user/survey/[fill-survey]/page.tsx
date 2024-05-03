
import React, { Suspense} from 'react'
import FormFiller from './FormFiller';
import { getSurveyById } from '@/lib/surveys';

let surveyID;

async function SurveyForm({surveyID}){

    const surveyData = await getSurveyById(surveyID);
    const formFields = surveyData[0].surveyfields;
    const title = surveyData[0].title;

    return <>
    <FormFiller surveyFields={formFields} title={title}/>
    </>

}

// export function handleSubmit(formData) {
//     const submitBTN:any = document.getElementById('submit-btn');
//     submitBTN.innerHTML='Submitting';
//     submitBTN.disabled = true;
//     const domForm = document.getElementById('dom-form');
//     console.log(domForm)
//     // Prevent the default form submission behavior
//     event.preventDefault();

//     // Access the form that triggered the event
//     const form = event.target;

//     // Create an array to hold the form data in the desired format
//     const formDataArray:any[] = [];

//     // Iterate over each form element
//     for (const element of form.elements) {
//         // Skip elements without a name (e.g., submit buttons)
//         if (!element.name) {
//             continue;
//         }

//         // Determine the type of input
//         const type = element.type;

//         // Get the label text associated with the form element
//         let label = '';
//         const labelElement = form.querySelector(`label[htmlFor="${element.id}"]`);
//         console.log('For this element, ', element,'Type is',element.type ,'\n This si the label ', labelElement)
//         if (labelElement) {
//             label = labelElement.textContent.trim();
//         }

//         if (type === 'checkbox' && label=='') {
//           label = element.parentNode.parentNode.parentNode.firstChild.textContent;
//         }

//         // if(type==='file'){
//         //   label = element.parentNode.parentNode.parentNode.firstChild.textContent;
//         // }

//         if(type=='select-one'){
//           label = element.parentNode.firstChild.textContent;
//         }

//         // Determine the answer based on the element type
//         let answer = '';
//         let id = '';
//         switch (type) {
//             case 'text':
//                 answer = element.value;
//                 id = element.id;
//                 break;
//             case 'checkbox':
//                 answer = element.checked ? element.value : null;
//                 if (answer === null) continue;
//                 else id = element.id; // Skip unchecked checkboxes
//                 break;
//             case 'select-one':
//                 answer = element.options[element.selectedIndex].value;
//                 id = element.id;
//                 break;
//             case 'file':
//                 // For document uploader, collect the file names
//                 if(!element.files[0]) continue;
//                 answer = element.files[0].name
//                 id = element.id;
//                 break;
//             case 'date':
//                 answer = element.value;
//                 id = element.id;
//                 break;
//             case 'radio':
//                 answer = element.checked ? element.value:null;
//                 if(answer===null) continue;
//                 else id = element.id;
//                 break;
//             default:
//                 break;
//         }

//         // Add the form data item to the array
//         const formDataItem = {
//             label: label,
//             type: type,
//             answer: answer,
//             id:id
//         };

//         formDataArray.push(formDataItem);
//     }

//     // Convert the formDataArray to a JSON string

//     if(domForm){ const htmlString = domForm.outerHTML;
//     formDataArray.push({
//       htmlString:htmlString
//     })
//     }
//     const formDataJSON = JSON.stringify(formDataArray);

//     const surveyResponse = {
//       survey_id: parseInt(surveyID),
//       response_data: formDataJSON
//     }



//     // Print the JSON string to the console
//     console.log('are you going to submit Response', surveyResponse)
//     // submitResponse(surveyResponse);
//     submitBTN.innerHTML = 'Submitted';
//     console.log(formDataJSON);

// }

export function handleSubmit(res) {
    console.log('handle submit was called ',res)
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

