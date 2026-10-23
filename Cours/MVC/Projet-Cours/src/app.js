const express = require('express');
const path = require('path');
const morgan = require('morgan');
const coursesRouter = require('./routes/courses.routes');

const app = express();

// Configuration des vues
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middlewares
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// Routing
app.use('/courses', coursesRouter);

app.get('/', (req, res) => {
  res.render('index');
});

// Démarrage
app.listen(3000, () => {
  console.log('Serveur MVC démarré sur http://localhost:3000');
});