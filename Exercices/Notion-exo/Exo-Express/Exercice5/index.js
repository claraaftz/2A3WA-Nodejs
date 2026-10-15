const express = require('express');
const app = express();

function verifierAcces(req, res, next) {
  if (req.headers.authorization === 'secret') {
    return next();
  }
  res.status(401).send('Accès refusé');
}

// Route publique
app.get('/', (req, res) => {
  res.send('Page publique');
});

// Le middleware ne s'applique qu'aux chemins commençant par /admin
app.use('/admin', verifierAcces);

app.get('/admin', (req, res) => {
  res.send('Bienvenue dans la zone admin');
});

app.get('/admin/stats', (req, res) => {
  res.send('Statistiques secrètes');
});

app.listen(3000, () => {
  console.log('Serveur Express démarré sur http://localhost:3000');
});