// Données brutes
const etudiants = [
  { id: 1, prenom: 'Camille', note: 14 },
  { id: 2, prenom: 'Sam', note: 9 },
  { id: 3, prenom: 'Alex', note: 17 }
];

//function : filtre etudiants note >= 10
function getAdmis() {
  const tableauAdmis = [];

  for (let i = 0; i < etudiants.length; i++) {
    const etudiant = etudiants[i];
    if (etudiant.note >= 10) {
      tableauAdmis.push(etudiant);
    }
  }

  return tableauAdmis;
}


module.exports = {getAdmis: getAdmis};