import SideNavbar from "../sideNavbar";
import FeedbackCard from "./feedbackCard";

export function UserFeedbacks({ feedbacks }) {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-100">
      <SideNavbar page={2} />
      {feedbacks.map((feedback, idx) => (
        <FeedbackCard feedback={feedback} key={idx} />
      ))}
    </div>
  );
}
