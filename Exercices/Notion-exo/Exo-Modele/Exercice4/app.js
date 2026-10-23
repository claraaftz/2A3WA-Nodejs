const express = require('express');
const sequelize = require('./config/sequelize');
const Livre = require('./models/livre.model');

const app = express();
app.use(express.json());

//fin all : tt livres
app.get('/livres', async (req, res) => {
  try {
    const livres = await Livre.findAll();
    res.json(livres);
  } catch (erreur) {
    res.status(500).json({ erreur: erreur.message });
  }
});


//un livre par id 
app.get('/livres/:id', async (req, res) => {
  try {
    const livre = await Livre.findByPk(req.params.id);
    if (livre) {
      res.json(livre);
    } else {
      res.status(404).json({ message: 'Livre introuvable' });
    }
  } catch (erreur) {
    res.status(500).json({ erreur: erreur.message });
  }
});



app.post('/livres', async (req, res) => {
  try {
    const nouveauLivre = await Livre.create(req.body);
    res.status(201).json(nouveauLivre);
  } catch (erreur) {
    res.status(400).json({ erreur: erreur.message });
  }
});


async function demarrer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(3000, () => {
      console.log('Serveur démarré sur http://localhost:3000');
    });
  } catch (erreur) {
    console.error('Erreur au démarrage :', erreur.message);
  }
}

demarrer();