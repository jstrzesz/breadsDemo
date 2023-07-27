const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread');

// INDEX
breads.get('/', (req, res) => {
  res.render('Index', {
    breads: Bread,
    title: 'Index Page',
  }
  );
});

// New
breads.get('/new', (req, res) => {
  res.render('New');
});


// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread: Bread[req.params.arrayIndex],
      index: req.params.arrayIndex,
    });
  } else {
    res.render('Error404');
  }
});

// EDIT
breads.get('/:arrayIndex/edit', (req, res) => {
  res.render('Edit', {
    bread: Bread[req.params.arrayIndex],
    index: req.params.arrayIndex,
  });
});

// CREATE
breads.post('/', (req, res) => {
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = 'true';
  } else {
    req.body.hasGluten = 'false';
  }
  Bread.push(req.body);
  res.redirect('/breads');
});

//
breads.put('/:arrayIndex', (req, res) => {
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread[req.params.arrayIndex] = req.body;
  res.redirect(`/breads/${req.params.arrayIndex}`);
});

// DESTROY
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1);
  res.status(303).redirect('/breads');
});

module.exports = breads;

