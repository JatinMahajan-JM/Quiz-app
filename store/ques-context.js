import React from "react";

const QuesContext = React.createContext({
  fetchQuestions: () => {},
  loading: false,
  data: [],
});

export default QuesContext;
