const express = require('express');
const router = express.Router();

// Load Cta model
const Footer = require('../../models/Footer');

// Homepage
router.get('/', (req, res) => {
    Footer.find()
    .then(Footer => res.json(Footer))
    .catch(err => res.status(404).json({ noFooterfound: 'No Footer Data found' }));
});

module.exports = router;