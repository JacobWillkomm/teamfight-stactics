const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
    character_id: String,
    itemNames: [String], // Assuming itemNames is an array of strings
    name: String,
    rarity: Number,
    tier: Number
});

module.exports = mongoose.model('Unit', unitSchema);
