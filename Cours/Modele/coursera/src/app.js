const express = require('express');
const morgan = require('morgan');
const sequelize = require('./config/sequelize');

require('./models/course.model');
require('./models/user.model');

const coursesRouter = require('./routes/courses.routes');
const usersRouter = require('./routes/users.routes');

const { formatResponse } = require('./middlewares/format.middleware');
const { errorHandlerMiddleware } = require('./middlewares/error-handler.middleware');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(formatResponse); // Formatage des réponses

app.use('/courses', coursesRouter);
app.use('/users', usersRouter);

app.use(errorHandlerMiddleware); // Gestion globale des erreurs (en dernier)

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('✅ PostgreSQL connected & Models synced');

    app.listen(3000, () => {
      console.log('🚀 Serveur démarré sur http://localhost:3000');
    });
  } catch (e) {
    console.error('Sequelize bootstrap error:', e);
  }
})();