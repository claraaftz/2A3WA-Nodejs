const express = require('express');
const courseRoute = require('./Routes/courseRoute');

const app = express();
app.use(express.json());
app.use('/courses', courseRoute);

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});