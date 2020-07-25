const { Sequelize } = require('sequelize');
const db = {};
const sequelize = new Sequelize(process.env.DB, process.env.MYSQL_USER, process.env.MYSQL_PASSW, {
  host: process.env.HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.info('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', error);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
