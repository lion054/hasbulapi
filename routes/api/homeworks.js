const express = require('express');
const router = express.Router();

// Load Homework model
const HomeWork = require('../../models/Homeworks');

// Homepage
router.get('/', (req, res) => {
  HomeWork.find()
    .then(HomeWork => res.json(HomeWork))
    .catch(err => res.status(404).json({ noProjectsfound: 'No Home Work Data found' }));
});

module.exports = router;