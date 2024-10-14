import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (itemId) => {
    if(window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== itemId));
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={ feedback } />
        <FeedbackList feedback={ feedback } handleDelete={ deleteFeedback }/>
      </div>
    </>
  );
}

export default App
