const sequelize = require('../config/sequelize');
const Livre = require('../models/livre.model');

const livresDeTest = [
  { titre: 'Un Automne pour te pardonner', auteur: 'Morgane Moncomble', nbPages: 450 },
  { titre: 'Un Ete pour te retrouver', auteur: 'Morgane Moncomble', nbPages: 450 },
  { titre: 'Un Printemps pour te succomber', auteur: 'Morgane Moncomble', nbPages: 450 },
  { titre: 'Trouble Maker', auteur: 'Laura Swan', nbPages: 600 },
  { titre: 'Trouble Maker 2', auteur: 'Laura Swan', nbPages: 600 },
  { titre: 'Ephemère 1', auteur: 'Ema Dinkel', nbPages: 400 },
  { titre: 'Ephemère 2', auteur: 'Ema Dinkel', nbPages: 400 },
  { titre: 'Altitude', auteur: 'Ema Dinkel', nbPages: 400 }
];

async function seed() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    //vide table livres 
    await Livre.destroy({ where: {} });
    //insere tous en 1 fois 
    await Livre.bulkCreate(livresDeTest);
    //compte affiche nb livre
    const total = await Livre.count();
    console.log(`Seed réussi ! Nombre de livres en BDD : ${total}`);
    
    await sequelize.close();
  } catch (erreur) {
    console.error('Erreur lors du seed :', erreur.message);
  }
}

seed();