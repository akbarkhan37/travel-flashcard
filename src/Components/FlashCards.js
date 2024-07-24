import React, { useState } from "react";
import "./FlashCard.css";

const questions = [
  {
    id: 1,
    question: "What language is react based on",
    answer: "JavaScript",
  },
  {
    id: 2,
    question: "What are the building blocks of react-app",
    answer: "Components",
  },
  {
    id: 3,
    question: "What's the name of syntax we use to describe UI in react js",
    answer: "JSX",
  },
  {
    id: 4,
    question: "How to pass data from parent to child component",
    answer: "Props",
  },
];

const FlashCards = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div className="flashcards">
      {questions.map((item) => (
        <div
          key={item.id}
          className={`flashcard ${item.id === selectedId ? "selected" : ""}`}
          onClick={() => handleClick(item.id)}
        >
          <p>{item.id === selectedId ? item.answer : item.question}</p>
        </div>
      ))}
    </div>
  );
};

export default FlashCards;
