const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Affiche le User-Agent du client dans la console
  console.log('User-Agent :', req.headers['user-agent']);

  // Objet JavaScript à renvoyer
  const personne = {
    nom: 'Alice',
    age: 28,
    ville: 'Paris'
  };

  // Envoi de la réponse au format JSON
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(personne));
});

server.listen(PORT, () => {
  console.log(`Serveur démarré : http://localhost:${PORT}`);
});