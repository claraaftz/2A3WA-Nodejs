const express = require('express');
const app = express();

app.get('/article', (req, res) => {
  res.send('Liste des articles');
});

app.post('/article', (req, res) => {
  res.send('Article créé');
});

app.put('/article', (req, res) => {
  res.send('Article mis à jour');
});

app.delete('/article', (req, res) => {
  res.send('Article supprimé');
});

app.listen(3000, () => {
  console.log('Serveur Express démarré sur http://localhost:3000');
});