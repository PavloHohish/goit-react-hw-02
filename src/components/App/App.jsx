import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';
import Feedback from '../Feedback/Feedback';

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem('feedback');

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const total = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description />
      <Options
        onFeedback={updateFeedback}
        onReset={handleReset}
        showReset={total > 0}
      />
      {total === 0 ? <Notification /> : <Feedback feedback={feedback} />}
    </>
  );
}
