import { useState } from "react";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";
import Button from "./shared/Button";

const MIN_TEXT_LENGTH = 10;

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const handleTextChange = (event) => {
    setText(event.target.value);

    if(text.length === 0) {
      setBtnDisabled(true);
      setMessage(null);
    } else if(text.length <= MIN_TEXT_LENGTH) {
      setBtnDisabled(true);
      setMessage(`Text must be at least ${MIN_TEXT_LENGTH} characters.`);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(text.trim().length > MIN_TEXT_LENGTH) {
      const newFeedback = { text, rating };
      handleAdd(newFeedback);
      setText("");
      setRating(10);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
