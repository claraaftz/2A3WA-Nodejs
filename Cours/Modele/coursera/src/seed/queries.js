const { Op } = require('sequelize');
const sequelize = require('../config/sequelize');
const Course = require('../models/course.model');

(async () => {
  try {
    await sequelize.authenticate();

    console.log('--- Tous les cours ---');
    const courses = await Course.findAll();
    console.log(courses.map(c => c.toJSON()));

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();