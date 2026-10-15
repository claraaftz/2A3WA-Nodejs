const express = require('express');
const fs = require('fs'); //import module natif fs lire fichier 
const path = require('path');


const app = express();

app.engine('html', (filePath, options, callback) => {
  fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
      return callback(err);
    }
    const htmlFinal = content.replace('{{nom}}', options.nom || '');

    return callback(null, htmlFinal);
  });
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('accueil', { nom: 'Alex' });
});
app.get('/profil', (req, res) => {
  res.render('accueil', { nom: 'Camille' });
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});