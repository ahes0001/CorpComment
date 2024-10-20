import { useState } from "react";
import { MAXLENGTH } from "../../lib/constants";

type FeedbackFormProps = {
  onAddToList: (text:string) => void;
};

export default function FeedbackForm({onAddToList}:FeedbackFormProps) {
  const [userInput, setUserInput] = useState("");

  const charCount = MAXLENGTH - userInput.length;
  const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    if (inputValue.length <= MAXLENGTH) {
      setUserInput(inputValue);
    }
  }

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddToList(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
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
        <button >
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
