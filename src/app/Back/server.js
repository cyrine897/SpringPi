const express = require('express');
// Importez d'autres dépendances selon vos besoins

const app = express();


app.get('/api/posts', (req, res) => {
  const posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    // Ajoutez d'autres publications
  ];
  res.json(posts);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Serveur back-end en cours d'exécution sur le port ${port}`);
});
