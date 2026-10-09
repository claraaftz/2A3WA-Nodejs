const fs = require('node:fs/promises');
const path = require('node:path');

const filePath = path.join(__dirname, 'data', 'users.json');

async function main() {
  try {
    const data = await fs.readFile(filePath, 'utf-8');

    const users = JSON.parse(data);

    console.log('Liste des utilisateurs :');
    users.forEach(user => console.log(`- ${user.name}`));

  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`Erreur : Le fichier est introuvable à l'adresse ${filePath}`);
    } else if (error instanceof SyntaxError) {
      console.error('Erreur : Le fichier JSON est mal formé.');
    } else {
      console.error('Erreur inattendue :', error.message);
    }
  }
}

main();