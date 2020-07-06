import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/NavbarComponent';
import QuizzesList from './components/QuizzesListComponent';
import EditQuiz from './components/EditQuizComponent';
import CreateQuiz from './components/CreateQuizComponent';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={QuizzesList} />
        <Route path="/edit/:id" component={EditQuiz} />
        <Route path="/create" component={CreateQuiz} />
      </div>
    </Router>
  );
}

export default App;
