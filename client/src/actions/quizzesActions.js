import axios from 'axios';
import { LOAD_ALL_QUIZZES, DELETE_QUIZ } from './actionTypes';

export const loadQuizzes = () => {
  return (dispatch) =>
    axios
      .get('http://localhost:5000/quizzes/')
      .then((response) => {
        dispatch({ type: LOAD_ALL_QUIZZES, payload: response.data });
      })
      .catch((error) => {
        throw error;
      });
};

export const deleteQuiz = (id, cb) => {
  return (dispatch) =>
    axios
      .delete(`http://localhost:5000/quizzes/${id}`)
      .then((response) => {
        dispatch({ type: DELETE_QUIZ, payload: response.data });
        dispatch(cb());
      })
      .catch((error) => {
        throw error;
      });
};
