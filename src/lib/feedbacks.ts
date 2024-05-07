"use server";
import { notFound } from "next/navigation";
import { dbConnect } from "./renderDB";
import { Database } from "@/types/database.types";

// type ticketInsert = Database["public"]["Tables"]["Ticket"]["Insert"];
type FeedbackInsert = Database["public"]["Tables"]["Feedback"]["Insert"];

export async function addFeedback(Feedback: FeedbackInsert) {
  console.log("hello");
  console.log(Feedback);
  const client = await dbConnect();
  try {
    // console.log(Feedback)
    const query = {
      text: "insert into feedbacks (title, description, createdby) values ($1, $2, $3)",
      values: [Feedback.title, Feedback.description, Feedback.created_by],
    };
    const result = await client.query(query);
    // client.end();
    return true;
  } catch (error) {
    console.log(error);
    client.end();
    return false;
  }
}

export async function GetFeedbacks(notViewed?: boolean) {
  const client = await dbConnect();
  try {
    let query_text;
    if (notViewed) {
      query_text = `select feedbacks.*,
            case
                when feedbacks.createdby is not null then users.username
                else NULL
            END AS createdby
            from feedbacks
            left join users
            on feedbacks.createdby = users.id where viewed=false`;
    } else {
      query_text = `select feedbacks.*,
            case
                when feedbacks.createdby is not null then users.username
                else NULL
            END AS createdby
            from feedbacks
            left join users
            on feedbacks.createdby = users.id`;
    }
    // console.log(query_text+" LLLLLLLLLLLL")
    query_text = `${query_text} ORDER BY createdat DESC`;
    const result = await client.query(query_text);
    if (result.rowCount > 0) {
      return result.rows;
    } else {
      notFound();
    }
  } catch (error) {
    client.end();
    return false;
  }
}

export async function MarkViewed(id: number) {
  const client = await dbConnect();
  try {
    const query = {
      text: "update feedbacks set viewed = true where id = $1",
      values: [id],
    };
    const result = await client.query(query);
    // client.end();
    return true;
  } catch (error) {
    client.end();
    return false;
  }
}
