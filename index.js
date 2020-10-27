const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

let wishes = require(path.join(__dirname, 'src', 'w.json'));
let feedbacks = require(path.join(__dirname, 'src', 'm.json'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/wishes', (req, res) => {
  res.render('w.ejs', {'wishes': wishes});
});

app.get('/game', (req, res) => {
  res.sendFile('public/g.html',{root:__dirname});
});

app.get('/macuserscansuckmydickandtakethis', (req, res) => {
  res.send("<link rel='icon' href='/images/favicon.png'><h1 style='margin:0;line-height:1;cursor:pointer;text-align:center;font-size:100vh;'>L<h1><script>let a=new Audio('/audio/L\\\'s Theme.mp3');a.addEventListener('ended',()=>{a.play();});document.querySelector('body').addEventListener('click',()=>{console.log('heh');a.play();});</script>");
});

app.get('/music', (req, res) => {
  res.render('m.ejs', {'feedbacks': feedbacks});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[STARTING]: Server started on port ${PORT}`);
});
