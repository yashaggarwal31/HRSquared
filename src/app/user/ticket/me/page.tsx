import React, { Suspense } from "react";
import UserAssignedTickets from "./UserAssignedTickets";
import { getAssignedTickets } from "@/lib/tickets";

async function UserTickets() {
  const ticketData = await getAssignedTickets(1);

  // console.log("users page, ticket data: ", ticketData);

  return <UserAssignedTickets ticketData={ticketData} />;
}

export default function TicketPage() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="fixed top-0 left-0 w-screen h-screen z-[99999999999999] flex flex-col items-center justify-center bg-black/40">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div> <h3>Fetching Assigned Tickets ...</h3> </div>
        }
      >
        <UserTickets />
      </Suspense>
    </div>
  );
}
