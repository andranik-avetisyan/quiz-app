import { combineReducers } from 'redux';

import quizzes from './quizzes';

const allReducers = combineReducers({
  quizzes,
});

export default allReducers;
