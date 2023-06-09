const express = require('express');
const router = express.Router();

// Load Homework model
const Content = require('../../models/Contents');

// Homepage
router.get('/', (req, res) => {
    Content.find()
    .then(Content => res.json(Content))
    .catch(err => res.status(404).json({ noContentsfound: 'No Content Data found' }));
});

module.exports = router;