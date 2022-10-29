import Form from "../components/Form";
import { useContext } from "react";
import QuesContext from "../store/ques-context";
import Questions from "../components/Questions";

function Home() {
  const ctx = useContext(QuesContext);
  // const fetchQues = ctx.fetchQuestions;
  const { loading, fetchQuestions, data } = ctx;
  console.log(data);
  // useEffect(() => {
  //   fetchQuestions();
  // }, [fetchQuestions]);

  const fetchQues = (Reqdata) => {
    console.log(Reqdata.questions);
    fetchQuestions(Reqdata.questions, Reqdata.difficulty, Reqdata.category);
  };

  let show =
    loading === null ? (
      <Form onFetchData={fetchQues} />
    ) : (
      <Questions questions={data} />
    );
  return <div>{show}</div>;
}

export default Home;
