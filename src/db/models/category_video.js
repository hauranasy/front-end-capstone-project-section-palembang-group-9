'use strict';

const Sequelize = require("sequelize");
const db = require("../config/sequalize");

const category_videos = db.define('category_videos', {
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
//   class category_video extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   category_video.init({
//     tittle: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'category_video',
//   });
//   return category_video;
// };