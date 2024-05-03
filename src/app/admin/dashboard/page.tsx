import React, { Suspense } from "react";
import DashBoard from "./Dashboard";
import {
  cardFeedbackData,
  cardSurveysData,
  cardTicketsData,
  dataTickets,
  getFeedbackCount,
  getRecentFeedbacks,
  getRecentSurveys,
  getRecentTickets,
} from "@/lib/dashboard";

async function DashboardPage() {
  const data = {
    cardFeedbackData: await cardFeedbackData(),
    cardSurveysData: await cardSurveysData(),
    cardTicketsData: await cardTicketsData(),
    dataTickets: await dataTickets(),
    getFeedbackCount: await getFeedbackCount(),
    getRecentFeedbacks: await getRecentFeedbacks(),
    getRecentSurveys: await getRecentSurveys(),
    getRecentTickets: await getRecentTickets(),
  };

  return <DashBoard data={data} />;
}

export default function Dashboard() {
  return (
    <div>
      <Suspense fallback={<p>Fetching data...</p>}>
        <DashboardPage />
      </Suspense>
    </div>
  );
}
