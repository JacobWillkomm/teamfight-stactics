const mongoose = require('mongoose');

const companionSchema = new mongoose.Schema({
    content_ID: String,
    item_ID: Number,
    skin_ID: Number,
    species: String
});

module.exports = mongoose.model('Companion', companionSchema);
