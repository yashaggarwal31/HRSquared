"use client";
import React, { useState, useEffect } from "react";
import SideNavbar from "../sideNavbar";
import FeedbackCard from "./feedbackCard";
import Pagination from "@/components/tickets/Pagination";

const paginate = (items: any, pageNumber: any, pageSize: any) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
  // return items;
};

export function UserFeedbacks({ feedbacks }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const [myFeedbacks, setMyFeedbacks] = useState(feedbacks);
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

  return (
    <div className="flex flex-col justify-center items-center ">
      <SideNavbar page={2} />
      {currentData.map((feedback, idx) => (
        <FeedbackCard feedback={feedback} key={idx} />
      ))}

      <Pagination
        items={myFeedbacks.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
}
