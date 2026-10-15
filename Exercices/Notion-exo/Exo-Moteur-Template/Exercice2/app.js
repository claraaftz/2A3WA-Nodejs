const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.redirect('/profil');
});

app.get('/profil', (req, res) => {
  res.render('profil', {
    prenom: 'Camille',
    ville: 'Lyon'
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}/profil`);
});