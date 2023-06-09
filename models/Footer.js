const mongoose = require('mongoose');

const socialDataSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
});

const widgetDataSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

const footerSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true
  },
  copyright: {
    type: String,
    required: true
  },
  owner: {
    type: String,
    required: true
  },
  ownerLink: {
    type: String,
    required: true
  },
  socialData: {
    type: [socialDataSchema],
    required: true
  },
  widgetData: {
    type: [widgetDataSchema],
    required: true
  }
});

const Footer = mongoose.model('footers', footerSchema);

module.exports = Footer;