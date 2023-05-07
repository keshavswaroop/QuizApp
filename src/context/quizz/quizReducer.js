import React from "react";
import {
  TEST,
  REVIEW,
  RESULT,
  USER,
  LOGOUT,
  COUNT,
  SET_ANSWER,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case TEST: {
      return {
        ...state,
        test: action.payload,
      };
    }
    case USER: {
      return {
        ...state,
        login: true,
        user: action.payload,
      };
    }
    case LOGOUT: {
      return {
        test: {},
        login: false,
        user: {},
      };
    }
    case REVIEW:
      return {
        ...state,
        review: action.payload,
      };
    case COUNT: {
      return {
        ...state,
        count: action.payload,
      };
    }
    case SET_ANSWER: {
      return {
        ...state,
        userAnswers: action.payload,
      };
    }
    case RESULT: {
      return {
        ...state,
        results: action.payload,
      };
    }
    default:
      return {
        state,
      };
  }
};
