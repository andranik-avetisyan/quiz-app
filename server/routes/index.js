module.exports = (app) => {
  const quizzes = require('../controller');

  app.route('/quizzes').get(quizzes.listAllQuizzes).post(quizzes.createQuiz);

  app
    .route('/quizzes/:quizId')
    .get(quizzes.readQuiz)
    .put(quizzes.updateQuiz)
    .delete(quizzes.deleteQuiz);
};
