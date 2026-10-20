const express = require('express');
const etudiantController = require('./controllers/etudiantController');

const app = express();

app.get('/etudiants', etudiantController.getEtudiantsAdmis);

app.listen(3000, () => {
  console.log('Serveur lancé sur le port 3000');
  console.log('http://localhost:3000/etudiants');
});

setInterval(() => {}, 1000);