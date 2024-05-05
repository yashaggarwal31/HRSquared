'use server'
const getAdminSurveys = () => {};

import { notFound } from "next/navigation";
import { dbConnect } from "./renderDB";
import { Database } from "@/types/database.types";
import { JSDOM } from 'jsdom';
import { object } from "zod";

type SurveyInsert = Database["public"]["Tables"]["Survey"]["Insert"];
type SurveyResponseInsert =
  Database["public"]["Tables"]["SurveyResponses"]["Insert"];

export async function getRecentSurveys() {
  const client = await dbConnect();

  const query = {
    text: `
        SELECT s.id AS survey_id, 
        s.title AS survey_title,
        s.createdat AS created_at,
        u.username AS creator_name,
        COUNT(sr.id) AS total_responses
        FROM surveys s
        LEFT JOIN surveyresponses sr ON s.id = sr.survey_id
        LEFT JOIN users u ON s.createdby = u.id
        GROUP BY s.id, s.title, s.createdat, u.username
        ORDER BY s.id DESC;
        `,
  };

  const data = await client.query(query);
  // client.end()
  // console.log(data)

  if (data.rowCount > 0) {
    return data.rows;
  } else {
    notFound();
  }
}

export async function AddSurvey(survey: SurveyInsert) {
  const client = await dbConnect();
  try {
    const surveyFieldsJSON = JSON.stringify(survey.survey_fields);
    const query = {
      text: "insert into surveys (title, surveyfields, createdby, closes_at) values ($1, $2, $3, $4)",
      values: [
        survey.title,
        surveyFieldsJSON,
        survey.created_by,
        survey.closes_at,
      ],
    };
    const result = await client.query(query);
    // client.end()
    return {
      status: 200,
      statusText: `${result.command} completed successfully`,
      result: result,
    };
  } catch (error: any) {
    // client.end()
    return {
      error: error,
      status: 500,
      statusText: "Internal server error",
      message: error.message,
      data: null,
    };
  }
}

// export async function getSurveyResponses (id: number) {
//   const client = await dbConnect()
//   try {
//     const query = {
//       text: 'select * from surveyresponses where id = $1',
//       values: [id]
//     }
//     const result = await client.query(query)
//     client.end()
//     return result.rows
//   } catch (error) {
//     console.log(error)
//     client.end()
//     return 'Error Fetching'
//   }
// }

export async function GetSurveyResponses(id: number) {
  const client = await dbConnect();
  try {
    const query = {
      // text: `select sr.id, u.username, sr.response_data, sr.createdat from surveyresponses sr join users u on u.id = sr.user_id where sr.survey_id = $1;`,
      text: `select sr.id, sr.response_data, sr.createdat from surveyresponses sr where sr.survey_id = $1;`,
      values: [id],
    };
    const result = await client.query(query);
    // console.log(result);
    // client.end()
    return result.rows;
  } catch (error) {
    console.log(error);
    // client.end()
    return "error fetching";
  }
}

export async function GetResponseById(id: number) {
  const client = await dbConnect();
  try {
    const query = {
      text: "select * from surveyresponses where id = $1",
      values: [id],
    };
    const result = await client.query(query);
    // client.end()
    return result.rows;
  } catch (error) {
    console.log(error);
    // client.end()
    return "Error Fetching";
  }
}

export async function getSurveyById(id: number) {
  const client = await dbConnect();
  try {
    const query = {
      text: "select * from surveys where id = $1",
      values: [id],
    };
    const result = await client.query(query);
    // client.end()
    return result.rows;
  } catch (error) {
    console.log(error);
    // client.end()
    return "Error Fetching";
  }
}

export async function addUserResponse(response: SurveyResponseInsert) {
  const client = await dbConnect();
  const responseFieldsJSON = JSON.stringify(response.response_data);
  const query = {
    text: "insert into surveyresponses (user_id, survey_id, response_data) values ($1, $2, $3)",
    values: [response.user_id, response.survey_id, responseFieldsJSON],
  };

  try {
    const result = await client.query(query);

    return result;
  } catch (error) {
    return "Error Fetching Data";
  }
}

