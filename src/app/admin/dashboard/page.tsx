import React, { Suspense } from 'react'
import DashBoard from './Dashboard'
// import LoaderComponent from '@/components/common/fetching-loader';


async function DashboardPage(){
    //fetch your data here, pass to dashboard as props
    
    return <DashBoard/>;
}

export default function Dashboard() {
  return (
    <div>
      <Suspense fallback={<p>Fetching data...</p>}>
        <DashboardPage/>
      </Suspense>
    </div>
  )
}
