const express = require('express');
const { appendFile } = require('fs/promises');

const router = express.Router();

const MyForm = require('../models/form');

// create new city
router.post('/api/form/new', (req, res) => {
  const newForm = new MyForm(req.body);
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

// remove city

router.delete('/api/form/delete/:id', async (req, res) => {
  try {
    const formId = req.params.id;
    const cardToDelete = await MyForm.findByIdAndDelete(formId);
    res.json({ success: true, deleted: cardToDelete });
  } catch (err) {
    res.json(err);
  }
});

// edit city

router.put('/api/form/edit/:id', async (req, res) => {
  try {
    const formId = req.params.id;
    const findFormById = await MyForm.findByIdAndUpdate(
      formId,
      req.body
    ).exec();
    res.json({ success: true, findFormById });
  } catch (err) {
    res.json(err);
  }
});

// get cities

router.get('/api/form/cities', async (req, res) => {
  try {
    const allData = await MyForm.find();
    // console.log(allData);
    const onlyCities = allData.filter((c) => c.type === 'City');
    console.log(onlyCities);
    res.json({ success: true, onlyCities });
  } catch (err) {
    res.json(err);
  }
});

// get countries

router.get('/api/form/countries', async (req, res) => {
  try {
    const allData = await MyForm.find();
    // console.log(allData);
    const onlyCountries = allData.filter((c) => c.type === 'Country');
    console.log(onlyCountries);
    res.json({ success: true, onlyCountries });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
