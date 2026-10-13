const http = require('http');
const PORT = 3000;


const routes = {
  '/': '<h1>Accueil</h1><p>Bienvenue sur la page d\'accueil !</p>',
  '/about': '<h1>À propos</h1><p>En savoir plus sur notre projet.</p>',
  '/contact': '<h1>Contact</h1><p>Contactez-nous à l\'adresse contact@exemple.com</p>'
};


const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(204);
    return res.end();
  }
  const content = routes[req.url];

  if (content) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(content);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404 - Page introuvable</h1><p>La page demandée n\'existe pas.</p>');
  }
});




server.listen(PORT, () => {
  console.log(`Serveur démarré : http://localhost:${PORT}`);
});