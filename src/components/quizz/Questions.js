import React from "react";
import QuizzContext from "../../context/quizz/quizContext";
import Options from "./Options";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  const navigate = useNavigate();
  const quizContext = React.useContext(QuizzContext);

  const { test, userAnswers } = quizContext;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userAnswers);

    navigate("/review");
  };

  console.log(test);
  return (
    <div className="quiz-container">
      {test.questions &&
        test.questions.map((item, index) => {
          var question = item.question;
          var correctAnswer = "";
          {
            item.answers &&
              item.answers.map((item, index) => {
                if (item.correct === true) {
                  correctAnswer = item.answer;
                }
              });
          }
          return (
            <div className="question-container" key={index}>
              <h3 className="question">{item.question}</h3>
              <form>
                {item.answers &&
                  item.answers.map((item, index) => {
                    return (
                      <div key={index}>
                        <Options
                          item={item.answer}
                          question={question}
                          correctAnswer={correctAnswer}
                        />
                      </div>
                    );
                  })}
              </form>
            </div>
          );
        })}
      <button className="btn btn-primary" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Questions;
