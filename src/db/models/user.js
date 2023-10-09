'use strict';


const Sequelize = require('sequelize');
const db = require('../config/sequalize');

const User = db.define('User', {
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