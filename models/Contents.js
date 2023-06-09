const mongoose = require('mongoose');

const contentDataSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  featured: {
    type: String,
    default: ''
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

const subHeadingSchema = new mongoose.Schema({
  sub_heading: {
    type: String,
    required: true
  },
  heading: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true
  },
  contentData: {
    type: [contentDataSchema],
    required: true
  }
});

const Content = mongoose.model('contents', subHeadingSchema);

module.exports = Content;