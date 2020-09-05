import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Authentication } from './libs/Authentication'

import Navbar from './components/Quizzes/NavbarComponent';
import HomePage from './components/Quizzes/HomePage';
import QuizzesList from './components/Quizzes/QuizzesListComponent';
import EditQuiz from './components/Quizzes/EditQuizComponent';
import CreateQuiz from './components/Quizzes/CreateQuizComponent';
import Login from './components/Login/LogIn';
import Register from './components/Register/Register';

function App() {
  const { user } = useSelector((state) => state.user);
  const isAdmin = user && user.isAdmin;
  const authCreate = Authentication(CreateQuiz, isAdmin);

  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={HomePage} />
        <Route path="/quizzes" component={QuizzesList} />
        <Route path="/edit/:id" component={EditQuiz} />
        <Route path="/create" component={authCreate} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  );
}

export default App;
