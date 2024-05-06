import React, { Suspense } from "react";
import UserTicketList from "./UserTicketList";
import { getUserTickets } from "@/lib/tickets";

async function UserTickets() {
  const ticketData = await getUserTickets(1);

  console.log("users page, ticket data: ", ticketData);

  return <UserTicketList ticketData={ticketData} />;
}

export default function TicketPage() {
  return (
    <div>
      <Suspense
        fallback={
          <p className={"text-center animate-bounce"}>Fetching Tickets...</p>
        }
      >
        <UserTickets />
      </Suspense>
    </div>
  );
}
