const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

let wishes = require(path.join(__dirname, 'src', 'w.json'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/wishes', (req, res) => {
  res.render('w.ejs', {'wishes': wishes});
});

app.get('/music', (req, res) => {
  res.render('m.ejs');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[STARTING]: Server started on port ${PORT}`);
});
