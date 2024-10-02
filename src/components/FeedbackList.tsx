import FeedbackItem from "./FeedbackItem";

const feedbackItem1 = {
  upvoteCount: 593,
  badgeLetter: "C",
  companyName: "Company",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis totam ipsa provident illum voluptatu",
  daysAgo: 4
}
const feedbackItem2 = {
  upvoteCount: 593,
  badgeLetter: "S",
  companyName: "Starbucks",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis totam ipsa provident illum voluptatu",
  daysAgo: 7
}
const feedbackItem3 = {
  upvoteCount: 593,
  badgeLetter: "C",
  companyName: "Company",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis totam ipsa provident illum voluptatu",
  daysAgo: 10
}

const feedbackItems = [feedbackItem1, feedbackItem2, feedbackItem3];


export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => <FeedbackItem feedbackItem={feedbackItem} />)}
    </ol>
  )
}
