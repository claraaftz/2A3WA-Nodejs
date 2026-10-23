const { Course } = require('../models/course.model');

let courses = [];
let nextId = 0;

exports.displayForm = (req, res) => {
  res.render('partials/form');
};

exports.addCourse = (req, res) => {
  const { title, nbChapters, done } = req.body;
  const course = new Course(nextId++, title, '', nbChapters, done);
  courses.push(course);
  res.json('OK');
};