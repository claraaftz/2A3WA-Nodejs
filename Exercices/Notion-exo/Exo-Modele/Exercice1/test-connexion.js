// Importation de la configuration Sequelize
const sequelize = require('./config/sequelize');

async function testerConnexion() {
  try {
    await sequelize.authenticate();
    console.log('Connexion réussie');
  } catch (erreur) {
    console.error('Erreur de connexion :', erreur.message);
  }
}

testerConnexion();