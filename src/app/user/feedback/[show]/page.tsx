import { Suspense } from "react";
import { UserFeedbacks } from "./userFeedbacks";
import { GetUserFeedbacks } from "@/lib/feedbacks";

async function ShowUserFeedbacks({ userID }: { userID: number }) {
  const feedbacks = await GetUserFeedbacks(userID);
  return <UserFeedbacks feedbacks={feedbacks} />;
}

export default function ShowUserFeedbacksPage({ params }: { params: any }) {
  return (
    <div>
      <Suspense
        fallback={
          <p className={"text-center animate-bounce"}>Fetching Feedbacks...</p>
        }
      >
        <ShowUserFeedbacks userID={params["show"]} />
      </Suspense>
    </div>
  );
}
