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
          <div className="fixed top-0 left-0 w-screen h-screen z-[99999999999999] flex flex-col items-center justify-center bg-black/40">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>{" "}
            <h3>Fetching Tickets ...</h3>{" "}
          </div>
        }
      >
        <ShowUserFeedbacks userID={params["show"]} />
      </Suspense>
    </div>
  );
}
