// src/config/sequelize.js
const { Sequelize } = require('sequelize');

// Met le port 5435 si tu as modifié le mapping Docker à l'étape 1 (sinon 5432)
const sequelize = new Sequelize('postgres://app:app@127.0.0.1:5435/coursera', {
  logging: false,
});

sequelize.authenticate()
  .then(() => console.log('✅ PostgreSQL connected'))
  .catch((err) => console.error(' Erreur de connexion PostgreSQL :', err));

module.exports = sequelize;