const express = require('express');
const router = express.Router();

// Load Project model
const Application = require('../../models/Apply');

// @route GET api/Applications
// @description Get all Applications
// @access Public
router.get('/', (req, res) => {
    console.log('apply');
    Application.find()
        .then(Applications => res.json(Applications))
        .catch(err => res.status(404).json({ noApplicationsfound: 'No Applications found' }));
});

// @route GET api/Applications
// @description add/save Application
// @access Public
router.post('/', (req, res) => {
    console.log(req.body);
    Application.create(req.body)
        .then(Application => res.json({ msg: 'Application added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this Application', request: req.body }));
});

module.exports = router;