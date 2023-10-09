'use strict';

const Sequelize = require('sequelize');
const db = require('../config/sequalize');

const Blogs = db.define('Blogs', {
  title: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.TEXT,
  },
  image: {
    type: Sequelize.STRING,
  },
  author: {
    type: Sequelize.STRING,
  }
});

module.exports = Blogs;



// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class blog extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   blog.init({
//     title: DataTypes.STRING,
//     content: DataTypes.TEXT,
//     gambar: DataTypes.STRING,
//     author: DataTypes.STRING,
//   }, {
//     sequelize,
//     modelName: 'blog',
//   });
//   return blog;
// };