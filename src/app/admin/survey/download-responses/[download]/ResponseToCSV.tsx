'use client'
import React from 'react'

export default function ResponseToCSV({csv}) {
    console.log(csv)

    function downloadCSV(){
      var hiddenElement = document.createElement('a');  
      hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
      hiddenElement.target = '_blank';  
        
      //provide the name for the CSV file to be downloaded  
      hiddenElement.download = 'SurveyData.csv';  
      hiddenElement.click();  
    }

  return (
    <div>
      <button onClick={downloadCSV}>
        Download CSV
      </button>
    </div>
  )
}
