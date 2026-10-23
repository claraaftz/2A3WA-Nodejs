const express = require('express');
const sequelize = require('./config/sequelize');
const Livre = require('./models/livre.model');

const app = express();

app.use(express.json());

app.post('/livres', async (req, res) => {
  try {
    const nouveauLivre = await Livre.create(req.body);
    res.status(201).json(nouveauLivre);
  } catch (erreur) {
    res.status(400).json({ erreur: erreur.message });
  }
});

async function demarrerServeur() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connexion + synchronisation BDD réussie.');

    app.listen(3000, () => {
      console.log('Serveur démarré sur http://localhost:3000');
    });
  } catch (erreur) {
    console.error('Impossible start serveur :', erreur.message);
  }
}

demarrerServeur();