import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Quizzes/NavbarComponent';
import QuizzesList from './components/Quizzes/QuizzesListComponent';
import EditQuiz from './components/Quizzes/EditQuizComponent';
import CreateQuiz from './components/Quizzes/CreateQuizComponent';
import Login from './components/Login/LogIn';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={QuizzesList} />
        <Route path="/edit/:id" component={EditQuiz} />
        <Route path="/create" component={CreateQuiz} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
