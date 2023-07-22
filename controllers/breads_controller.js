const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread');
// const Index = require('../views/Index');

// INDEX
breads.get('/', (req, res) => {
  res.render('Index', {
      breads: Bread,
      title: 'Index Page',
    }
  );
  // res.send(Bread);
});

// SHOW
breads.get('/:arrayIndex', (req, res) => {
  res.send(Bread[req.params.arrayIndex]);
});

module.exports = breads;
