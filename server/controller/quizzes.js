const Quiz = require('../database/models/quiz');

exports.listAllQuizzes = (req, res) => {
  Quiz.findAll()
    .then((quizzes) => {
      res.send(quizzes);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.createQuiz = (req, res) => {
  const today = new Date();
  const newQuiz = {
    quiz: req.body.quiz,
    status: req.body.status,
    created_at: today,
  };

  if (!newQuiz.quiz || !newQuiz.status) {
    res.status(400).send({ error: true, message: 'Please provide quiz/status' });
  } else {
    Quiz.create(newQuiz)
      .then((quiz) => {
        res.json({ status: 'Quiz added!' });
      })
      .catch((err) => {
        console.log(err);
        res.send('error: ' + err);
      });
  }
};

exports.readQuiz = (req, res) => {
  Quiz.findOne({
    where: {
      id: req.params.quizId,
    },
  })
    .then((quiz) => {
      res.json(quiz);
    })
    .catch(() => {
      res.send(err);
    });
};

exports.updateQuiz = (req, res) => {
  Quiz.update(
    { quiz: req.body.quiz, created_at: new Date() },
    {
      where: {
        id: req.params.quizId,
      },
    }
  )
    .then((quiz) => {
      res.json(quiz);
    })
    .catch(() => {
      res.send(err);
    });
};

exports.deleteQuiz = (req, res) => {
  console.log(req.params.quizId);
  Quiz.destroy({
    where: {
      id: req.params.quizId,
    },
  })
    .then(() => {
      res.json({ message: 'Quiz successfully deleted' });
    })
    .catch((err) => {
      res.send(err);
    });
};
