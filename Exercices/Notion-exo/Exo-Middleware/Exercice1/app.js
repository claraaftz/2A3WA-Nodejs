const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { getCurrentUser, isAuthenticated } = require('./middleware');

const app = express();

app.use(express.static(path.join(__dirname, 'public'))); //fichiers statiques 
app.use(express.json()); //recup données req.body (json form)
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); //middleware de morgan 

app.set('views', path.join(__dirname, 'views')); //config pug
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send('Page d\'accueil'); //routes get principales 
});
app.get('/about', (req, res) => {
  res.send('À propos');
});
app.get('/article', getCurrentUser, isAuthenticated, (req, res) => { //routes protégees middleware 
  res.render('index', { name: req.user.name });
});


app.post('/article', (req, res) => { //route post creation article 
  console.log('Données reçues :', req.body);
  res.send('ok');
});



app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});