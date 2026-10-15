const express = require('express');  //import framework express
const path = require('path');  //import module natif path 
const app = express();


app.set('view engine', 'pug'); //On dit a express de utiliser le moteur pug
app.set('views', path.join(__dirname, 'views')); //Indique ou sont fichiers vues 

app.get('/', (req, res) => { //Ecoute requetes HTTP GET sur le chemin '/' ==> racine 
  res.render('index'); //Express cherche fichier index.pug dans views 
});


const PORT = 3000;
app.listen(PORT, () => { //Lance serv port 3000
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});