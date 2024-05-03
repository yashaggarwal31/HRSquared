import React, { Suspense } from "react";
import FeedbackAdminList from "./FeedbackAdminList";
import { getAllTickets } from "@/lib/tickets";
import { GetFeedbacks } from "@/lib/feedbacks";

async function AdminTickets() {
  const feedbackDate = await getAllTickets();

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
        <AdminTickets />
      </Suspense>
    </div>
  );
}
