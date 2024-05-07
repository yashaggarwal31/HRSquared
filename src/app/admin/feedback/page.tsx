import React, { Suspense } from "react";
import FeedbackAdminList from "./FeedbackAdminList";
import { getAllTickets } from "@/lib/tickets";
import { GetFeedbacks } from "@/lib/feedbacks";

async function AdminFeedbacks() {
  const feedbackDate = await GetFeedbacks();

  return <FeedbackAdminList feedbackData={feedbackDate} />;
}

export default function AdminSurveyPage() {
  return (
    <div>
      <Suspense
        fallback={
          <p className={"text-center animate-bounce"}>Fetching Feedbacks...</p>
        }
      >
        <AdminFeedbacks />
      </Suspense>
    </div>
  );
}
