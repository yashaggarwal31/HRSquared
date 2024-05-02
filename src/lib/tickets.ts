import { notFound } from "next/navigation";
import { dbConnect } from "./renderDB";
import { Database } from "@/types/database.types";

type ticketInsert = Database["public"]["Tables"]["Ticket"]["Insert"];

export async function addTicket(ticket: ticketInsert) {
  const client = await dbConnect();
  try {
    const query = {
      text: "insert into tickets (created_at, created_by, description, priority, status_id, sub_category_id, title) values ($1, $2, $3, $4, $5, $6, $7)",
      values: [
        ticket.created_at,
        ticket.created_by,
        ticket.description,
        ticket.priority,
        ticket.status_id,
        ticket.sub_category_id,
        ticket.title,
      ],
    };
    const result = await client.query(query);
    // client.end()
    return {
      status: 200,
      statusText: `${result.command} completed successfully`,
      result: result,
    };
  } catch (error: any) {
    return {
      error: error,
      status: 500,
      statusText: "Internal server error",
      message: error.message,
      data: null,
    };
  }
}

export async function getUserTickets() {
  const client = await dbConnect();

  const query = {
    text: `
          SELECT t.id AS ticket_id, 
          t.title AS title,
          t.description AS description,
          t.assignedto AS assignedto,
          t.createdat AS createdat,
          t.status AS status,
          u.username AS creator_name
          FROM tickets t
          LEFT JOIN users u ON t.createdby = u.id
          GROUP BY t.id, t.title, t.description, t.assignedto , u.username
          ORDER BY t.id DESC;
          `,
  };

  const data = await client.query(query);
  // client.end()
  console.log(data);

  if (data.rowCount > 0) {
    return data.rows;
  } else {
    notFound();
  }
}

export async function getAllTickets() {
  const client = await dbConnect();

  const query = {
    text: `
            SELECT t.id AS ticket_id, 
            t.title AS title,
            t.description AS description,
            t.assignedto AS assignedto,
            t.createdat AS createdat,
            t.status AS status
            FROM tickets t
            `,
  };

  const data = await client.query(query);
  // client.end()
  console.log(data);

  if (data.rowCount > 0) {
    return data.rows;
  } else {
    notFound();
  }
}

export async function getAssignedTickets() {
  const client = await dbConnect();

  const query = {
    text: `
            SELECT t.id AS ticket_id, 
            t.title AS title,
            t.description AS description,
            t.assignedto AS assignedto,
            t.createdat AS createdat,
            t.status AS status
            FROM tickets t
            `,
  };

  const data = await client.query(query);
  // client.end()
  console.log(data);

  if (data.rowCount > 0) {
    return data.rows;
  } else {
    notFound();
  }
}
