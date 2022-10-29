import { useState } from "react";

function Questions({ questions }) {
  //   console.log(questions);
  const [indexNo, setIndexNo] = useState(0);
  const [correct, setCorrect] = useState(0);
  if (indexNo > questions.length - 1)
    return <div>No. of correct answers = {correct}</div>;

  const { correct_answer, incorrect_answers, type } = questions[indexNo];
  let answers = [];
  if (type !== "boolean") {
    const index = Math.floor(Math.random() * 4);
    // console.log(index, "index", correct_answer, incorrect_answers);
    answers[index] = correct_answer;
    // console.log(answers);
    for (let i = 0, j = 0; i < 4; i++) {
      if (answers[i]) {
        continue;
      }
      //   console.log(incorrect_answers[j]);
      answers[i] = incorrect_answers[j];
      j++;
    }
    // console.log(answers);
  } else {
    const index = Math.floor(Math.random() * 2);
    answers[index] = correct_answer;
    // console.log(answers, index);
    if (index === 0) {
      answers[1] = incorrect_answers[0];
    } else {
      answers[0] = incorrect_answers[0];
    }
    console.log(answers);
  }

  const findCorrect = (event) => {
    if (event.target.name === correct_answer) {
      setCorrect((prev) => prev + 1);
    }
    setIndexNo((prev) => prev + 1);
  };
  return (
    <div>
      <div>{questions[indexNo].question}</div>
      {answers.map((item) => (
        <button key={Math.random() * 1000} name={item} onClick={findCorrect}>
          {item}
        </button>
      ))}
      <button onClick={() => setIndexNo((prev) => prev + 1)}>
        Next Question
      </button>
    </div>
  );
}

export default Questions;
