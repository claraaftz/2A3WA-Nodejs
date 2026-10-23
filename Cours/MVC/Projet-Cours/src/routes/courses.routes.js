const express = require('express');
const { displayForm, addCourse } = require('../controllers/courses.controller');

const router = express.Router();

router.get('/new', displayForm);
router.post('/', addCourse);

module.exports = router;