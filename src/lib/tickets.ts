"use server";
import { notFound } from "next/navigation";
import { dbConnect } from "./renderDB";
import { Database } from "@/types/database.types";

type ticketInsert = Database["public"]["Tables"]["Ticket"]["Insert"];

const get_ticket = ` SELECT
tickets.id as ticket_id,
tickets.title as title,
tickets.description as description,
category.categoryname AS category,
ticketpriority.name AS priority,
ticketstatus.name AS status,
users_createdby.username AS createdby,
tickets.createdat,
users_assignedto.username AS assignedto,
users_closedby.username AS closedby,
tickets.closedat
FROM
    tickets
LEFT JOIN
    category ON tickets.subcategory_id = category.id
LEFT JOIN
    ticketpriority ON tickets.priority = ticketpriority.id
LEFT JOIN
    ticketstatus ON tickets.status = ticketstatus.id
LEFT JOIN
    users AS users_createdby ON tickets.createdby = users_createdby.id
LEFT JOIN
    users AS users_assignedto ON tickets.assignedto = users_assignedto.id
LEFT JOIN
    users AS users_closedby ON tickets.closedby = users_closedby.id`;

export async function getRowByCategory(id: number) {
  const client = await dbConnect();
  const query = {
    text: `
    select * from userrole_mapping ur
    where ur.category_id = $1`,
    values: [id],
  };

  const data = await client.query(query);
  return data;
}

export async function addTicket(body: string) {
  const client = await dbConnect();
  try {
    const ticket: {
      sub_category_id: number;
      priority: number;
      title: string;
      description: string;
      created_by: number;
    } = JSON.parse(body);
    const UserRoleRow = await getRowByCategory(ticket.sub_category_id);
    const Ticket = {
      sub_category_id: ticket.sub_category_id,
      priority: ticket.priority,
      title: ticket.title,
      description: ticket.description,
      status_id: 1,
      created_by: ticket.created_by,
      assigned_to: UserRoleRow.data
        ? UserRoleRow.data.length != 0
          ? UserRoleRow.data[0].user_id
          : null
        : null,
    };
    const query = {
      text: "insert into tickets (title, description, subcategory_id, priority, status, createdby, assignedto) values ($1, $2, $3, $4, $5, $6, $7)",
      values: [
        Ticket.title,
        Ticket.description,
        Ticket.sub_category_id,
        Ticket.priority,
        Ticket.status_id,
        Ticket.created_by,
        Ticket.assigned_to,
      ],
    };

    const result = await client.query(query);
    // client.end()
    return true;
  } catch (error: any) {
    return false;
  }
}

export async function AssignUser(ticket_id: number, user_id: number) {
  const client = await dbConnect();
  const query = {
    text: "update tickets set assignedto = $1 where id = $2",
    values: [user_id, ticket_id],
  };
  try {
    await client.query(query);
    return true;
  } catch (ex) {
    return false;
  }
}

export async function updateStatus(ticket_id: number, status: number) {
  const client = await dbConnect();
  const query = {
    text: "update tickets set status = $1, closedat=CURRENT_TIMESTAMP where id = $2 RETURNING id",
    values: [status, ticket_id],
  };

  try {
    await client.query(query);
    return true;
  } catch (ex) {
    return false;
  }
}

export async function getUserTickets(id: number) {
  const client = await dbConnect();

  const query = {
    text: `${get_ticket} where users_createdby.id=$1 order by tickets.createdat desc;`,
    values: [id],
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
    text: `${get_ticket} order by tickets.createdat desc;`,
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

export async function getAssignedTickets(id: number) {
  const client = await dbConnect();

  const query = {
    text: `${get_ticket} where users_assignedto.id=$1;`,
    values: [id],
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

export async function getTicketFormData() {
  const client = await dbConnect();
  const groups_data = await client.query("select * from groups");
  const category_data = await client.query("select * from category");
  const ticketpriority_data = await client.query(
    "select * from ticketpriority"
  );

  return {
    groups: groups_data.rowCount > 0 ? groups_data.rows : [],
    categories: category_data.rowCount > 0 ? category_data.rows : [],
    ticketpriority:
      ticketpriority_data.rowCount > 0 ? ticketpriority_data.rows : [],
  };
}
