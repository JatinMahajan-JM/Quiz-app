import { useState } from "react";

function Form(props) {
  const [input, setInput] = useState({
    questions: null,
    category: null,
    difficulty: null,
  });
  const changeHandler = (event) => {
    event.preventDefault();
    setInput({ ...input, [event.target.id]: event.target.value });
  };
  console.log(input);
  const submitHandler = (event) => {
    event.preventDefault();
    props.onFetchData(input);
  };
  return (
    <form onSubmit={submitHandler}>
      <h2>Quiz Application</h2>
      <div className="form-control">
        <label htmlFor="questions">Number of questions</label>
        <input type="number" id="questions" onChange={changeHandler} />
      </div>
      <div className="form-control">
        <label htmlFor="category">Select category</label>
        <select name="category" id="category" onChange={changeHandler}>
          <option value="tech">Tech</option>
          <option value="science">Science</option>
          <option value="news">News</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="difficulty">Select Difficulty</label>
        <select name="difficulty" id="difficulty" onChange={changeHandler}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button type="submit">START THE QUIZ</button>
    </form>
  );
}

export default Form;
