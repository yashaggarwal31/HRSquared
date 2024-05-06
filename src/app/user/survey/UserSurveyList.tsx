import { formatDateString } from '@/lib/FormatDateString'
import Link from 'next/link'
import React from 'react'

export default function UserSurveyList({surveyData}) {
  // console.log('main page', surveyData);
  return (
    <div className="mb-8 mt-12 flex flex-col gap-12 ">
      <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 mb-8 rounded-xl bg-gradient-to-tr from-blue-900 to-blue-800 bg-clip-border p-6 text-white shadow-lg shadow-gray-900/20">
          <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-white antialiased text-center">
            List of Active Surveys
          </h6>
        </div>
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
                <th className="border-blue-gray-50 border-b px-5 py-3 text-center">
                  <p className="text-blue-gray-400 block font-sans  font-bold uppercase antialiased">
                    Created On
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
                  
                  <td className="border-blue-gray-50 border-b px-5 py-3 text-center">
                    <p className="text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased">
                      {formatDateString(survey.created_at)}
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
        </div>
      </div>
    </div>
  )
}
