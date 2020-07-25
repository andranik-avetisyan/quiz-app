module.exports = (app) => {
  const quizzes = require('../controller/quizzes');
  const { login, register, profile } = require('../controller/users');

  app.route('/quizzes').get(quizzes.listAllQuizzes).post(quizzes.createQuiz);

  app
    .route('/quizzes/:quizId')
    .get(quizzes.readQuiz)
    .put(quizzes.updateQuiz)
    .delete(quizzes.deleteQuiz);

  app.route('/login').post(login);
  app.route('/register').post(register);
  app.route('/profile').get(profile);
};
