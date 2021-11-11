import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit augue quam, non iaculis eros efficitur ut. Sed gravida erat nec lacinia ornare. ",
      answerOptions: [
        {
          answerText: "Verdadeiro",
          isCorrect: false,
        },
        {
          answerText: "Falso",
          isCorrect: true,
        },
      ],
    },
    {
      questionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit augue quam, non iaculis eros efficitur ut. Sed gravida erat nec lacinia ornare. ",
      answerOptions: [
        {
          answerText: "Verdadeiro",
          isCorrect: false,
        },
        {
          answerText: "Falso",
          isCorrect: true,
        },
      ],
    },
    {
      questionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit augue quam, non iaculis eros efficitur ut. Sed gravida erat nec lacinia ornare. ",
      answerOptions: [
        {
          answerText: "Verdadeiro",
          isCorrect: true,
        },
        {
          answerText: "Falso",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit augue quam, non iaculis eros efficitur ut. Sed gravida erat nec lacinia ornare. ",
      answerOptions: [
        {
          answerText: "Verdadeiro",
          isCorrect: false,
        },

        {
          answerText: "Falso",
          isCorrect: true,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                <h4>{answerOption.answerText}</h4>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
