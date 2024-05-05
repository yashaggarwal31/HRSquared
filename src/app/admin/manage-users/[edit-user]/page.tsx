import React, { Suspense } from "react";
import UserEdit from "./UserEdit";
import { getUserById, getUsersFormData } from "@/lib/users";

async function AdminEditUser({ userID }: { userID: number }) {
  const user = await getUserById(userID);
  const userFormData = await getUsersFormData();

  return <UserEdit user={user[0]} userFields={userFormData} />;
}

export default function AdminEditUserPage({ params }: { params: any }) {
  return (
    <div>
      <Suspense
        fallback={
          <p className={"text-center animate-bounce"}>Fetching User...</p>
        }
      >
        <AdminEditUser userID={params["edit-user"]} />
      </Suspense>
    </div>
  );
}
