const Course = require('../models/course.model');

exports.getCourses = async (req, res, next) => {
  try {
    const courses = await Course.findAll({
      order: [
        ['nbChapters', 'DESC'],
        ['title', 'ASC']
      ]
    });
    res.jsonSuccess(courses);
  } catch (error) {
    next(error);
  }
};

exports.addCourse = async (req, res, next) => {
  try {
    const { title, nbChapters } = req.body;
    const course = await Course.create({
      title,
      nbChapters,
      userId: req.user.id
    });
    res.jsonSuccess(course, 201);
  } catch (error) {
    next(error); // Délégation au middleware d'erreur
  }
};