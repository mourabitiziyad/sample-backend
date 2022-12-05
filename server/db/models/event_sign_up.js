'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event_sign_up extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Event_sign_up.hasMany(models.Event, {
      //   foreignKey: 'event_id',
      //   sourceKey: 'event_id'
      // });
      Event_sign_up.hasMany(models.User, {
        foreignKey: 'user_id'
      });
    }
  };
  Event_sign_up.init({
    user_id: {type: DataTypes.INTEGER,
      primaryKey: true},
    event_id: {type: DataTypes.INTEGER,
      primaryKey: true},
    id: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Event_sign_up',
  });
  return Event_sign_up;
};