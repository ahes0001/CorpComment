import { useState } from "react";
import { MAXLENGTH } from "../lib/constants";

export default function FeedbackForm() {
  const [userInput, setUserInput] = useState("");

  const charCount = MAXLENGTH - userInput.length;

  return (
    <form className="form">
      <textarea
        value={userInput}
        onChange={(e) => {
          const inputValue = e.target.value;
          if (inputValue.length <= MAXLENGTH) {
            setUserInput(inputValue);
          }
        }}
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
