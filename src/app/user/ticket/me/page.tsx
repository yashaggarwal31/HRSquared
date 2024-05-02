import React, { Suspense } from "react";
import UserAssignedTickets from "./UserAssignedTickets";
import { getAssignedTickets } from "@/lib/tickets";

async function UserTickets() {
  const ticketData = await getAssignedTickets();

  console.log("users page, ticket data: ", ticketData);

  return <UserAssignedTickets ticketData={ticketData} />;
}

export default function TicketPage() {
  return (
    <div>
      <Suspense
        fallback={
          <p className={"text-center animate-bounce"}>
            Fetching Assigned Tickets...
          </p>
        }
      >
        <UserTickets />
      </Suspense>
    </div>
  );
}
