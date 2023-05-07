import React from "react";
import QuizContext from "../../context/quizz/quizContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//define a global array
var answers = [];

const Review = () => {
  const navigate = useNavigate();
  const quizContext = React.useContext(QuizContext);
  const { test, review, userAnswers,getResult,results } = quizContext;
  const { login } = quizContext;
  console.log(userAnswers);

  var i = -1;
  React.useEffect(() => {
    i = -1;
    answers = [];
    var valuesArray = Object.entries(userAnswers);
    valuesArray.map(([key, value], index) => {
      answers.push(value);
    });
  }, []);
  console.log(answers);

  const result = () => {
    getResult();
    navigate("/result");
  };

  return (
    <div>
      {login  ? (
        (answers.length >= 1 && !results) ? (
          <div className="quiz-container">
            {test.questions.map((item, index) => {
              i = i + 1;
              console.log(i, answers[i]);

              return (
                <div className="question-container" key={index}>
                  <h3 className="question">{item.question}</h3>
                  <form>
                    {item.answers &&
                      item.answers.map((item, index) => {
                        console.log(item.answer, answers[i]);
                        return (
                          <div key={index}>
                            <div className="options">
                              <div className="option">
                                <input
                                  type="radio"
                                  name={item.answer}
                                  value={item.answer}
                                  checked={answers[i] === item.answer}
                                  readOnly
                                />
                                <label>{item.answer}</label>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </form>
                </div>
              );
            })}
            <button className="btn" onClick={result}>
              Result
            </button>
          </div>
        ) : (
          <h1 style={{textAlign:"center"}}>
            Click here to <Link to="/">Start Test</Link>
          </h1>
        )
      ) : (
        <h1>
          Click here to <Link to="/login">Login</Link>
        </h1>
      )}
    </div>
  );
};

export default Review;
