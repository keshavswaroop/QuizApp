import React, { useContext, useEffect } from "react";
import QuizzContext from "../../context/quizz/quizContext";
import "../../style/quizz/test.css";
import Questions from "./Questions";

const Test = () => {
  const quizContext = useContext(QuizzContext);

  const { test, getQuestion, user, login } = quizContext;
  var result = [];
  const { loginUser } = user;
  const { name, email } = loginUser;

  useEffect(() => {
    getQuestion();
    console.log(user);
    console.log(login);
  }, []);

  return (
    <div>
      <Questions/>
    </div>
  );
};

export default Test;
