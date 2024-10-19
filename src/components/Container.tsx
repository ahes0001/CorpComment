import { TFeedbackItem } from "../lib/types";
import FeedbackList from "./FeedbackList";
import Header from "./Header";

type ContainerProps = {
  feedbackItems: Array<TFeedbackItem>//or TFeedbackItem[];
  isloading: boolean;
  errorMessage: string;
  handleAddToList: (text:string) => void;
}

export default function Container({ feedbackItems, isloading, errorMessage, handleAddToList }: ContainerProps) {
  return (
    <main className="container">
        <Header handleAddToList = {handleAddToList}/>
        <FeedbackList feedbackItems = {feedbackItems} isloading = {isloading} errorMessage = {errorMessage}/>
    </main>
  )
}
