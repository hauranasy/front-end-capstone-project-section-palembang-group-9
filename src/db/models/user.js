'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     name: DataTypes.STRING,
//     username: DataTypes.STRING,
//     password: DataTypes.STRING,

//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };

// models/User.js
const Sequelize = require('sequelize');
const sequelize = require('../config/sequalize');

const User = sequelize.define('User', {
  name: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;