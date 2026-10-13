const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Ma première page</title>
    </head>
    <body>
      <h1>Bienvenue sur mon site</h1>
      <p>Voici ma première page web générée avec Node.js :</p>
      <ul>
        <li>Premier élément</li>
        <li>Deuxième élément</li>
        <li>Troisième élément</li>
      </ul>
    </body>
    </html>
  `;
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(htmlContent);
});

server.listen(PORT, () => {
  console.log(`Serveur démarré : http://localhost:${PORT}`);
});

