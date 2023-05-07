import React from "react";
import QuizContext from "../../context/quizz/quizContext";
import "../../style/quizz/test.css";

const Options = ({ question, item, correctAnswer }) => {

  const { userAnswers, setUserAnswers } = React.useContext(QuizContext);

  const handleAnswerChange = (event) => {
    setUserAnswers({
      ...userAnswers,
      [question]: event.target.value
    });
    
  };

  

  return (
    <div>
      <div class="option">
        <input
          type="radio"
          id={item}
          name={item}
          value={item}
          checked={userAnswers[question] === item}
          onChange={handleAnswerChange}
        />
        <label for={item}>{item}</label>
      </div>
    </div>
  );
};

export default Options;
