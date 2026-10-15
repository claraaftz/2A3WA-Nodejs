const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const filePath = path.join(__dirname, 'template.html');
let templateData = '';



const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(204);
    return res.end();
  }
  if (!templateData) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('500 - Erreur serveur');
  }


  const htmlModifie = templateData
    .replace('{{prenom}}', 'Camille')
    .replace('{{ville}}', 'Lyon');


  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(htmlModifie);
});



server.listen(PORT, () => {
  console.log(`Serveur démarré : http://localhost:${PORT}`);
});