const http = require('http');
const PORT = 3000;


const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(`Tu as demandé : ${req.url}`);
});

server.listen(PORT, () => {
  console.log(`Serveur démarré : http://localhost:${PORT}`);
});