const express = require('express');

const router = express.Router();

const MyForm = require('../models/form');

// create new city
router.post('/api/form/new', (req, res) => {
  const newForm = new MyForm({
    name: 'Canbera',
    continent: 'Australia',
    population: 30,
    type: 'city',
  });
  newForm
    .save()
    .then((result) => {
      res.json({ success: true, result: result });
    })
    .catch((err) => res.status(400).json({ success: false, err }));
});

// get all cities

router.get('/api/form/allForms', (req, res) => {
  MyForm.find()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json('doesnt work'));
});

module.exports = router;
