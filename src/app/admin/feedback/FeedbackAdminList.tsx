"use client";
import React, { useState, useEffect } from "react";
import Feedback from "./feedback";
// import Loading from "./loading";
// import { url_get_feedbacks } from "@/app/lib/apiEndPoints";

function FeedbackAdminList({ feedbackData }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     GetFeedbacks();
  //   }, []);

  //   async function GetFeedbacks() {
  //     // const url = "/api/feedbacks/admin/getfeedbacks";
  //     try {
  //       await fetch(url_get_feedbacks, {
  //         method: "GET",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setData(data.Response.result);
  //           // console.log(data.Response.result)
  //           setLoading(false);
  //         })
  //         .catch((err) => console.log(err));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }

  return (
    <div className="bg-slate-300">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="h-100 flex  flex-col items-center px-4 py-2">
          {feedbackData.map((feedback, idx) => (
            <Feedback key={idx} feedback={feedback} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FeedbackAdminList;
