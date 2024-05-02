import React, { Suspense } from "react";
import AdminTicketList from "./AdminTicket";
import { getAllTickets } from "@/lib/tickets";

async function AdminTickets() {
  const surveyData = await getAllTickets();

  return <AdminTicketList surveyData={surveyData} />;
}

export default function AdminSurveyPage() {
  return (
    <div>
      <Suspense
        fallback={
          <p className={"text-center animate-bounce"}>Fetching Tickets...</p>
        }
      >
        <AdminTickets />
      </Suspense>
    </div>
  );
}
