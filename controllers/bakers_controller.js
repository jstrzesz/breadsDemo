const express = require('express');
const bakerRouter = express.Router();
const Baker = require('../models/baker');
const Bread = require('../models/bread');
const bakerSeedData = require('../models/baker_seed');

// Seed
bakerRouter.get('/data/seed', (req, res) => {
  Baker.insertMany(bakerSeedData)
    .then(() => {
      res.redirect('/breads');
    })
    .catch(err => {
      console.error(err);
      res.redirect('Error404');
    });
});

// Index
bakerRouter.get('/', (req, res) => {
  Baker.find()
    .populate('breads')
    .then(foundBakers => {
      res.send(foundBakers)
    })
    .catch(err => {
      console.error(err)
      res.redirect('Error404');
    });
});

// Show
bakerRouter.get('/:id', (req, res) => {
  Baker.findById(req.params.id)
    .populate({
      path: 'breads',
      limit: 3,
    })
    .then(baker => {
      res.render('Baker', { baker });
    })
    .catch(err => {
      console.error(err);
      res.redirect('Error404');
    })
});

// Delete
bakerRouter.delete('/:id', (req, res) => {
  Baker.findByIdAndDelete(req.params.id)
    .then(deletedBaker => {
      res.status(303).redirect('/breads');
    })
    .catch(err => {
      console.error(err);
      res.redirect('Error404');
    })
});

module.exports = bakerRouter;
