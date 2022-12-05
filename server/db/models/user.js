'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
   /* static associate(models) {
      User.hasMany(models.Event, {
        foreignKey: {
          name:'user_id', 
          allowNull: false
        },
        as: 'create',
        onDelete: 'CASCADE',
      })
    }*/
     static associate = function(models) {
      // associations can be defined here
      User.hasMany(models.Event, {
        foreignKey: 'user_id'
      });
      // User.belongsTo(models.Event_sing_up, {
      //   foreignKey: 'user_id'
      // });
      User.hasMany(models.Notification, {
        foreignKey: 'notification_id'
      }); 
    };
  };
  User.init({
    user_fname: DataTypes.STRING,
    user_lname: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    user_registered_events_num: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'User',
  });
 
  return User;
};