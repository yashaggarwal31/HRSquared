import React, { Suspense } from "react";
import ManageUsers from "./ManageUsers";
// import LoaderComponent from '@/components/common/fetching-loader';

async function ManageUsersPage() {
  //fetch your data here, pass to dashboard as props
//   const card = await cardFeedbackData();

  return <ManageUsers />;
}

export default function AdminManageUserPage() {
  return (
    <div>
      <Suspense fallback={<p>Fetching data...</p>}>
        <ManageUsersPage />
      </Suspense>
    </div>
  );
}
