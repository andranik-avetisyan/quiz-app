const sql = require('./index.js');


const Quiz = function (quiz) {
  this.quiz = quiz.quiz;
  this.status = quiz.status;
  this.created_at = new Date();
};
Quiz.createQuiz = (newQuiz, result) => {
  sql.query('INSERT INTO quizzes set ?', newQuiz, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Quiz.getQuizById = (quizId, result) => {
  sql.query('Select quiz from quizzes where id = ? ', quizId, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Quiz.getAllQuizzes = (result) => {
  sql.query('Select * from quizzes', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      console.log('quizzes : ', res);

      result(null, res);
    }
  });
};
Quiz.updateById = (id, quiz, result) => {
  sql.query('UPDATE quizzes SET quiz = ? WHERE id = ?', [quiz.quiz, id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Quiz.remove = (id, result) => {
  sql.query('DELETE FROM quizzes WHERE id = ?', [id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Quiz;
