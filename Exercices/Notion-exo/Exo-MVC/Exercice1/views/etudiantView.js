//function : fait HTML
function renderAdmisList(tableauEtudiants) {
  let html = '<h1>Étudiants admis</h1><ul>';

  for (let i = 0; i < tableauEtudiants.length; i++) {
    const etudiant = tableauEtudiants[i];
    html = html + '<li>' + etudiant.prenom + ' : ' + etudiant.note + '/20</li>';
  }

  html = html + '</ul>';

  return html;
}

module.exports = {renderAdmisList: renderAdmisList};