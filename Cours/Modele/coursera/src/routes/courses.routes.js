const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/courses.controller');
const { isAuthenticated } = require('../middlewares/auth.middleware');

// 1. Routes spécifiques d'abord
router.get('/', coursesController.getCourses);
router.post('/new', isAuthenticated, coursesController.addCourse); // Route protégée

// 2. Routes avec paramètres dynamiques à la fin
module.exports = router;