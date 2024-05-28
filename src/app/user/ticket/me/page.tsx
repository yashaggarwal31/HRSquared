import React, { Suspense } from "react";
import UserAssignedTickets from "./UserAssignedTickets";
import { getAssignedTickets } from "@/lib/tickets";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

async function UserTickets() {
  const { userId } = auth();
  console.log("UUUUSSSSSEEEERRR", userId);
  const ticketData = await getAssignedTickets(userId);

  // console.log("users page, ticket data: ", ticketData);

  return <UserAssignedTickets ticketData={ticketData} />;
}

export default function TicketPage() {
  // revalidatePath("user/ticket/me");
  console.log("revalidate", "user/ticket/me");
  return (
    <div>
      <Suspense
        fallback={
          <div className="fixed top-0 left-0 w-screen h-screen z-[99999999999999] flex flex-col items-center justify-center bg-black/40">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>{" "}
            <h3>Fetching Assigned Tickets ...</h3>{" "}
          </div>
        }
      >
        <UserTickets />
      </Suspense>
    </div>
  );
}
