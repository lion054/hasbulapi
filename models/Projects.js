const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  game_name: {
    type: String,
    required: true,
  },
  game_description: {
    type: String,
    required: true,
  },
  participants: {
    type: Number,
    required: true
  },
  token_price: {
    type: String,
    required: true
  },
  total_supply: {
    type: Number,
    required: true
  },
  total_raised: {
    type: Number,
    default: 0
  },
  progress: {
    type: Number,
    default: 0
  },
  project_status: {
    type: String,
    required: true,
  },
  amount_to_raise: {
    type: Number,
    required: true,
  },
  game_assets: {
    type: String,
    required: true,
  },
  game_demo: {
    type: String,
    required: true,
  },
  token_sale_starts: {
    type: Date,
    default: Date.now
  },
  token_sale_ends: {
    type: Date,
    default: Date.now
  },
  game_image: {
    type: String,
    required: true
  },
  game_icon: {
    type: String,
    required: true
  },
  website_url: {
    type: String,
    required: true,
  },
  pitch_deck_url: {
    type: String,
    required: true,
  },
  contact_email: {
    type: String,
    required: true,
  },
  telegram_handle: {
    type: String,
    required: true,
  },
  date_created: {
    type: Date,
    default: Date.now,
  },
  date_modified: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("project", projectSchema);
