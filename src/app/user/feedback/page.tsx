import React, { Suspense, use, useState } from "react";
// import { url_add_feedback } from "@/app/lib/apiEndPoints";
import { addFeedback } from "@/lib/feedbacks";
import Feedbacks from "./feedbackForm";

export const handleSubmit = async (feedbackDto) => {
  console.log("hello dheeraj");
  const res = await addFeedback(feedbackDto);
  console.log(res);
  // console.log("run");
  // if (title.trim() === "") {
  //   setAck("Title is empty");
  //   setConformation(false);
  //   return;
  // }
  // if (feedback.trim() === "") {
  //   setAck("Feedback is empty");
  //   setConformation(false);
  //   return;
  // }
  // if (!conformation && !isAnonymous) {
  //   setShowDialog(true);
  //   return;
  // }
  // const feedbackDTO = {
  //   title: title,
  //   feedback: feedback,
  //   anonymous: isAnonymous,
  // };
  // setSending(true);
  // const url = "/api/feedbacks/addfeedback";
  // try {
  //   // const feedbackResponse = await addFeedback(feedbackDTO);

  //   setAck("Feedback submitted successfully");
  //   setAckClass("text-green-700 font-semibold pt-1");
  //   setTitle("");
  //   setFeedback("");
  //   setIsAnonymous(false);
  //   setConformation(false);
  //   setSending(false);
  // } catch (error) {
  //   setAck("Error while submitting feedback");
  //   setConformation(false);
  //   setAck("");
  //   setSending(false);
  // }
};

export default function page() {
  return (
    <div>
      <Suspense>
        <Feedbacks />
      </Suspense>
    </div>
  );
}