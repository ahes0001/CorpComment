import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import ErrorMessage from "./ErrorMessage";
import { TFeedbackItem } from "../lib/types";

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isloading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handdleAddFeedback = (text:string) => {
    const companyName = text.split(" ").find(word => word.includes('#'))!.substring(1);
    const newItem:TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      companyName: companyName,
      daysAgo: 0,
      upvoteCount: 0,
      badgeLetter: companyName.substring(0, 1).toUpperCase()


    };
    setFeedbackItems([...feedbackItems , newItem]);
  };

  useEffect(() => {
    const fetchFeedbacksItems = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks");

      if (!response.ok) {
        throw new Error("There was an error loading the feedbacks");
      }
      const data = await response.json();
      setFeedbackItems(data.feedbacks);
        
      } catch (error) {
        setErrorMessage("There was an error loading the feedbacks");
      }
      
      setIsLoading(false);
    };
    

    fetchFeedbacksItems()
  }, []);


  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(
  //     "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
  //   )
  //     .then((response) =>  {
  //       if(!response.ok) {
  //         throw new Error("There was an error loading the feedbacks");
  //       }
  //       return response.json()})
  //     .then((data) => {
  //       setFeedbackItems(data.feedbacks);
  //       setIsLoading(false);
  //     })
  //     .catch(() => {
  //       // nerwork erro, nmot in 2xx response, or JOSN parsing error
  //       setErrorMessage("There was an error loading the feedbacks");
  //       setIsLoading(false);
  //     });
  // }, []);

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
