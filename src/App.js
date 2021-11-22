import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText:
        "Os projetos em Java são de uso exclusivo para aplicativos Android e não tem nenhuma aplicação além dessa. ",
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
      questionText: "Quem fundou a Apple?",
      answerOptions: [
        {
          answerText: "Bill Gates",
          isCorrect: false,
        },
        {
          answerText: "Sheryl Sandberg",
          isCorrect: false,
        },
        {
          answerText: "Steve Jobs",
          isCorrect: true,
        },
        {
          answerText: "Sundar Pichai",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Qual a sequência correta dos navegadores mais usados?",
      answerOptions: [
        {
          answerText: "a) Chrome, Microsoft Edge e Firefox.",
          isCorrect: true,
        },
        {
          answerText: "b) Firefox, Microsoft Edge e Chrome.",
          isCorrect: false,
        },
        {
          answerText: "c) Internet Explorer, Firefox e Chrome.",
          isCorrect: false,
        },
        {
          answerText: "d) Chrome, Firefox e Microsoft Edge.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Quem é o predecessor do Linux?",
      answerOptions: [
        {
          answerText: "a) DOS.",
          isCorrect: false,
        },

        {
          answerText: "b) MacOS.",
          isCorrect: false,
        },
        {
          answerText: "c) Unix.",
          isCorrect: true,
        },
        {
          answerText: "d) BeOS",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Java é uma linguagem de código aberto.",
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
        "Qual a linguagem de programação, script e marcação mais usadas atualmente? ",
      answerOptions: [
        {
          answerText: "a) HTML/CSS",
          isCorrect: false,
        },
        {
          answerText: "b) TypeScript",
          isCorrect: false,
        },
        {
          answerText: "c) Python",
          isCorrect: false,
        },
        {
          answerText: "d) JavaScript",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "Qual a banco de dados mais usado atualmente?",
      answerOptions: [
        {
          answerText: "a) MySQL.",
          isCorrect: true,
        },
        {
          answerText: "b) PostgreSQL",
          isCorrect: false,
        },
        {
          answerText: "c) SQLite",
          isCorrect: false,
        },
        {
          answerText: "d) MongoDB",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Qual plataforma de nuvem mais utilizado atualmente? ",
      answerOptions: [
        {
          answerText: "a) Google Cloud Platform.",
          isCorrect: false,
        },
        {
          answerText: "b) Microsoft Azure",
          isCorrect: false,
        },
        {
          answerText: "c) AWS",
          isCorrect: true,
        },
        {
          answerText: "d) Heroku",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "Scrum é uma metodologia ágil?",
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
        "Saber inglês básico é essencial para compreender a maioria das linguagens de programação.",
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
    <div className="card">
      {showScore ? (
        <div className="score-section">
          Você acertou {score} de {questions.length} perguntas
        </div>
      ) : (
        <>
          <div className="question-section">
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
