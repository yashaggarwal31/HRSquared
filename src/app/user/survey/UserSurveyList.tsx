import { formatDateTimeString } from '@/lib/FormatDateTimeString'
import { Divide } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function UserSurveyList({surveyData}) {
  // console.log('main page', surveyData);
  

  return (
        <div className=" p-6 px-0 pb-2 pt-0 overflow-x-hidden">
          <table className="w-full min-w-[580px] table-auto ml-2 ">
            <thead className=" text-base text-sky-900">
              <tr>
                <th className="border-blue-gray-50 border-b px-5 py-3 text-left">
                  <p className="text-blue-gray-400 block font-sans  font-bold uppercase antialiased">
                    Survey Title
                  </p>
                </th>
                <th className="border-blue-gray-50 border-b px-5 py-3 text-left">
                  <p className="text-blue-gray-400 block font-sans  font-bold uppercase antialiased">
                    Survey Description
                  </p>
                </th>
                <th className="border-blue-gray-50 border-b px-5 py-3 text-left">
                  <p className="text-blue-gray-400 block font-sans  font-bold uppercase antialiased">
                    Belongs To
                  </p>
                </th>
                <th className="border-blue-gray-50 border-b px-5 py-3 text-center">
                  <p className="text-blue-gray-400 block font-sans  font-bold uppercase antialiased">
                    Closes On
                  </p>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {surveyData.map((survey, index) => (
                <tr key={index}>
                  <td className="border-blue-gray-50 border-b px-5 py-3 text-left">
                    <p className="text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased">
                      {survey.survey_title.split('%!@')[0]}
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b px-5 py-3 text-left">
                    <p className="text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased">
                      {survey.survey_title.split('%!@')[1]}
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b px-5 py-3 text-left">
                    <p className="text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased">
                      {survey.category?survey.category:'Public'}
                    </p>
                  </td>
                  
                  <td className="border-blue-gray-50 border-b px-5 py-3 text-center">
                    <p className="text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased">
                      {formatDateTimeString(survey.closes_at)}
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b px-5 py-3 text-center">
                    <p className="text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased">
                    <Link href={`survey/${survey.survey_id}`}>
                      <button className="mb-2 me-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                        Fill Survey
                      </button>
                    </Link>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {surveyData.length === 0 && <div className='flex justify-center items-center mt-5 my-4'>No Surveys to show</div>}

          
        </div>
     
  )
}
