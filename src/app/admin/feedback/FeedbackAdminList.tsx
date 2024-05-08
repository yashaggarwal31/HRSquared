"use client";
import React, { useState, useEffect } from "react";
import Feedback from "./feedback";
import Pagination from "@/components/tickets/Pagination";
// import Loading from "./loading";
// import { url_get_feedbacks } from "@/app/lib/apiEndPoints";

const paginate = (items: any, pageNumber: any, pageSize: any) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
  // return items;
};

function FeedbackAdminList({ feedbackData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [myFeedbacks, setMyFeedbacks] = useState(feedbackData);
  const [currentData, setCurrentData] = useState([]);

  let data = paginate(myFeedbacks, currentPage, pageSize);
  useEffect(() => {
    data = paginate(myFeedbacks, currentPage, pageSize);
    setCurrentData(data);
  }, []);

  useEffect(() => {
    data = paginate(myFeedbacks, currentPage, pageSize);
    setCurrentData(data);
  }, [currentPage]);

  const onPageChange = (page: any) => {
    setCurrentPage(page);
  };

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
    <div className=" h-screen">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="h-100 flex  flex-col items-center px-4 py-2">
          {currentData.map((feedback, idx) => (
            <Feedback key={idx} feedback={feedback} />
          ))}
          <Pagination
            items={myFeedbacks.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
}

export default FeedbackAdminList;
