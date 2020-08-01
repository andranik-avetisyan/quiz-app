import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loadQuizzes, deleteQuiz } from '../../actions/quizzesActions';

export const QuizzesList = () => {
  const dispatch = useDispatch();
  const { quizzes } = useSelector((state) => state.quizzes);

  useEffect(() => {
    dispatch(loadQuizzes());
  }, [dispatch]);

  const handleClick = (e) => {
    dispatch(deleteQuiz(e.target.value, loadQuizzes));
  };

  return (
    <div>
      <p>You are on the Quizzes List component!</p>
      {!!quizzes &&
        quizzes.map((item) => (
          <div key={item.id}>
            <p>{item.quiz}</p>
            <Button value={item.id} variant="dark" onClick={handleClick}>
              Delete
            </Button>
          </div>
        ))}
    </div>
  );
};

export default QuizzesList;
