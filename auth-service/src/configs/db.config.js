const { Sequelize } = require('sequelize');

const config = {
  db: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: String(process.env.DB_PASSWORD),
  options: {
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT,
  },
};

module.exports = new Sequelize(
  config.db,
  config.user,
  config.password,
  config.options
);
