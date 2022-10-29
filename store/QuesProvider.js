import { useCallback, useReducer } from "react";
import QuesContext from "./ques-context";

const reducerFn = (state, action) => {
  switch (action.type) {
    case "ASSIGN":
      return {
        loading: false,
        questions: action.data.results,
      };
    default:
      return state;
  }
};

function QuesProvider(props) {
  const [quesState, dispatchFn] = useReducer(reducerFn, {
    loading: null,
    questions: [],
  });
  const fetchQues = useCallback(async (amount, difficulty, category) => {
    console.log(amount, difficulty, category);
    // console.log(`https://opentdb.com/api.php?amount=${amount ?? 10}
    // &difficulty=${difficulty ?? "easy"}
    // ${category ? `&category=${category}` : ""}`);
    const res = await fetch(
      `https://opentdb.com/api.php?amount=${amount ?? 10}&difficulty=${
        difficulty ?? "easy"
      }`
    );
    const data = await res.json();
    dispatchFn({ type: "ASSIGN", data });
  }, []);
  const value = {
    fetchQuestions: fetchQues,
    loading: quesState.loading,
    data: quesState.questions,
  };
  return (
    <QuesContext.Provider value={value}>{props.children}</QuesContext.Provider>
  );
}

export default QuesProvider;
