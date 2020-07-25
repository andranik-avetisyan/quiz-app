const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.sequelize.define(
  'quizzes',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quiz: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    created_at: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    timestamps: false,
  }
);
