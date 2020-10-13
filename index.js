const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(PORT, () => {
  console.log(`[STARTING]: Server started on port ${PORT}`);
});
