const express = require('express');
const router = express.Router();
const courseController = require('../Controllers/courseController');

router.get('/', courseController.getAllCourses);
router.post('/new', courseController.createCourse);
router.get('/:id', courseController.getCourseById);

module.exports = router;