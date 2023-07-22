// Dependencies
const express = require('express');
require('dotenv').config();

const { PORT } = process.env;

// Configuration
const app = express();

// MIDDLEWARE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!');
});

// Breads
const breadsController = require('./controllers/breads_controller');
app.use('/breads', breadsController);

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
