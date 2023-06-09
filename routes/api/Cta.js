const express = require('express');
const router = express.Router();

// Load Cta model
const Cta = require('../../models/Cta');

// Homepage
router.get('/', (req, res) => {
    Cta.find()
    .then(Cta => res.json(Cta))
    .catch(err => res.status(404).json({ noCtafound: 'No Cta Data found' }));
});

module.exports = router;