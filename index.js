const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[STARTING]: Server started on port ${PORT}`);
});
