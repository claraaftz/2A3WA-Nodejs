const express = require('express');
const app = express();

// Middleware placé AVANT les routes
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

app.get('/bonjour', (req, res) => {
  res.send('Bonjour !');
});

app.listen(3000, () => {
  console.log('Serveur Express démarré sur http://localhost:3000');
});