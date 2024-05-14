'use client'
import ShareLink from '@/components/common/share-link';
import React from 'react';

export default function GetSurveyLink({surveyID}) {
    const baseUrl = process.env.NEXT_PUBLIC_URL;
    const downloadUrl = `${baseUrl}/middleware/survey?id=${surveyID}`
  return (
    <div className='flex flex-col'>
        <ShareLink link={downloadUrl}/>
    </div>
  )
}
