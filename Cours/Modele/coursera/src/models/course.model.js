const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./user.model'); // 1. Importer User

class Course extends Model {}

Course.init({
  title: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  nbChapters: { 
    type: DataTypes.INTEGER, 
    allowNull: false, 
  },
  done: { 
    type: DataTypes.BOOLEAN, 
    defaultValue: false 
  }
}, {
  sequelize,
  modelName: 'Course',
  tableName: 'courses',
  timestamps: true
});

// 2. Définir les associations
Course.belongsTo(User, { foreignKey: 'userId', as: 'user' });
User.hasMany(Course, { foreignKey: 'userId', as: 'courses' });

module.exports = Course;