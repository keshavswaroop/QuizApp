import React, { useReducer } from "react";
import {
  TEST,
  REVIEW,
  RESULT,
  USER,
  LOGOUT,
  COUNT,
  SET_ANSWER,
} from "../types";
import data from "../../components/Data/question.json";
import QuizContext from "./quizContext";
import QuizReducer from "./quizReducer"; 


const QuizState = (props) => {
  const initialState = {
    test: {},
    review: {},
    results: 0,
    user: {},
    login: false,
    userAnswers: {},
    count: 0,
  };

  const [state, dispatch] = useReducer(QuizReducer, initialState);

  const getQuestion = () => {
    dispatch({
      type: TEST,
      payload: data,
    });
  };

  const setReview = (review) => {
    dispatch({
      type: REVIEW,
      payload: review,
    });
  };

  const setUserAnswers = (userAnswers) => {
    dispatch({
      type: SET_ANSWER,
      payload: userAnswers,
    });
  };

  const setCount = (count) => {
    dispatch({
      type: COUNT,
      payload: count,
    });
  };
  const userLogin = (userDetails) => {
    dispatch({
      type: USER,
      payload: userDetails,
    });
  };

  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  const getResult = () => {
    dispatch({
      type: RESULT,
      payload: 1,
    });
  };

  return (
    <QuizContext.Provider
      value={{
        test: state.test,
        review: state.quiz,
        result: state.result,
        user: state.user,
        login: state.login,
        getQuestion,
        userLogin,
        logout,
        setReview,
        setCount,
        count: state.count,
        userAnswers: state.userAnswers,
        setUserAnswers,
        getResult,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizState;
