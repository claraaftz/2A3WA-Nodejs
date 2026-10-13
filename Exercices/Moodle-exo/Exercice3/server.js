const http = require('node:http');

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if (req.method === 'GET') {
    switch (req.url) {
      case '/':
        res.statusCode = 200;
        res.end('Bienvenue sur le serveur Node');
        break;
      case '/hello':
        res.statusCode = 200;
        res.end('Hello World');
        break;
      case '/time':
        res.statusCode = 200;
        res.end(new Date().toISOString());
        break;

      default:
        res.statusCode = 404;
        res.end('Route inconnue');
        break;
    }
  } else {
    res.statusCode = 404;
    res.end('Route inconnue');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});