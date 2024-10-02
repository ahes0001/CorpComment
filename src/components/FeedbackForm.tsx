import { useState } from "react";
import { MAXLENGTH } from "../lib/constants";

export default function FeedbackForm() {
  const [userInput, setUserInput] = useState("");

  const charCount = MAXLENGTH - userInput.length;
  const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    if (inputValue.length <= MAXLENGTH) {
      setUserInput(inputValue);
    }
  }

  return (
    <form className="form">
      <textarea
        value={userInput}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder="null"
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
