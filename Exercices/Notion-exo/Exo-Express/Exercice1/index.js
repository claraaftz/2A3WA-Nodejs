const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur Express !');
});

app.listen(PORT, () => {
  console.log(`Serveur Express démarré : http://localhost:${PORT}`);
});