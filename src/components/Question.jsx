import React, { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import question from "../question";

export default function Question({
  questionIndex,
  onSelectAnswer,
  handleSkipAnswer,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: question[questionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.selectedAnswer !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? handleSkipAnswer : null}
        mode={answerState}
      />
      <h2> {question[questionIndex].text}</h2>
      <Answers
        answerState={answerState}
        answers={question[questionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
