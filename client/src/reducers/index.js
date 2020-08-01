import { combineReducers } from 'redux';

import quizzes from './quizzes';
import user from './user'

const allReducers = combineReducers({
  quizzes,
  user,
});

export default allReducers;
