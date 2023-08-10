const { DataTypes } = require('sequelize');
const db = require('../configs/db.config');

module.exports = db.define(
  'Role',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  { tableName: 'roles' }
);
