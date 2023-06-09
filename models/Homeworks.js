const mongoose = require('mongoose');

const workDataSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const HomeWork = mongoose.model('homeworks', workDataSchema);

module.exports = HomeWork;