// Définition de la classe Etudiant
class Etudiant {
  constructor(id, prenom, note) {
    this.id = id;
    this.prenom = prenom;
    this.note = note;
  }

  estAdmis() {
    if (this.note >= 10) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Etudiant;