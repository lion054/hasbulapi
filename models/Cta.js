const mongoose = require('mongoose');

const ctaSchema = new mongoose.Schema({
  sub_heading: {
    type: String,
    required: true
  },
  heading: {
    type: String,
    required: true
  },
  img: {
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
  },
  btn: {
    type: String,
    required: true
  },
  btnIcon: {
    type: String,
    required: true
  }
});

const Cta = mongoose.model('Cta', ctaSchema);

module.exports = Cta;