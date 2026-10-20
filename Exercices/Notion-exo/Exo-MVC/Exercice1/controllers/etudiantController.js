const etudiantModel = require('../models/etudiantModel');
const etudiantView = require('../views/etudiantView');

//function : recup etudiants + affiche view
function getEtudiantsAdmis(req, res) {
  const admis = etudiantModel.getAdmis();
  const pageHtml = etudiantView.renderAdmisList(admis);

  res.send(pageHtml);
}

module.exports = {getEtudiantsAdmis: getEtudiantsAdmis};