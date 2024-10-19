import FeedbackItem from "./FeedbackItem";
import ErrorMessage from "./ErrorMessage";
import { TFeedbackItem } from "../lib/types";

type FeedbackListProps = {
  feedbackItems: Array<TFeedbackItem>;
  isloading: boolean;
  errorMessage: string;
}


export default function FeedbackList({ feedbackItems, isloading, errorMessage }:FeedbackListProps) {
  




  return (
    <ol className="feedback-list">
      {isloading && <div className="spinner" />}
      {errorMessage && <ErrorMessage message ={errorMessage} />}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key= {feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
