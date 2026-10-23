const sequelize = require('./config/sequelize');

const Livre = require('./models/livre.model');

async function testerLivre() {
  try {
    await sequelize.sync();
    const nombre = await Livre.count();

    console.log('Nb livres dans la BDD :', nombre);
  } catch (erreur) {
    console.error('Error :', erreur.message);
  }
}

testerLivre();