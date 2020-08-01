import { LOAD_ALL_QUIZZES, DELETE_QUIZ } from '../actions/actionTypes';

export const quizzesReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_ALL_QUIZZES: {
      return {
        ...state,
        quizzes: action.payload,
      };
    }
    case DELETE_QUIZ: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default quizzesReducer;
