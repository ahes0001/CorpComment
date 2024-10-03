import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import ErrorMessage from "./ErrorMessage";

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
    )
      .then((response) =>  {
        if(!response.ok) {
          throw new Error("There was an error loading the feedbacks");
        }
        return response.json()})
      .then((data) => {
        setFeedbackItems(data.feedbacks);
        setIsLoading(false);
      })
      .catch(() => {
        // nerwork erro, nmot in 2xx response, or JOSN parsing error
        setErrorMessage("There was an error loading the feedbacks");
        setIsLoading(false);
      });
  }, []);

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
