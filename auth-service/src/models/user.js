const { DataTypes } = require('sequelize');
const db = require('../configs/db.config');

module.exports = db.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING, allowNull: false },
    patronymic: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.TEXT, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING },
    avatar: { type: DataTypes.TEXT },
    telegram_id: { type: DataTypes.INTEGER },
  },
  { tableName: 'users' }
);
