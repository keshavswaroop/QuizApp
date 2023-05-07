import React from "react";
import Test from "../quizz/Tests";
import { Link } from "react-router-dom";
import QuizContext from "../../context/quizz/quizContext";
const Home = () => {
  const quizContext = React.useContext(QuizContext);

  const { login } = quizContext;
  return (
    <div>
      {login ? (
        <Test />
      ) : (
        <h1>
          Click here to <Link to="/login">Login</Link>
        </h1>
      )}
    </div>
  );
};

export default Home;
