
import { formatDateString } from '@/lib/FormatDateString'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function AdminSurveyResponseList({surveyResponseData, surveyID, title, formFields}:{surveyResponseData:any, surveyID:number,title:string, formFields:any}) {
  const arr = title.split('%!@')
  title = arr[0];
  const description = arr[1]
  return (
    <>
    <div className="mb-8 mt-12 flex flex-col gap-12 ">
      <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="flex justify-between relative mx-4 -mt-6 mb-8 rounded-xl bg-gradient-to-tr from-blue-900 to-blue-800 bg-clip-border p-6 text-white shadow-lg shadow-gray-900/20">
          <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-white antialiased">
            Survey Responses
          </h6>
          <Link href={`download-responses/${surveyID}`} target="_blank" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">
            Export Responses to Excel
          </Link>
        </div>
        <div className=" p-6 px-0 pb-2 pt-0">
          <table className="w-full min-w-[640px] table-auto">
            <thead className=" text-base text-sky-900">
              <tr>
                <th className="border-blue-gray-50 border-b px-5 py-3 text-left">
                  <p className="text-blue-gray-400 block font-sans  font-bold uppercase antialiased">
                    Survey Title
                  </p>
                </th>
                <th className="border-blue-gray-50 border-b px-5 py-3 text-center">
                  <p className="text-blue-gray-400 block font-sans  font-bold uppercase antialiased">
                    Response By
                  </p>
                </th>
                <th className="border-blue-gray-50 border-b px-5 py-3 text-center">
                  <p className="text-blue-gray-400 block font-sans  font-bold uppercase antialiased">
                    Response Date
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
              {surveyResponseData.map((response:any, index:any) => (
                <tr key={index}>
                  <td className="border-blue-gray-50 border-b px-5 py-3 text-left">
                    <p className="text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased">
                      {title}
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b px-5 py-3 text-center">
                    <p className="text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased">
                      {response.username}
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b px-5 py-3 text-center">
                    <p className="text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased">
                      {formatDateString(response.createdat)}
                    </p>
                  </td>
                  <td className="border-blue-gray-50 border-b px-5 py-3 text-center">
                    <p className="text-blue-gray-900 block font-sans text-sm font-semibold leading-normal antialiased">
                      <Link href={`${surveyID}/${response.id}`}>
                      <button>
                        View Response
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
    </>
  )
}
