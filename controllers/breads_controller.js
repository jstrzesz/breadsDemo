const express = require('express');
const breads = express.Router();
const Bread = require('../models/bread');
const Baker = require('../models/baker');
const seedData = require('../models/seed');

// SEED
breads.get('/data/seed', (req, res) => {
  Bread.insertMany(seedData)
    .then(createdBreads => {
      res.redirect('/breads');
    })
    .catch(err => {
      console.error(err);
      res.redirect('Error404');
    })
})

// INDEX
breads.get('/', async (req, res) => {
  try {
    const foundBakers = await Baker.find().lean();
    const foundBreads = await Bread.find().limit(2).lean();
    res.render('Index', {
        bakers: foundBakers,
        breads: foundBreads,
        title: 'Index Page',
      }
    );
  } catch (error) {
    res.render('Error404');
  };
});

// New
breads.get('/new', (req, res) => {
  Baker.find()
    .then(foundBakers => {
      res.render('New', { 
        bakers: foundBakers
      });
    })
    .catch(err => {
      console.log(err);
      res.redirect('Error404');
    });
});

// SHOW
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
    .populate('baker')
    .then(foundBread => {
      console.log(foundBread);
      res.render('Show', {
        bread: foundBread,
      });

    })
    .catch(err => {
      res.render('Error404');
    });
});

// EDIT
breads.get('/:id/edit', (req, res) => {
  Baker.find()
    .then(foundBakers => {
      Bread.findById(req.params.id)
        .then(foundBread => {
          res.render('Edit', {
            bread: foundBread,
            bakers: foundBakers,
          });
        })
    })
    .catch(err => {
      console.error(err);
      res.redirect('Error404');
    })
});

// CREATE
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = undefined;
  }
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = 'true';
  } else {
    req.body.hasGluten = 'false';
  }
  Bread.create(req.body);
  res.redirect('/breads');
});

// UPDATE
breads.put('/:id', (req, res) => {
  if (req.body.hasGluten === 'on') {
    req.body.hasGluten = true;
  } else {
    req.body.hasGluten = false;
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedBread => {
      res.redirect(`/breads/${req.params.id}`);
    })
    .catch(err => {
      console.error(err);
      res.redirect('Error404');
    })
});


// DESTROY
breads.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id)
    .then(deletedBread => {
      res.status(303).redirect('/breads');
    })
    .catch(err => {
      console.error(err);
      res.redirect('Error404');
    })
});

module.exports = breads;
