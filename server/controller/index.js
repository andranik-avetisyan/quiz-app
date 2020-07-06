const Quiz = require('../db/appModel.js');

exports.listAllQuizzes = (req, res) => {
  Quiz.getAllQuizzes((err, quiz) => {
    if (err) {
      res.send(err);
    }
    res.send(quiz);
  });
};

exports.createQuiz = (req, res) => {
  const newQuiz = new Quiz(req.body);

  if (!newQuiz.quiz || !newQuiz.status) {
    res.status(400).send({ error: true, message: 'Please provide quiz/status' });
  } else {
    Quiz.createQuiz(newQuiz, (err, quiz) => {
      if (err) {
        res.send(err);
      }
      res.json(quiz);
    });
  }
};

exports.readQuiz = (req, res) => {
  Quiz.getQuizById(req.params.quizId, (err, quiz) => {
    if (err) {
      res.send(err);
    }
    res.json(quiz);
  });
};

exports.updateQuiz = (req, res) => {
  Quiz.updateById(req.params.quizId, new Quiz(req.body), (err, quiz) => {
    if (err) {
      res.send(err);
    }
    res.json(quiz);
  });
};

exports.deleteQuiz = (req, res) => {
  Quiz.remove(req.params.quizId, (err, quiz) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Quiz successfully deleted' });
  });
};
