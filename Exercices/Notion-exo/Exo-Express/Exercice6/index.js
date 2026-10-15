const express = require('express');
const app = express();

const articles = [
  { id: 1, titre: 'Découvrir Node.js' },
  { id: 2, titre: 'Premiers pas avec Express' },
  { id: 3, titre: 'Comprendre les middlewares' }
];

app.get('/articles', (req, res) => {
  res.json(articles);
});

app.route('/articles/:id')
  .get((req, res) => {
    const id = Number(req.params.id);
    const article = articles.find(a => a.id === id);

    if (!article) {
      return res.status(404).send('Article introuvable');
    }
    res.json(article);
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const index = articles.findIndex(a => a.id === id);

    if (index === -1) {
      return res.status(404).send('Article introuvable');
    }
    articles.splice(index, 1);
    res.send('Article supprimé');
  });

app.listen(3000, () => {
  console.log('Serveur Express démarré sur http://localhost:3000');
});