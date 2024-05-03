const getAdminSurveys = () => {}

import { notFound } from 'next/navigation'
import { dbConnect } from './renderDB'
import { Database } from '@/types/database.types'

type SurveyInsert = Database['public']['Tables']['Survey']['Insert']
type SurveyResponseInsert =
  Database['public']['Tables']['SurveyResponses']['Insert']

export async function getRecentSurveys () {
  const client = await dbConnect()

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
        `
  }

  const data = await client.query(query)
  // client.end()
  // console.log(data)

  if (data.rowCount > 0) {
    return data.rows
  } else {
    notFound()
  }
}

export async function AddSurvey (survey: SurveyInsert) {
  const client = await dbConnect()
  try {
    const surveyFieldsJSON = JSON.stringify(survey.survey_fields)
    const query = {
      text: 'insert into surveys (title, surveyfields, createdby, closes_at) values ($1, $2, $3, $4)',
      values: [
        survey.title,
        surveyFieldsJSON,
        survey.created_by,
        survey.closes_at
      ]
    }
    const result = await client.query(query)
    // client.end()
    return {
      status: 200,
      statusText: `${result.command} completed successfully`,
      result: result
    }
  } catch (error: any) {
    // client.end()
    return {
      error: error,
      status: 500,
      statusText: 'Internal server error',
      message: error.message,
      data: null
    }
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

export async function GetSurveyResponses (id: number) {
  const client = await dbConnect()
  try {
    const query = {
      // text: `select sr.id, u.username, sr.response_data, sr.createdat from surveyresponses sr join users u on u.id = sr.user_id where sr.survey_id = $1;`,
      text: `select sr.id, sr.response_data, sr.createdat from surveyresponses sr where sr.survey_id = $1;`,
      values: [id]
    }
    const result = await client.query(query)
    // console.log(result);
    // client.end()
    return result.rows
  } catch (error) {
    console.log(error)
    // client.end()
    return 'error fetching'
  }
}

export async function GetResponseById (id: number) {
  const client = await dbConnect()
  try {
    const query = {
      text: 'select * from surveyresponses where id = $1',
      values: [id]
    }
    const result = await client.query(query)
    // client.end()
    return result.rows
  } catch (error) {
    console.log(error)
    // client.end()
    return 'Error Fetching'
  }
}

export async function getSurveyById (id: number) {
  const client = await dbConnect()
  try {
    const query = {
      text: 'select * from surveys where id = $1',
      values: [id]
    }
    const result = await client.query(query)
    // client.end()
    return result.rows
  } catch (error) {
    console.log(error)
    // client.end()
    return 'Error Fetching'
  }
}

export async function addUserResponse (response: SurveyResponseInsert) {
  const client = await dbConnect()
  const responseFieldsJSON = JSON.stringify(response.response_data)
  const query = {
    text: 'insert into surveyresponses (user_id, survey_id, response_data) values ($1, $2, $3)',
    values: [response.user_id, response.survey_id, responseFieldsJSON]
  }

  try {
    const result = await client.query(query)

    return result
  } catch (error) {
    return 'Error Fetching Data'
  }
}
