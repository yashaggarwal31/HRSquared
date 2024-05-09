
import Link from 'next/link';
import { formatDateString } from '@/lib/FormatDateString'
import React from 'react'

export default function AdminSurveyList({surveyData}:{surveyData:any}) {
  return (
    
        <div className=" p-6 px-0 pb-2 pt-0 overflow-x-hidden">
          <table className="w-full min-w-[640px] table-auto pl-2 ml-2">
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
                <th className="border-blue-gray-50 border-b px-5 py-3 text-center">
                  <p className="text-blue-gray-400 block font-sans  font-bold uppercase antialiased">
                    Created By
                  </p>
                </th>
                <th className="border-blue-gray-50 border-b px-5 py-3 text-center">
                  <p className="text-blue-gray-400 block font-sans  font-bold uppercase antialiased">
                    Created On
                  </p>
                </th>
                {/* <th className="border-blue-gray-50 border-b px-5 py-3 text-center">
                  <p className="text-blue-gray-400 block font-sans  font-bold uppercase antialiased">
                    Total Responses
                  </p>
                </th> */}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {surveyData.map((survey:any, index:any) => (
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
                  <td className="border-blue-gray-50 border-b px-5 py-3 text-center">
                    <p className="text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased">
                      {survey.creator_name}
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b px-5 py-3 text-center">
                    <p className="text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased">
                      {formatDateString(survey.created_at)}
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b px-5 py-3 text-center">
                    <p className="text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased">
                     <Link href={`survey/${survey.survey_id}`}>
                      <button className="mb-2 me-2 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-4 w-[100%] py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                        View Responses
                      </button>
                     </Link>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

  )
}
