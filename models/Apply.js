const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    project_email: {
        type: String,
        required: true
    },
    telegram_handle: {
        type: String,
        required: true
    },
    referred: {
        type: String,
        required: true
    },
    token_name: {
        type: String,
        required: true
    },
    token_image: {
        type: String
    },
    is_token_circulation: {
        type: Boolean
    },
    eta_tge: {
        type: Date
    },
    project_description: {
        type: String
    },
    team_size: {
        type: Number
    },
    team_members: {
        type: String
    },
    token_utilities: {
        type: String
    },
    token_demand_drivers: {
        type: String
    },
    is_product_launched: {
        type: Boolean
    },
    supporting_documents: {
        type: String
    },
    social_links: {
        type: String
    },
    submissionDate: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Application', schema);