export async function createJsonFromLabels(surveyLabels: any[]) {
  let JsonWithLabelSeqArr = [];
  let jsonData: any = {};
  let labelArray = [];

  surveyLabels.forEach(item => {
    labelArray.push(item.label);
    switch (item.type) {
      case 0:
        // Text input
        jsonData[item.label] = []; 
        break;
      case 1:
        // Dropdown/select
        jsonData[item.label] = [];
        break;
      case 2:
        jsonData[item.label] = [];
      case 5:
        // File upload
        jsonData[item.label] = [];
        break;
      case 3:
        // Date input
        jsonData[item.label] = [];
        break;
      // case 4:
      //   // Matrix
      //   jsonData[item.label] = {};
      //   item.matrixRow.forEach(rowItem => {
      //     jsonData[item.label][rowItem] = [];
      //   });
      //   break;
      default:
        break;
    }

    

  });

  JsonWithLabelSeqArr.push(labelArray);
    JsonWithLabelSeqArr.push(jsonData);

  console.log('our json !!!!',JsonWithLabelSeqArr)

  return JsonWithLabelSeqArr;
}

export async function responsesToJson(form,surveyResponseData,JsonWithLabelSeqArr){
  // console.log('this is form\n ******* ',form );
  // console.log('this is SurveyResponse\n ******* ',surveyResponseData );

  let jsonData= JsonWithLabelSeqArr[1];
  // let labelArray = JsonWithLabelSeqArr[0];
  let i = 0;

  for(let response of surveyResponseData){
    response = response.response_data;
    // console.log('individual response: ',response)
    const htmlString = JSON.parse(response);
    // console.log(htmlString)
    let htmlDATA = htmlString[htmlString.length - 1];
    form = htmlDATA.htmlString;
    const dom = new JSDOM(form);
    const container = dom.window.document;
    //parseString and create htmlString
    for(let data of htmlString){
      // console.log('This is data: ',data.id);
      if(data.id){
          const ele = container.querySelector(`#${data.id}`) as HTMLInputElement;
          // if(ele){
          //     ele.value = data.answer;
          // }
          if(ele){
              // console.log('****************************', ele)
              // ele.disabled = true;

              let label;
              let value;
              let radioLabel1;
              let radioLabel2;

              let flag = 0;

              switch(ele.type){
                  case 'text':
                    label = ele.parentElement.firstChild.textContent;
                    value = data.answer;
                    break;
                  case 'checkbox':
                    label = ele.parentElement.parentElement.parentElement.firstChild.textContent;
                    value = ele.value;
                      break;
                  case 'radio':
                    flag = 1;
                    radioLabel1 = ele.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.firstChild.textContent;
                    radioLabel2 = ele.parentElement.parentElement.firstChild.textContent;
                    value = ele.value;
                      break;
                  case 'file':
                    if(!data.answer){
                      ele.value = 'No file uploaded';
                      continue;
                    }
                    label = ele.parentElement.parentElement.firstChild.textContent;
                    value = data.answer;
                    break;
                    
                  case 'date':
                    label = ele.parentElement.parentElement.firstChild.textContent
                    value = data.answer
                    break;
                  case 'select-one':
                    label = ele.parentNode.firstChild.textContent;
                    value = data.answer
                    break
              }

              // if(flag==1){
              //   //radio button
              //   if(labelArray[i]!=radioLabel1){
              //     jsonData[labelArray[i]].push('n/a');
              //     i++;
              //     continue;
              //   }

              //   jsonData[radioLabel1][radioLabel2].push(value);
              //   i++;
              // }

              // if(i=(labelArray.size-1)) continue;

              // if(!labelArray[i]) continue;

              // if(labelArray[i]!=label){
              //   console.log('labels dont match, ', labelArray[i],' and ',label)
              //   jsonData[label].push('n/a');
              //   i++;
              //   continue;
              // }
              // else{
              //   console.log('labels match, ', labelArray[i],' and ',label)
              //   jsonData[label].push(value);
              //   i++;
              // }

              if(label && jsonData[label]){
                jsonData[label].push(value)
              }

              

              

              console.log('Label: ',label);
              console.log('Value: ', value)


              

          }

          
          // if(ele.type!='select'){
              
          // }
           
      }
    }


    console.log('Final JSONNNNN**********\n')
    console.log(jsonData)
  }



  
}
