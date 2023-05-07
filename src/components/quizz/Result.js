import React from "react";
import { Link } from "react-router-dom";
import QuizContext from "../../context/quizz/quizContext";
import "../../style/quizz/result.css";
var questionCorrectAnswer = "";
var i = -1;
var score = 0;
var total = 0;
var result = [];
var correct = [];
var wrong = [];
var answers = [];
const Result = () => {
  const quizContext = React.useContext(QuizContext);

  //Displaying the result
  const { userAnswers, test, results } = quizContext;

  React.useEffect(() => {
    i = -1;
    score = 0;
    total = 0;
    result = [];
    correct = [];
    wrong = [];
    var valuesArray = Object.entries(userAnswers);
    valuesArray.map(([key, value], index) => {
      result.push(value);
      answers.push(value);
    });
    console.log(result);
    test.questions.map((item, index) => {
      i = i + 1;
      console.log(i, result[i]);
      var correctAnswer = "";
      {
        item.answers &&
          item.answers.map((item, index) => {
            if (item.correct === true) {
              correctAnswer = item.answer;
            }
          });
      }
      if (result[i] === correctAnswer) {
        score = score + 1;
        correct.push(item.question);
      } else {
        wrong.push(item.question);
      }
      total = total + 1;
    });
  }, []);
  console.log(score, total);
  console.log(correct);
  console.log(wrong);

  const questionAnswer = (item) => {
    if (item.correct === true) {
      questionCorrectAnswer = item.answer;
    }
  };

  const { login } = quizContext;
  return (
    <div>
      {(login) ? (
        <div>
          (
          <div>
            <div class="result-bar">
              <div class="result-circle">
                <div class="result-number correct" style={{ color: "green" }}>
                  {score}
                </div>
                <div class="result-label">Correct</div>
              </div>
              <div class="result-circle">
                <div class="result-number incorrect" style={{ color: "red" }}>
                  {total - score}
                </div>
                <div class="result-label">Wrong</div>
              </div>
            </div>

            {(answers.length  >= 1 ) ? (
              <div className="quiz-container">
                {test.questions && test.questions.map((item, index) => {
                  i = i + 1;
                  console.log(i, answers[i]);

                  return (
                    <div className="question-container" key={index}>
                      <h3 className="question">{item.question}</h3>
                      <form>
                        {item.answers &&
                          item.answers.map((item, index) => {
                            console.log(item.answer, answers[i]);
                            questionAnswer(item);
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
                      <h4>
                        Correct answer :{" "}
                        <span style={{ color: "green" }}>
                          {questionCorrectAnswer}
                        </span>
                      </h4>
                    </div>
                  );
                })}
              </div>
            ) : (
              <h1 style={{ textAlign: "center" }}>
                Click here to <Link to="/">Start Test</Link>
              </h1>
            )}
          </div>
          )
        </div>
      ) : (
        <h1>
          Click here to <Link to="/login">Login</Link>
        </h1>
      )}
    </div>
  );
};

export default Result;
