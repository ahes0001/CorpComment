import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/types";
import { useState } from "react";


type FeedbackItemProps = {feedbackItem : TFeedbackItem};

export default function FeedbackItem({feedbackItem}: FeedbackItemProps) {

  const [open, setOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);

  const handleUpVote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUpvoteCount(upvoteCount+1)
    e.currentTarget.disabled = true;
    e.stopPropagation();
  };

  return (
    <li onClick = {() => setOpen((prev)=> !prev)} className={`feedback ${open ? "feedback--expand": ""}`}>
        <button onClick = {handleUpVote}>
            <TriangleUpIcon />
            <span>{upvoteCount}</span>
        </button>
        <div>
            <p>{feedbackItem.badgeLetter}</p>

        </div>
        <div>
            <p>{feedbackItem.company}</p>
            <p>{feedbackItem.text}</p>
        </div>

        {/* <p>{feedbackItem.daysAgo}d</p> */}
        <p>{feedbackItem.daysAgo == 0? 'NEW':`${feedbackItem.daysAgo} d`}</p>
      </li>
  )
}
