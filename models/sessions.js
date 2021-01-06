'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sessions extends Model {
    static associate(models) {
      this.belongsTo(models.users)
    }
  };
  sessions.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(11)
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: "users",
        key: "id"
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'sessions',
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  return sessions;
};