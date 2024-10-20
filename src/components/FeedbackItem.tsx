import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../lib/types";


type FeedbackItemProps = {feedbackItem : TFeedbackItem};

export default function FeedbackItem({feedbackItem}: FeedbackItemProps) {
  return (
    <li className="feedback">
        <button>
            <TriangleUpIcon />
            <span>{feedbackItem.upvoteCount}</span>
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
