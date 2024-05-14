'use client'
import React from 'react'

export default function GetSurveyLink({surveyID}) {
    const baseUrl = process.env.NEXT_PUBLIC_URL;
    const downloadUrl = `${baseUrl}/middleware/survey?id=${surveyID}`
  return (
    <div className='flex flex-col'>
        <label htmlFor="">Share this survey with the link below</label>
        <input type="text" value={downloadUrl} disabled/>
    </div>
  )
}
