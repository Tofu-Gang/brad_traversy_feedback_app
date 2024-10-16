import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (itemId) => {
    if(window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== itemId));
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={ addFeedback }/>
        <FeedbackStats feedback={ feedback } />
        <FeedbackList feedback={ feedback } handleDelete={ deleteFeedback }/>
      </div>
    </>
  );
}

export default App
