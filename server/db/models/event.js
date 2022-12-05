'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      });
      Event.belongsTo(models.Venue, {
         foreignKey: 'venue_id',
         as:'Venue',
         onDelete: 'CASCADE'
       });
      // Event.belongsTo(models.Event_sign_up, {
      //   foreignKey: 'event_id',
      //   sourceKey: 'id',
      // });
      Event.belongsTo(models.Sport, {
        foreignKey: 'sport_id'
      });
    }
  };
  Event.init({
    event_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    event_title: {
      //allowNull: false,
      type: DataTypes.STRING
    },
    id: {
      type: DataTypes.INTEGER
    },
    event_description: DataTypes.STRING,
    event_date: DataTypes.DATE,
    event_start_time: {
      type: DataTypes.STRING
    },
    event_end_time: {
      type: DataTypes.STRING
    },
    venue_id: DataTypes.INTEGER,
    sport_id: {
      type: DataTypes.INTEGER,
    },
    max_participants: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};